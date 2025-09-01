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
import { Role } from '../../../models/user.model';
import { EntityId } from '../../../models/base.model';

@Component({
  selector: 'app-roles',
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
  templateUrl: './roles.html',
  styleUrls: ['./roles.scss'],
})
export class RolesComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  roles = computed(() => this.store.roles());

  displayedColumns = ['name', 'displayName', 'actions'];
  saving = signal(false);
  editing = signal<Role | null>(null);

  private uniqueRoleNameValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value ?? '').toString().trim().toLowerCase();
      if (!value) return null;
      const currentId = this.editing()?.id as EntityId | undefined;
      const exists = this.store
        .roles()
        .some(
          (r) =>
            r.id !== currentId && (r.name ?? '').trim().toLowerCase() === value,
        );
      return exists ? { duplicate: true } : null;
    };
  };

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, this.uniqueRoleNameValidator()]],
    displayName: ['', Validators.required],
    description: [''],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const v = this.form.value as {
      name: string;
      displayName: string;
      description?: string;
    };

    const now = new Date();
    const hotelId = this.store.hotel()?.id ?? ('' as EntityId);

    if (this.editing()) {
      const patch: Partial<Role> = {
        updatedAt: now,
        name: v.name,
        displayName: v.displayName,
        description: v.description,
      };
      const res = this.store.updateRole(this.editing()!.id as EntityId, patch);
      this.saving.set(false);
      if (res.ok) {
        this.snackBar.open('Role updated', 'Close', { duration: 2500 });
        this.cancelEdit();
      } else {
        this.snackBar.open(
          res.errors?.[0] ?? 'Failed to update role',
          'Close',
          { duration: 3500 },
        );
      }
      return;
    }

    const r: Role = {
      id: '' as EntityId,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      hotelId,
      name: v.name,
      displayName: v.displayName,
      description: v.description,
      permissions: [],
      isSystemRole: false,
      isDefault: false,
    } as Role;

    const res = this.store.addRole(r);
    this.saving.set(false);
    if (res.ok) {
      this.snackBar.open('Role added', 'Close', { duration: 2500 });
      this.form.reset();
    } else {
      this.snackBar.open(res.errors?.[0] ?? 'Failed to add role', 'Close', {
        duration: 3500,
      });
    }
  }

  editRole(r: Role): void {
    this.editing.set(r);
    this.form.patchValue({
      name: r.name,
      displayName: r.displayName,
      description: r.description || '',
    });
    // refresh unique validator in edit context
    this.form.get('name')?.updateValueAndValidity({ onlySelf: true });
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.form.reset();
    // refresh unique validator after cancelling edit
    this.form.get('name')?.updateValueAndValidity({ onlySelf: true });
  }

  deleteRole(id: EntityId): void {
    if (!confirm('Delete this role?')) return;
    const res = this.store.removeRole(id);
    if (res.ok) {
      this.snackBar.open('Role deleted', 'Close', { duration: 2500 });
    } else {
      this.snackBar.open(res.errors?.[0] ?? 'Failed to delete role', 'Close', {
        duration: 3500,
      });
    }
  }
}
