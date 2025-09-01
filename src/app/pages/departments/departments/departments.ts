import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HotelStore } from '../../../services/hotel-store.service';
import { Department } from '../../../models/user.model';
import { EntityId } from '../../../models/base.model';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  templateUrl: './departments.html',
  styleUrls: ['./departments.scss'],
})
export class DepartmentsComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  departments = computed(() => this.store.departments());

  displayedColumns = ['code', 'name', 'actions'];
  saving = signal(false);
  editing = signal<Department | null>(null);

  private uniqueDepartmentCodeValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value ?? '').toString().trim().toLowerCase();
      if (!value) return null;
      const currentId = this.editing()?.id as EntityId | undefined;
      const exists = this.store
        .departments()
        .some(
          (d) =>
            d.id !== currentId && (d.code ?? '').trim().toLowerCase() === value,
        );
      return exists ? { duplicate: true } : null;
    };
  };

  form: FormGroup = this.fb.group({
    code: ['', [Validators.required, this.uniqueDepartmentCodeValidator()]],
    name: ['', Validators.required],
    description: [''],
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
      description?: string;
    };

    const now = new Date();
    const hotelId = this.store.hotel()?.id ?? ('' as EntityId);

    if (this.editing()) {
      const patch: Partial<Department> = {
        updatedAt: now,
        code: v.code,
        name: v.name,
        description: v.description,
      } as Partial<Department>;
      const res = this.store.updateDepartment(
        this.editing()!.id as EntityId,
        patch,
      );
      this.saving.set(false);
      if (res.ok) {
        this.snackBar.open('Department updated', 'Close', { duration: 2500 });
        this.cancelEdit();
      } else {
        this.snackBar.open(
          res.errors?.[0] ?? 'Failed to update department',
          'Close',
          { duration: 3500 },
        );
      }
      return;
    }

    const d: Department = {
      id: '' as EntityId,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      hotelId,
      code: v.code,
      name: v.name,
      description: v.description,
      isActive: true,
    } as Department;

    const res = this.store.addDepartment(d);
    this.saving.set(false);
    if (res.ok) {
      this.snackBar.open('Department added', 'Close', { duration: 2500 });
      this.form.reset();
    } else {
      this.snackBar.open(
        res.errors?.[0] ?? 'Failed to add department',
        'Close',
        { duration: 3500 },
      );
    }
  }

  editDepartment(d: Department): void {
    this.editing.set(d);
    this.form.patchValue({
      code: d.code,
      name: d.name,
      description: d.description || '',
    });
    this.form.get('code')?.updateValueAndValidity({ onlySelf: true });
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.form.reset();
    this.form.get('code')?.updateValueAndValidity({ onlySelf: true });
  }

  deleteDepartment(id: EntityId): void {
    if (!confirm('Delete this department?')) return;
    const res = this.store.removeDepartment(id);
    if (res.ok) {
      this.snackBar.open('Department deleted', 'Close', { duration: 2500 });
    } else {
      this.snackBar.open(
        res.errors?.[0] ?? 'Failed to delete department',
        'Close',
        { duration: 3500 },
      );
    }
  }
}
