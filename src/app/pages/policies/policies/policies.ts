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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HotelStore } from '../../../services/hotel-store.service';
import { Policy } from '../../../models/policy.model';
import { EntityId } from '../../../models/base.model';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: './policies.html',
  styleUrls: ['./policies.scss'],
})
export class PoliciesComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  policies = computed(() => this.store.policies());
  displayedColumns = ['code', 'name', 'type', 'actions'];
  saving = signal(false);
  editing = signal<Policy | null>(null);

  form: FormGroup = this.fb.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    policyType: ['cancellation', Validators.required],
    displayOnWebsite: [true],
    displayInBooking: [true],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const v = this.form.value as {
      code: string;
      name: string;
      policyType: Policy['policyType'];
      displayOnWebsite: boolean;
      displayInBooking: boolean;
    };

    const now = new Date();
    const hotelId = this.store.hotel()?.id ?? ('' as EntityId);

    if (this.editing()) {
      const patch: Partial<Policy> = {
        updatedAt: now,
        code: v.code,
        name: v.name,
        policyType: v.policyType,
        displayOnWebsite: v.displayOnWebsite,
        displayInBooking: v.displayInBooking,
      } as Partial<Policy>;
      const res = this.store.updatePolicy(
        this.editing()!.id as EntityId,
        patch,
      );
      this.saving.set(false);
      if (res.ok) {
        this.snackBar.open('Policy updated', 'Close', { duration: 2500 });
        this.cancelEdit();
      } else {
        this.snackBar.open(
          res.errors?.[0] ?? 'Failed to update policy',
          'Close',
          { duration: 3500 },
        );
      }
      return;
    }

    const p: Policy = {
      id: '' as EntityId,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      code: v.code,
      name: v.name,
      description: '',
      hotelId,
      policyType: v.policyType,
      applicability: 'all-bookings',
      policyText: [],
      shortDescription: [],
      rules: [],
      validFrom: now,
      displayOnWebsite: v.displayOnWebsite,
      displayInBooking: v.displayInBooking,
      requiresAcknowledgment: false,
      priority: this.policies().length + 1,
    } as Policy;

    const res = this.store.addPolicy(p);
    this.saving.set(false);
    if (res.ok) {
      this.snackBar.open('Policy added', 'Close', { duration: 2500 });
      this.form.reset({
        policyType: 'cancellation',
        displayOnWebsite: true,
        displayInBooking: true,
      });
    } else {
      this.snackBar.open(res.errors?.[0] ?? 'Failed to add policy', 'Close', {
        duration: 3500,
      });
    }
  }

  editPolicy(p: Policy): void {
    this.editing.set(p);
    this.form.patchValue({
      code: p.code,
      name: p.name,
      policyType: p.policyType,
      displayOnWebsite: p.displayOnWebsite,
      displayInBooking: p.displayInBooking,
    });
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.form.reset({
      policyType: 'cancellation',
      displayOnWebsite: true,
      displayInBooking: true,
    });
  }

  deletePolicy(id: EntityId): void {
    if (!confirm('Delete this policy?')) return;
    const res = this.store.removePolicy(id);
    if (res.ok) {
      this.snackBar.open('Policy deleted', 'Close', { duration: 2500 });
    } else {
      this.snackBar.open(
        res.errors?.[0] ?? 'Failed to delete policy',
        'Close',
        { duration: 3500 },
      );
    }
  }
}
