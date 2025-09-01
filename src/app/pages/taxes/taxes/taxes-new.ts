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
import { Tax } from '../../../../models/tax.model';
import { Tax as OldTax } from '../../../models/tax.model';

@Component({
  selector: 'app-taxes-new',
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
  templateUrl: './taxes.html',
  styleUrls: ['./taxes.scss'],
})
export class TaxesNewComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  taxes = computed(() => this.store.taxes());
  displayedColumns = [
    'taxshortname',
    'taxname',
    'tax',
    'taxtype',
    'chargetype',
    'status',
    'actions',
  ];
  saving = signal(false);
  editing = signal<Tax | null>(null);

  taxForm: FormGroup = this.fb.group({
    taxname: ['', Validators.required],
    taxshortname: [''],
    taxappliedon: ['room'],
    taxcategory: [''],
    taxdepartment: [''],
    taxtype: ['percentage', Validators.required],
    chargetype: ['percentage', Validators.required],
    tax: [0, [Validators.required, Validators.min(0)]],
    description: [''],
    status: ['A', Validators.required],
    shortorder: [1],
    isslabbased: [0],
    accountcodeid: [null],
    istaxable: [1],
    isalternate: [0],
    hasrule: [0],
    rule: [''],
    linepost: [1],
  });

  // UI State
  showAddForm = signal(false);

  // Form management
  closeForm(): void {
    this.showAddForm.set(false);
    this.editing.set(null);
    this.resetForm();
  }

  resetForm(): void {
    this.taxForm.reset({
      taxappliedon: 'room',
      taxtype: 'percentage',
      chargetype: 'percentage',
      tax: 0,
      status: 'A',
      shortorder: 1,
      isslabbased: 0,
      istaxable: 1,
      isalternate: 0,
      hasrule: 0,
      rule: '',
      linepost: 1,
    });
  }

  onSubmit(): void {
    if (this.taxForm.invalid) {
      this.taxForm.markAllAsTouched();
      return;
    }

    this.saving.set(true);
    const formValue = this.taxForm.value;
    const hotelId = this.store.hotel()?.id ?? 1;

    if (this.editing()) {
      // Update existing tax
      const patch = {
        taxname: formValue.taxname,
        taxshortname: formValue.taxshortname,
        taxappliedon: formValue.taxappliedon,
        taxcategory: formValue.taxcategory,
        taxdepartment: formValue.taxdepartment,
        taxtype: formValue.taxtype,
        chargetype: formValue.chargetype,
        tax: formValue.tax,
        description: formValue.description,
        status: formValue.status,
        shortorder: formValue.shortorder,
        isslabbased: formValue.isslabbased,
        accountcodeid: formValue.accountcodeid,
        istaxable: formValue.istaxable,
        isalternate: formValue.isalternate,
        hasrule: formValue.hasrule,
        rule: formValue.rule,
        linepost: formValue.linepost,
        modifiedby: 1,
      };

      const res = this.store.updateTax(
        String(this.editing()!.id),
        patch as Partial<OldTax>,
      );
      this.saving.set(false);

      if (res.ok) {
        this.snackBar.open('Tax updated successfully', 'Close', {
          duration: 2500,
        });
        this.closeForm();
      } else {
        this.snackBar.open(res.errors?.[0] ?? 'Failed to update tax', 'Close', {
          duration: 3500,
        });
      }
    } else {
      // Create new tax - map to the structure that the store expects
      const newTax = {
        id: 0, // will be set in addTax
        hotelid: hotelId, // Note: hotelid (lowercase) not hotelId
        taxname: formValue.taxname,
        taxshortname: formValue.taxshortname,
        taxappliedon: formValue.taxappliedon,
        taxcategory: formValue.taxcategory,
        taxdepartment: formValue.taxdepartment,
        taxtype: formValue.taxtype,
        chargetype: formValue.chargetype,
        tax: formValue.tax,
        description: formValue.description,
        status: formValue.status,
        shortorder: formValue.shortorder,
        isslabbased: formValue.isslabbased,
        accountcodeid: formValue.accountcodeid,
        istaxable: formValue.istaxable,
        isalternate: formValue.isalternate,
        hasrule: formValue.hasrule,
        rule: formValue.rule,
        linepost: formValue.linepost,
        createdby: 1,
        modifiedby: 1,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = this.store.addTax(newTax as any);
      this.saving.set(false);

      if (res.ok) {
        this.snackBar.open('Tax added successfully', 'Close', {
          duration: 2500,
        });
        this.resetForm();
        this.closeForm();
      } else {
        this.snackBar.open(res.errors?.[0] ?? 'Failed to add tax', 'Close', {
          duration: 3500,
        });
      }
    }
  }

  editTax(tax: Tax): void {
    this.editing.set(tax);
    this.showAddForm.set(true);
    this.taxForm.patchValue({
      taxname: tax.taxname,
      taxshortname: tax.taxshortname || '',
      taxappliedon: tax.taxappliedon || 'room',
      taxcategory: tax.taxcategory || '',
      taxdepartment: tax.taxdepartment || '',
      taxtype: tax.taxtype,
      chargetype: tax.chargetype,
      tax: tax.tax || 0,
      description: tax.description || '',
      status: tax.status,
      shortorder: tax.shortorder || 1,
      isslabbased: tax.isslabbased || 0,
      accountcodeid: tax.accountcodeid || null,
      istaxable: tax.istaxable ?? 1,
      isalternate: tax.isalternate || 0,
      hasrule: tax.hasrule || 0,
      rule: tax.rule || '',
      linepost: tax.linepost ?? 1,
    });
  }

  deleteTax(id: number): void {
    if (!confirm('Are you sure you want to delete this tax?')) return;

    const res = this.store.removeTax(String(id));
    if (res.ok) {
      this.snackBar.open('Tax deleted successfully', 'Close', {
        duration: 2500,
      });
    } else {
      this.snackBar.open(res.errors?.[0] ?? 'Failed to delete tax', 'Close', {
        duration: 3500,
      });
    }
  }

  // Status helpers
  getStatusText(status: string): string {
    switch (status) {
      case 'A':
        return 'Active';
      case 'I':
        return 'Inactive';
      case 'D':
        return 'Deleted';
      default:
        return 'Unknown';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'A':
        return 'check_circle';
      case 'I':
        return 'cancel';
      case 'D':
        return 'delete';
      default:
        return 'help';
    }
  }

  getStatusIconClass(status: string): string {
    switch (status) {
      case 'A':
        return 'text-green-600';
      case 'I':
        return 'text-red-600';
      case 'D':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  }

  getTaxTypeText(taxType: string): string {
    switch (taxType) {
      case 'percentage':
        return 'Percentage';
      case 'fixed':
        return 'Fixed Amount';
      case 'compound':
        return 'Compound';
      default:
        return taxType;
    }
  }

  getChargeTypeText(chargeType: string): string {
    switch (chargeType) {
      case 'percentage':
        return 'Percentage';
      case 'fixed':
        return 'Fixed Amount';
      case 'per_night':
        return 'Per Night';
      case 'per_person':
        return 'Per Person';
      default:
        return chargeType;
    }
  }

  getAppliedOnText(appliedOn: string): string {
    switch (appliedOn) {
      case 'room':
        return 'Room';
      case 'guest':
        return 'Guest';
      case 'booking':
        return 'Booking';
      case 'service':
        return 'Service';
      default:
        return appliedOn || 'Room';
    }
  }
}
