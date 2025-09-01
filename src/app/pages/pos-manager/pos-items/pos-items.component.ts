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
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-pos-items',
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
    MatChip,
  ],
  template: `
    <div class="page-container">
      <div class="page-header">
        <h1 class="mat-headline-4">POS Items Management</h1>
        <p class="mat-body-1 text-on-surface-variant">
          Manage POS Items Management configurations and settings
        </p>
      </div>

      <div class="content-cards">
        <!-- Form Card -->
        <mat-card class="form-card">
          <mat-card-header>
            <mat-card-title class="card-title">
              <mat-icon color="primary">inventory</mat-icon>
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
                <mat-icon matSuffix>label</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" subscriptSizing="dynamic">
                <mat-label>Description</mat-label>
                <textarea
                  matInput
                  formControlName="description"
                  rows="2"
                  placeholder="Enter description"
                ></textarea>
                <mat-icon matSuffix>description</mat-icon>
              </mat-form-field>

              <div class="checkbox-container">
                <mat-checkbox formControlName="isActive"> Active </mat-checkbox>
              </div>
            </form>
          </mat-card-content>

          <mat-card-actions>
            <button
              mat-raised-button
              color="primary"
              (click)="onSubmit()"
              [disabled]="form.invalid || saving()"
            >
              @if (saving()) {
                <mat-icon class="saving-icon">refresh</mat-icon>
              } @else {
                <mat-icon>{{ editing() ? 'update' : 'add' }}</mat-icon>
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
        <mat-card class="table-card">
          <mat-card-header>
            <mat-card-title class="card-title">
              <mat-icon color="accent">list</mat-icon>
              Items List
              <mat-chip class="count-chip">
                {{ items().length }}
              </mat-chip>
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="table-content">
            @if (items().length === 0) {
              <div class="empty-state">
                <mat-icon class="empty-icon">inventory</mat-icon>
                <p class="mat-body-1">No items configured yet</p>
                <p class="mat-caption">
                  Add your first item using the form above
                </p>
              </div>
            } @else {
              <div class="table-container">
                <table mat-table [dataSource]="items()" class="data-table">
                  <ng-container matColumnDef="name">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="mat-subtitle-2"
                    >
                      Name
                    </th>
                    <td mat-cell *matCellDef="let item">
                      <div class="mat-body-1">{{ item.name }}</div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="description">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="mat-subtitle-2"
                    >
                      Description
                    </th>
                    <td mat-cell *matCellDef="let item">
                      <div class="mat-body-2">
                        {{ item.description || '-' }}
                      </div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="status">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="mat-subtitle-2"
                    >
                      Status
                    </th>
                    <td mat-cell *matCellDef="let item">
                      <mat-chip [class]="getStatusClass(item.status)">
                        {{ getStatusText(item.status) }}
                      </mat-chip>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="actions">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="mat-subtitle-2"
                    >
                      Actions
                    </th>
                    <td mat-cell *matCellDef="let item; let i = index">
                      <button
                        mat-icon-button
                        color="primary"
                        (click)="editItem(item)"
                        matTooltip="Edit item"
                      >
                        <mat-icon>edit</mat-icon>
                      </button>
                      <button
                        mat-icon-button
                        color="warn"
                        (click)="deleteItem(i)"
                        matTooltip="Delete item"
                      >
                        <mat-icon>delete</mat-icon>
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
  styles: [
    `
      .page-container {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .page-header {
        margin-bottom: 24px;
      }

      .page-header h1 {
        margin: 0 0 8px 0;
        color: var(--md-sys-color-on-surface);
      }

      .content-cards {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
      }

      .form-card {
        background-color: var(--md-sys-color-surface-container);
      }

      .table-card {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: var(--md-sys-color-surface-container);
      }

      .card-title {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .count-chip {
        font-size: 12px;
        height: 24px;
        background-color: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
      }

      .form-layout {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .checkbox-container {
        display: flex;
        align-items: center;
      }

      .table-content {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 24px;
        color: var(--md-sys-color-on-surface-variant);
      }

      .empty-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }

      .table-container {
        flex: 1;
        overflow: auto;
      }

      .data-table {
        width: 100%;
      }

      .status-active {
        background-color: var(--md-sys-color-success);
        color: white;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
      }

      .status-inactive {
        background-color: var(--md-sys-color-error);
        color: white;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
      }

      .saving-icon {
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @media (max-width: 768px) {
        .page-container {
          padding: 16px;
        }
      }
    `,
  ],
})
export class PosItemsComponent {
  private fb = inject(FormBuilder);
  private store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  saving = signal(false);
  editing = signal<unknown>(null);
  items = computed(() => [] as unknown[]);

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

  editItem(item: unknown): void {
    this.editing.set(item);
    const typedItem = item as {
      name?: string;
      description?: string;
      isActive?: boolean;
    };
    this.form.patchValue({
      name: typedItem.name,
      description: typedItem.description || '',
      isActive: typedItem.isActive,
    });
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.resetForm();
  }

  deleteItem(index: number): void {
    const item = this.items()[index] as {
      name?: string;
      description?: string;
      isActive?: boolean;
    };
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
    return status === 'active' ? 'status-active' : 'status-inactive';
  }
}
