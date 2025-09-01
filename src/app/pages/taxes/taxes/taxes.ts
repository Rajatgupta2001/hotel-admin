import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HotelStore } from '../../../services/hotel-store.service';
import { Tax } from '../../../models/taxes/tax.model';
import { EntityId } from '../../../models/core/entity-id.model';

@Component({
  selector: 'app-taxes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  templateUrl: './taxes-old.html',
  styleUrls: ['./taxes-old.scss'],
})
export class TaxesComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  taxes = computed(() => this.store.taxes());
  ratePlans = computed(() => this.store.ratePlans());
  displayedColumns = ['code', 'name', 'rate', 'type', 'actions'];
  saving = signal(false);
  editing = signal<Tax | null>(null);

  // Template compatibility
  get taxForm() {
    return this.form;
  }

  form: FormGroup = this.fb.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    shortName: [''],
    rate: [0, [Validators.required, Validators.min(0)]],
    calculationType: ['percentage', Validators.required],
    taxType: ['gst', Validators.required],
    taxCategory: ['state', Validators.required],
    applicableOn: ['room-rate', Validators.required],
    frequency: ['per-night', Validators.required],
    description: [''],
    displayOnInvoice: [true],
    isCompound: [false],
    roundingMethod: ['none', Validators.required],
    roundingPrecision: [
      2,
      [Validators.required, Validators.min(0), Validators.max(4)],
    ],
    currency: ['USD'],
    isRefundable: [false],
    minimumAmount: [null],
    maximumAmount: [null],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const v = this.form.value;
    const now = new Date();
    const hotelId = this.store.hotel()?.id ?? ('' as EntityId);

    if (this.editing()) {
      const patch: Partial<Tax> = {
        code: v.code,
        name: v.name,
        shortName: v.shortName || v.name,
        rate: Number(v.rate),
        calculationType: v.calculationType,
        taxType: v.taxType,
        taxCategory: v.taxCategory,
        applicableOn: v.applicableOn,
        frequency: v.frequency,
        description: v.description,
        displayOnInvoice: v.displayOnInvoice,
        isCompound: v.isCompound,
        roundingMethod: v.roundingMethod,
        roundingPrecision: v.roundingPrecision,
        currency: v.calculationType === 'percentage' ? undefined : v.currency,
        isRefundable: v.isRefundable,
        minimumAmount: v.minimumAmount,
        maximumAmount: v.maximumAmount,
      };
      const res = this.store.updateTax(this.editing()!.id, patch);
      this.saving.set(false);
      if (res.ok) {
        this.snackBar.open('Tax updated', 'Close', { duration: 2500 });
        this.cancelEdit();
      } else {
        this.snackBar.open(res.errors?.[0] ?? 'Failed to update tax', 'Close', {
          duration: 3500,
        });
      }
      return;
    }

    const tax: Tax = {
      id: '' as EntityId,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      sortOrder: this.taxes().length + 1,
      code: v.code,
      name: v.name,
      description: v.description || '',
      shortName: v.shortName || v.name,
      hotelId,
      taxType: v.taxType,
      taxCategory: v.taxCategory,
      applicableOn: v.applicableOn,
      calculationType: v.calculationType,
      rate: Number(v.rate),
      currency: v.calculationType === 'percentage' ? undefined : v.currency,
      isSlabBased: false,
      applicableToRoomTypes: [],
      applicableToRatePlans: [],
      validFrom: now,
      isCompound: v.isCompound,
      roundingMethod: v.roundingMethod,
      roundingPrecision: v.roundingPrecision,
      frequency: v.frequency,
      isRefundable: v.isRefundable,
      displayOnInvoice: v.displayOnInvoice,
      minimumAmount: v.minimumAmount,
      maximumAmount: v.maximumAmount,
      journalPostingRules: [],
    } as Tax;

    const res = this.store.addTax(tax);
    this.saving.set(false);
    if (res.ok) {
      this.snackBar.open('Tax added', 'Close', { duration: 2500 });
      this.form.reset({
        rate: 0,
        calculationType: 'percentage',
        taxType: 'gst',
        taxCategory: 'state',
        applicableOn: 'room-rate',
        frequency: 'per-night',
        displayOnInvoice: true,
        isCompound: false,
        roundingMethod: 'none',
        roundingPrecision: 2,
        currency: 'USD',
        isRefundable: false,
      });
    } else {
      this.snackBar.open(res.errors?.[0] ?? 'Failed to add tax', 'Close', {
        duration: 3500,
      });
    }
  }

  deleteTax(id: EntityId): void {
    if (!confirm('Delete this tax?')) return;
    const res = this.store.removeTax(id);
    if (res.ok) {
      this.snackBar.open('Tax deleted', 'Close', { duration: 2500 });
    } else {
      this.snackBar.open(res.errors?.[0] ?? 'Failed to delete tax', 'Close', {
        duration: 3500,
      });
    }
  }

  editTax(t: Tax): void {
    this.editing.set(t);
    this.form.patchValue({
      code: t.code,
      name: t.name,
      shortName: t.shortName,
      rate: t.rate,
      calculationType: t.calculationType,
      taxType: t.taxType,
      taxCategory: t.taxCategory,
      applicableOn: t.applicableOn,
      frequency: t.frequency,
      description: t.description,
      displayOnInvoice: t.displayOnInvoice,
      isCompound: t.isCompound,
      roundingMethod: t.roundingMethod,
      roundingPrecision: t.roundingPrecision,
      currency: t.currency ?? 'USD',
      isRefundable: t.isRefundable,
      minimumAmount: t.minimumAmount,
      maximumAmount: t.maximumAmount,
    });
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.form.reset({
      rate: 0,
      calculationType: 'percentage',
      taxType: 'gst',
      taxCategory: 'state',
      applicableOn: 'room-rate',
      frequency: 'per-night',
      displayOnInvoice: true,
      isCompound: false,
      roundingMethod: 'none',
      roundingPrecision: 2,
      currency: 'USD',
      isRefundable: false,
    });
  }

  closeForm(): void {
    this.cancelEdit();
  }

  resetForm(): void {
    this.form.reset({
      rate: 0,
      calculationType: 'percentage',
      taxType: 'gst',
      taxCategory: 'state',
      applicableOn: 'room-rate',
      frequency: 'per-night',
      displayOnInvoice: true,
      isCompound: false,
      roundingMethod: 'none',
      roundingPrecision: 2,
      currency: 'USD',
      isRefundable: false,
    });
  }
}
