import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HotelStore } from '../../../services/hotel-store.service';
import { User, UserRole } from '../../../models/user.model';
import { EntityId } from '../../../models/base.model';

@Component({
  selector: 'app-users-old',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
  ],
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
})
export class UsersComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  users = computed(() => this.store.users());
  roles = computed(() => this.store.roles());
  departments = computed(() => this.store.departments());

  // UI State
  showAddForm = signal(false);
  saving = signal(false);
  editing = signal<User | null>(null);
  selectedUsers = signal<Set<EntityId>>(new Set());

  // Search and Filter
  searchTerm = signal('');
  selectedFilter = signal('all');
  currentPage = signal(1);
  itemsPerPage = signal(10);

  filteredUsers = computed(() => {
    let filtered = this.users();

    // Apply search filter
    const search = this.searchTerm().toLowerCase().trim();
    if (search) {
      filtered = filtered.filter(
        (user) =>
          user.firstName?.toLowerCase().includes(search) ||
          user.lastName?.toLowerCase().includes(search) ||
          user.email?.toLowerCase().includes(search) ||
          user.username?.toLowerCase().includes(search),
      );
    }

    // Apply type filter
    const typeFilter = this.selectedFilter();
    if (typeFilter !== 'all') {
      filtered = filtered.filter((user) =>
        this.getUserType(user).toLowerCase().includes(typeFilter.toLowerCase()),
      );
    }

    return filtered;
  });

  private uniqueUsernameValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value ?? '').toString().trim().toLowerCase();
      if (!value) return null;
      const currentId = this.editing()?.id as EntityId | undefined;
      const exists = this.store
        .users()
        .some(
          (u) =>
            u.id !== currentId &&
            (u.username ?? '').toString().trim().toLowerCase() === value,
        );
      return exists ? { duplicate: true } : null;
    };
  };

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, this.uniqueUsernameValidator()]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    bloodgroup: ['', Validators.required],
    userType: ['FO Executive', Validators.required],
    departmentId: [''],
    workAreas: [[]],
    status: ['active', Validators.required],
  });

  getUserType(user: User): string {
    if (user.roles && user.roles.length > 0) {
      const roleName = this.roleName(user.roles[0].roleId);
      if (roleName !== '-') return roleName;
    }
    return 'FO Executive'; // Default type
  }

  roleName(roleId?: EntityId | null): string {
    if (!roleId) return '-';
    const r = this.roles().find((x) => x.id === roleId);
    return r ? r.name : '-';
  }

  departmentName(id?: EntityId | null): string {
    if (!id) return '-';
    const d = this.departments().find((x) => x.id === id);
    return d ? d.name : '-';
  }

  // Search functionality
  searchUsers(): void {
    // The filtering is handled automatically by the computed signal
    this.currentPage.set(1); // Reset to first page when searching
  }

  // Selection functionality
  isAllSelected(): boolean {
    const selected = this.selectedUsers();
    const filtered = this.filteredUsers();
    return (
      filtered.length > 0 && filtered.every((user) => selected.has(user.id))
    );
  }

  isIndeterminate(): boolean {
    const selected = this.selectedUsers();
    const filtered = this.filteredUsers();
    const selectedCount = filtered.filter((user) =>
      selected.has(user.id),
    ).length;
    return selectedCount > 0 && selectedCount < filtered.length;
  }

  isUserSelected(userId: EntityId): boolean {
    return this.selectedUsers().has(userId);
  }

  toggleAll(): void {
    const selected = new Set(this.selectedUsers());
    const filtered = this.filteredUsers();

    if (this.isAllSelected()) {
      // Deselect all
      filtered.forEach((user) => selected.delete(user.id));
    } else {
      // Select all
      filtered.forEach((user) => selected.add(user.id));
    }

    this.selectedUsers.set(selected);
  }

  toggleUser(userId: EntityId): void {
    const selected = new Set(this.selectedUsers());
    if (selected.has(userId)) {
      selected.delete(userId);
    } else {
      selected.add(userId);
    }
    this.selectedUsers.set(selected);
  }

  cancelSelection(): void {
    this.selectedUsers.set(new Set());
  }

  // Pagination
  getTotalPages(): number {
    return Math.ceil(this.filteredUsers().length / this.itemsPerPage());
  }

  getPageNumbers(): number[] {
    const total = this.getTotalPages();
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  previousPage(): void {
    const current = this.currentPage();
    if (current > 1) {
      this.currentPage.set(current - 1);
    }
  }

  nextPage(): void {
    const current = this.currentPage();
    const total = this.getTotalPages();
    if (current < total) {
      this.currentPage.set(current + 1);
    }
  }

  getIdentityTypeText(type: number): string {
    switch (type) {
      case 1:
        return 'Passport';
      case 2:
        return 'Driver License';
      case 3:
        return 'National ID';
      case 4:
        return 'Other';
      default:
        return 'Unknown';
    }
  }

  // Status helpers
  getStatusText(status: string): string {
    switch (status) {
      case 'active':
        return 'Active';
      case 'inactive':
        return 'Inactive';
      case 'deleted':
        return 'Deleted';
      default:
        return 'Unknown';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'active':
        return 'check_circle';
      case 'inactive':
        return 'cancel';
      case 'deleted':
        return 'delete';
      default:
        return 'help';
    }
  }

  getStatusIconClass(status: string): string {
    switch (status) {
      case 'active':
        return 'text-green-600';
      case 'inactive':
        return 'text-red-600';
      case 'deleted':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  }

  // Form management
  closeForm(): void {
    this.showAddForm.set(false);
    this.editing.set(null);
    this.form.reset();
    this.form.get('username')?.enable();
  }

  resetForm(): void {
    this.form.reset({
      userType: 'FO Executive',
      status: 'active',
      workAreas: [],
      bloodgroup: 'O+',
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const v = this.form.value as {
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      userType: string;
      departmentId?: EntityId;
      workAreas: string[];
      status: string;
    };

    const now = new Date();
    const hotelId = this.store.hotel()?.id ?? ('' as EntityId);

    // Create role based on user type
    const roles: UserRole[] = [
      {
        roleId: v.userType as EntityId,
        roleName: v.userType,
        assignedAt: now,
        assignedBy: hotelId,
        isActive: true,
      } as UserRole,
    ];

    if (this.editing()) {
      const patch: Partial<User> = {
        firstName: v.firstName,
        lastName: v.lastName,
        email: v.email,
        roles,
        departmentId: v.departmentId || undefined,
        workAreas: v.workAreas,
        status: v.status as 'active' | 'inactive' | 'deleted',
        updatedAt: now,
      };
      const res = this.store.updateUser(this.editing()!.id as EntityId, patch);
      this.saving.set(false);
      if (res.ok) {
        this.snackBar.open('User updated successfully', 'Close', {
          duration: 2500,
        });
        this.closeForm();
      } else {
        this.snackBar.open(
          res.errors?.[0] ?? 'Failed to update user',
          'Close',
          { duration: 3500 },
        );
      }
      return;
    }

    const u: User = {
      id: '' as EntityId,
      createdAt: now,
      updatedAt: now,
      status: v.status as 'active' | 'inactive' | 'deleted',
      hotelId,
      employeeId: undefined,
      firstName: v.firstName,
      lastName: v.lastName,
      email: v.email,
      username: v.username,
      bloodgroup: 'O+', // Required property
      workAreas: v.workAreas,
      mustChangePassword: false,
      preferredLanguage: 'en',
      timezone: 'UTC',
      employmentType: 'full-time',
      roles,
      permissions: [],
      isActive: v.status === 'active',
      failedLoginAttempts: 0,
      twoFactorEnabled: false,
      notificationSettings: {
        email: { enabled: true, frequency: 'immediate', types: [] },
        sms: { enabled: false, types: [] },
        inApp: { enabled: true, types: [] },
        desktop: { enabled: false, types: [] },
      },
      maxConcurrentSessions: 1,
      sessionTimeoutMinutes: 30,
      departmentId: v.departmentId || undefined,
    } as User;

    const res = this.store.addUser(u);
    this.saving.set(false);
    if (res.ok) {
      this.snackBar.open('User added successfully', 'Close', {
        duration: 2500,
      });
      this.resetForm();
      this.closeForm();
    } else {
      this.snackBar.open(res.errors?.[0] ?? 'Failed to add user', 'Close', {
        duration: 3500,
      });
    }
  }

  editUser(u: User): void {
    this.editing.set(u);
    this.showAddForm.set(true);
    this.form.patchValue({
      username: u.username,
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,
      bloodgroup: u.bloodgroup,
      userType: this.getUserType(u),
      departmentId: u.departmentId || '',
      workAreas: u.workAreas || [],
      status: u.status || 'active',
    });
    this.form.get('username')?.disable();
  }

  deleteUser(id: EntityId): void {
    if (!confirm('Are you sure you want to delete this user?')) return;
    const res = this.store.removeUser(id);
    if (res.ok) {
      this.snackBar.open('User deleted successfully', 'Close', {
        duration: 2500,
      });
      // Remove from selection if selected
      const selected = new Set(this.selectedUsers());
      selected.delete(id);
      this.selectedUsers.set(selected);
    } else {
      this.snackBar.open(res.errors?.[0] ?? 'Failed to delete user', 'Close', {
        duration: 3500,
      });
    }
  }
}
