import { Component, inject, signal, computed } from '@angular/core';
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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HotelStore } from '../../../services/hotel-store.service';

interface CustomFieldItem {
  name: string;
  description?: string;
  isActive: boolean;
  status?: string;
}

@Component({
  selector: 'app-console-custom-fields',
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
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
  ],
  template: `
    <div class="page-container">
      <div class="page-header">
        <h1 class="mat-headline-4">Console Custom Fields</h1>
        <p class="mat-body-1 text-on-surface-variant">
          Manage Console Custom Fields configurations and settings
        </p>
      </div>

      <div class="content-cards">
        <!-- Form Card -->
        <mat-card class="form-card">
          <mat-card-header>
            <mat-card-title class="card-title">
              <mat-icon color="primary">dynamic_form</mat-icon>
              {{ editing() ? 'Edit' : 'Add' }} Item
            </mat-card-title>
          </mat-card-header>

          <mat-card-content>
            <form
              [formGroup]="form"
              (ngSubmit)="onSubmit()"
              class="form-layout compact-form"
            >
              <mat-form-field appearance="outline" subscriptSizing="dynamic">
                <mat-label>Name</mat-label>
                <input
                  matInput
                  formControlName="name"
                  placeholder="Enter name"
                />
                <mat-icon matSuffix color="primary">label</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" subscriptSizing="dynamic">
                <mat-label>Description</mat-label>
                <textarea
                  matInput
                  formControlName="description"
                  rows="2"
                  placeholder="Enter description"
                ></textarea>
                <mat-icon matSuffix color="accent">description</mat-icon>
              </mat-form-field>

              <div class="checkbox-container">
                <mat-checkbox formControlName="isActive"> Active </mat-checkbox>
              </div>
            </form>
          </mat-card-content>

          <mat-card-actions class="flex-shrink-0 !px-3 !pb-3 !pt-1">
            <button
              mat-raised-button
              color="primary"
              (click)="onSubmit()"
              [disabled]="form.invalid || saving()"
              class="!text-sm !font-medium !min-h-9 !px-4"
            >
              @if (saving()) {
                <mat-icon class="animate-spin mr-1 !text-base"
                  >refresh</mat-icon
                >
              } @else {
                <mat-icon class="mr-1 !text-base">{{
                  editing() ? 'update' : 'add'
                }}</mat-icon>
              }
              {{ editing() ? 'Update' : 'Add' }}
            </button>

            @if (editing()) {
              <button mat-button (click)="cancelEdit()" type="button">
                Cancel
              </button>
            }

            <button mat-button (click)="resetForm()" type="button">
              Reset
            </button>
          </mat-card-actions>
        </mat-card>

        <!-- Table Card -->
        <mat-card class="flex flex-col">
          <mat-card-header class="flex-shrink-0 !pb-2">
            <mat-card-title class="flex items-center text-sm font-medium">
              <mat-icon class="mr-2 text-green-600 !text-lg">list</mat-icon>
              Items List
              <span
                class="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full"
              >
                {{ items().length }}
              </span>
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="flex-1 !pt-0 !pb-2 overflow-y-auto">
            @if (items().length === 0) {
              <div class="text-center py-6 text-gray-500">
                <mat-icon class="text-3xl mb-2 opacity-50"
                  >dynamic_form</mat-icon
                >
                <p class="text-sm">No items configured yet</p>
                <p class="text-xs">Add your first item using the form above</p>
              </div>
            } @else {
              <div class="overflow-x-auto">
                <table mat-table [dataSource]="items()" class="w-full !text-sm">
                  <ng-container matColumnDef="name">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Name
                    </th>
                    <td mat-cell *matCellDef="let item" class="!py-2">
                      <div class="font-medium text-sm">{{ item.name }}</div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="description">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Description
                    </th>
                    <td mat-cell *matCellDef="let item" class="!py-2">
                      <div class="text-sm">{{ item.description || '-' }}</div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="status">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Status
                    </th>
                    <td mat-cell *matCellDef="let item" class="!py-2">
                      <span [class]="getStatusClass(item.status)">
                        {{ getStatusText(item.status) }}
                      </span>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="actions">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Actions
                    </th>
                    <td
                      mat-cell
                      *matCellDef="let item; let i = index"
                      class="!py-2"
                    >
                      <button
                        mat-icon-button
                        color="primary"
                        (click)="editItem(item)"
                        matTooltip="Edit item"
                        class="!w-8 !h-8"
                      >
                        <mat-icon class="!text-lg">edit</mat-icon>
                      </button>
                      <button
                        mat-icon-button
                        color="warn"
                        (click)="deleteItem(i)"
                        matTooltip="Delete item"
                        class="!w-8 !h-8"
                      >
                        <mat-icon class="!text-lg">delete</mat-icon>
                      </button>
                    </td>
                  </ng-container>

                  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                  <tr
                    mat-row
                    *matRowDef="let row; columns: displayedColumns"
                  ></tr>
                </table>
              </div>
            }
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
})
export class ConsoleCustomFieldsComponent {
  private fb = inject(FormBuilder);
  private store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  saving = signal(false);
  editing = signal<CustomFieldItem | null>(null);
  items = computed(() => [] as CustomFieldItem[]);

  displayedColumns = ['name', 'description', 'status', 'actions'];

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      isActive: [true],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.saving.set(true);

      setTimeout(() => {
        if (this.editing()) {
          this.snackBar.open('Item updated successfully!', 'Close', {
            duration: 3000,
          });
          this.editing.set(null);
        } else {
          this.snackBar.open('Item added successfully!', 'Close', {
            duration: 3000,
          });
        }

        this.saving.set(false);
        this.resetForm();
      }, 300);
    }
  }

  editItem(item: CustomFieldItem): void {
    this.editing.set(item);
    this.form.patchValue({
      name: item.name,
      description: item.description || '',
      isActive: item.isActive,
    });
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.resetForm();
  }

  deleteItem(index: number): void {
    const item = this.items()[index];
    if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
      this.snackBar.open('Item deleted successfully!', 'Close', {
        duration: 3000,
      });
    }
  }

  resetForm(): void {
    this.form.reset({
      isActive: true,
    });
  }

  getStatusText(status: string): string {
    return status === 'active' ? 'Active' : 'Inactive';
  }

  getStatusClass(status: string): string {
    return status === 'active'
      ? 'text-green-600 bg-green-100 px-2 py-1 rounded text-xs'
      : 'text-red-600 bg-red-100 px-2 py-1 rounded text-xs';
  }
}
