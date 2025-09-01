import { Component, inject, computed, signal, OnInit } from '@angular/core';
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
import { User, CreateUser, UpdateUser } from '../../../../models/user.model';

@Component({
  selector: 'app-users-model-based',
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
  templateUrl: './users-model-based.html',
  styleUrls: ['./users-model-based.scss'],
})
export class UsersComponent implements OnInit {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  // Mock data - replace with actual store injection
  users = signal<User[]>([]);
  departments = signal<{ id: number; name: string }[]>([
    { id: 1, name: 'Front Desk' },
    { id: 2, name: 'Housekeeping' },
    { id: 3, name: 'Kitchen' },
    { id: 4, name: 'Maintenance' },
  ]);

  // UI State
  showAddForm = signal(false);
  saving = signal(false);
  editing = signal<User | null>(null);
  selectedUsers = signal<Set<number>>(new Set());

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
          user.employeeid?.toLowerCase().includes(search) ||
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
      const exists = this.users().some(
        (u) =>
          u.id !== currentId &&
          (u.employeeid ?? '').toString().trim().toLowerCase() === value,
      );
      return exists ? { duplicate: true } : null;
    };
  };

  form: FormGroup = this.fb.group({
    employeeid: ['', [Validators.required, this.uniqueEmployeeIdValidator()]],
    bloodgroup: ['', Validators.required],
    departmentid: [null],
    canlogin: [1],
    jobtypeid: [null],
    emergencyno: [''],
    identitytype: [1, Validators.required],
    identityvalue: [''],
    doj: [null],
    shiftfrom: [''],
    shiftto: [''],
    present: [1],
    comments: [''],
    status: ['A', Validators.required],
    posaccesscode: [''],
    allowedips: [''],
    restrictnareport: [0],
    restrictdtreport: [0],
    restrictminbooking: [0],
    alwaysallownareport: [0],
    restrictrsvediting: [0],
    isreadonly: [0],
    issalesperson: [0],
    ncentitle: [0],
    restrictgsemail: [0],
    adminconsoleancper: [''],
    housekeeperancper: [''],
    frontdeskancper: [''],
    notloginworkarea: [null],
  });

  departmentName(id?: number | null): string {
    if (!id) return '-';
    const d = this.departments().find((x) => x.id === id);
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

  isUserSelected(userId: number): boolean {
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

  toggleUser(userId: number): void {
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

  getBloodGroupText(group: string): string {
    const bloodGroups: Record<string, string> = {
      'A+': 'A Positive',
      'A-': 'A Negative',
      'B+': 'B Positive',
      'B-': 'B Negative',
      'AB+': 'AB Positive',
      'AB-': 'AB Negative',
      'O+': 'O Positive',
      'O-': 'O Negative',
    };
    return bloodGroups[group] || group;
  }

  // Form management
  closeForm(): void {
    this.showAddForm.set(false);
    this.editing.set(null);
    this.form.reset();
    this.form.get('employeeid')?.enable();
  }

  resetForm(): void {
    this.form.reset({
      canlogin: 1,
      identitytype: 1,
      present: 1,
      status: 'A',
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
    const formValue = this.form.value;

    if (this.editing()) {
      // Update existing user
      const updateData: UpdateUser = {
        ...formValue,
        modifiedby: 1, // Replace with actual user ID
      };

      // Mock API call - replace with actual service
      setTimeout(() => {
        const users = this.users();
        const index = users.findIndex((u) => u.id === this.editing()!.id);
        if (index !== -1) {
          const updatedUser = { ...users[index], ...updateData };
          const newUsers = [...users];
          newUsers[index] = updatedUser;
          this.users.set(newUsers);

          this.snackBar.open('User updated successfully', 'Close', {
            duration: 2500,
          });
          this.closeForm();
        }
        this.saving.set(false);
      }, 500);
    } else {
      // Create new user
      const newUser: CreateUser = {
        hotelid: 1, // Replace with actual hotel ID
        ...formValue,
        createdby: 1, // Replace with actual user ID
        modifiedby: 1, // Replace with actual user ID
      };

      // Mock API call - replace with actual service
      setTimeout(() => {
        const users = this.users();
        const user: User = {
          id: Math.max(0, ...users.map((u) => u.id)) + 1,
          ...newUser,
          createdby: 1, // Ensure createdby is always a number
          modifiedby: 1, // Ensure modifiedby is always a number
        };
        this.users.set([...users, user]);

        this.snackBar.open('User added successfully', 'Close', {
          duration: 2500,
        });
        this.resetForm();
        this.closeForm();
        this.saving.set(false);
      }, 500);
    }
  }

  editUser(user: User): void {
    this.editing.set(user);
    this.showAddForm.set(true);
    this.form.patchValue({
      employeeid: user.employeeid,
      bloodgroup: user.bloodgroup,
      departmentid: user.departmentid,
      canlogin: user.canlogin ?? 1,
      jobtypeid: user.jobtypeid,
      emergencyno: user.emergencyno || '',
      identitytype: user.identitytype,
      identityvalue: user.identityvalue || '',
      doj: user.doj,
      shiftfrom: user.shiftfrom || '',
      shiftto: user.shiftto || '',
      present: user.present,
      comments: user.comments || '',
      status: user.status,
      posaccesscode: user.posaccesscode || '',
      allowedips: user.allowedips || '',
      restrictnareport: user.restrictnareport ?? 0,
      restrictdtreport: user.restrictdtreport ?? 0,
      restrictminbooking: user.restrictminbooking ?? 0,
      alwaysallownareport: user.alwaysallownareport ?? 0,
      restrictrsvediting: user.restrictrsvediting ?? 0,
      isreadonly: user.isreadonly ?? 0,
      issalesperson: user.issalesperson ?? 0,
      ncentitle: user.ncentitle ?? 0,
      restrictgsemail: user.restrictgsemail ?? 0,
      adminconsoleancper: user.adminconsoleancper || '',
      housekeeperancper: user.housekeeperancper || '',
      frontdeskancper: user.frontdeskancper || '',
      notloginworkarea: user.notloginworkarea,
    });
    this.form.get('employeeid')?.disable();
  }

  deleteUser(id: number): void {
    if (!confirm('Are you sure you want to delete this user?')) return;

    // Mock API call - replace with actual service
    const users = this.users();
    const filtered = users.filter((u) => u.id !== id);
    this.users.set(filtered);

    this.snackBar.open('User deleted successfully', 'Close', {
      duration: 2500,
    });

    // Remove from selection if selected
    const selected = new Set(this.selectedUsers());
    selected.delete(id);
    this.selectedUsers.set(selected);
  }

  // Sample data for testing
  ngOnInit(): void {
    // Mock sample data - replace with actual data loading
    this.users.set([
      {
        id: 1,
        hotelid: 1,
        employeeid: 'EMP001',
        bloodgroup: 'A+',
        departmentid: 1,
        canlogin: 1,
        identitytype: 1,
        present: 1,
        status: 'A',
        createdby: 1,
        modifiedby: 1,
        restrictnareport: 0,
        restrictdtreport: 0,
        restrictminbooking: 0,
        alwaysallownareport: 0,
        restrictrsvediting: 0,
        isreadonly: 0,
        issalesperson: 0,
        ncentitle: 0,
        restrictgsemail: 0,
      },
      {
        id: 2,
        hotelid: 1,
        employeeid: 'EMP002',
        bloodgroup: 'B+',
        departmentid: 2,
        canlogin: 1,
        identitytype: 1,
        present: 1,
        status: 'A',
        createdby: 1,
        modifiedby: 1,
        restrictnareport: 0,
        restrictdtreport: 0,
        restrictminbooking: 0,
        alwaysallownareport: 0,
        restrictrsvediting: 0,
        isreadonly: 0,
        issalesperson: 0,
        ncentitle: 0,
        restrictgsemail: 0,
      },
    ]);
  }
}
