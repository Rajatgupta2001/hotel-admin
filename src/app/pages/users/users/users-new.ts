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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HotelStore } from '../../../services/hotel-store.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-users-new',
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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
})
export class UsersComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  users = computed(() => this.store.users());
  departments = computed(() => this.store.departments());

  // UI State
  showAddForm = signal(false);
  saving = signal(false);
  editing = signal<User | null>(null);
  selectedUsers = signal<Set<string>>(new Set());

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
          user.employeeId?.toLowerCase().includes(search) ||
          user.bloodgroup?.toLowerCase().includes(search),
      );
    }

    // Apply status filter
    const statusFilter = this.selectedFilter();
    if (statusFilter !== 'all') {
      filtered = filtered.filter((user) => user.status === statusFilter);
    }

    return filtered;
  });

  private uniqueEmployeeIdValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value ?? '').toString().trim().toLowerCase();
      if (!value) return null;
      const currentId = this.editing()?.id;
      const exists = this.store
        .users()
        .some(
          (u) =>
            u.id !== currentId &&
            (u.employeeId ?? '').toString().trim().toLowerCase() === value,
        );
      return exists ? { duplicate: true } : null;
    };
  };

  form: FormGroup = this.fb.group({
    // Required fields from User model
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    preferredLanguage: ['en', Validators.required],
    timezone: ['UTC', Validators.required],
    employmentType: ['full-time', Validators.required],
    mustChangePassword: [false],
    isActive: [true],
    failedLoginAttempts: [0],
    twoFactorEnabled: [false],
    maxConcurrentSessions: [1],
    sessionTimeoutMinutes: [30],
    // Fields expected by template
    employeeId: ['', [Validators.required, this.uniqueEmployeeIdValidator()]],
    bloodgroup: ['', Validators.required],
    departmentId: [''],
    jobtypeid: [''],
    emergencyno: [''],
    identitytype: [1, Validators.required],
    identityvalue: [''],
    doj: [''],
    shiftfrom: [''],
    shiftto: [''],
    posaccesscode: [''],
    allowedips: [''],
    canlogin: [1],
    present: [1],
    isreadonly: [0],
    issalesperson: [0],
    restrictnareport: [0],
    restrictdtreport: [0],
    restrictminbooking: [0],
    alwaysallownareport: [0],
    restrictrsvediting: [0],
    restrictgsemail: [0],
    status: ['active', Validators.required],
    comments: [''],
    // User model fields
    phone: [''],
    alternateEmail: [''],
    jobTitle: [''],
    managerId: [''],
    hireDate: [''],
    shiftId: [''],
    avatar: [''],
    notes: [''],
    ncentitle: [0],
  });

  departmentName(id?: number | null): string {
    if (!id) return '-';
    const d = this.departments().find((x) => x.id === id.toString());
    return d ? d.name : '-';
  }

  // Search functionality
  searchUsers(): void {
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

  isUserSelected(userId: string): boolean {
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

  toggleUser(userId: string): void {
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

  // Form management
  closeForm(): void {
    this.showAddForm.set(false);
    this.editing.set(null);
    this.form.reset();
    this.form.get('employeeId')?.enable();
  }

  resetForm(): void {
    this.form.reset({
      canlogin: 1,
      identitytype: 1,
      present: 1,
      status: 'active',
      restrictnareport: 0,
      restrictdtreport: 0,
      restrictminbooking: 0,
      alwaysallownareport: 0,
      restrictrsvediting: 0,
      isreadonly: 0,
      issalesperson: 0,
      ncentitle: 0,
      restrictgsemail: 0,
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const v = this.form.value;

    const hotelId = this.store.hotel()?.id ?? 1;

    if (this.editing()) {
      const patch: Partial<User> = {
        ...v,
        modifiedby: 1,
      };
      const res = this.store.updateUser(this.editing()!.id, patch);
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
      id: crypto.randomUUID(), // Generate string ID
      hotelId: hotelId.toString(),
      // Required fields
      firstName: v.firstName,
      lastName: v.lastName,
      email: v.email,
      username: v.username,
      preferredLanguage: v.preferredLanguage,
      timezone: v.timezone,
      employmentType: v.employmentType,
      mustChangePassword: v.mustChangePassword,
      isActive: v.isActive,
      failedLoginAttempts: v.failedLoginAttempts,
      twoFactorEnabled: v.twoFactorEnabled,
      maxConcurrentSessions: v.maxConcurrentSessions,
      sessionTimeoutMinutes: v.sessionTimeoutMinutes,
      roles: [],
      permissions: [],
      notificationSettings: {
        email: { enabled: true, frequency: 'immediate', types: [] },
        sms: { enabled: false, types: [] },
        inApp: { enabled: true, types: [] },
        desktop: { enabled: false, types: [] },
      },
      // Required by User interface
      bloodgroup: v.bloodgroup,
      workAreas: [],
      status: v.status || 'active',
      // Optional fields
      employeeId: v.employeeId,
      phone: v.phone,
      alternateEmail: v.alternateEmail,
      jobTitle: v.jobTitle,
      departmentId: v.departmentId,
      managerId: v.managerId,
      hireDate: v.hireDate,
      shiftId: v.shiftId,
      avatar: v.avatar,
      notes: v.notes,
      // Metadata
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: '1',
      updatedBy: '1',
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
    this.form.patchValue(u);
    this.form.get('employeeid')?.disable();
  }

  deleteUser(id: string): void {
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
