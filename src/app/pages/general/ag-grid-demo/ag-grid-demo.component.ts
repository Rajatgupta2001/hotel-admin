import { Component, inject, signal } from '@angular/core';
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
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

// AG Grid imports
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, GridOptions, GridApi, CellClickedEvent } from 'ag-grid-community';

interface CorporateItem {
  id: number;
  name: string;
  description?: string;
  isActive: boolean;
  status: string;
  createdDate: Date;
  email?: string;
  phone?: string;
}

@Component({
  selector: 'app-ag-grid-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    AgGridAngular, // Add AG Grid to imports
  ],
  template: `
    <div class="page-container">
      <div class="page-header">
        <h1 class="mat-headline-4">AG Grid Demo - Corporate Management</h1>
        <p class="mat-body-1 text-on-surface-variant">
          Enhanced data grid with AG Grid integration
        </p>
      </div>

      <div class="content-cards">
        <!-- Form Card -->
        <mat-card class="form-card">
          <mat-card-header>
            <mat-card-title class="card-title">
              <mat-icon color="primary">business_center</mat-icon>
              {{ editing() ? 'Edit' : 'Add' }} Corporate
            </mat-card-title>
          </mat-card-header>

          <mat-card-content>
            <form
              [formGroup]="form"
              (ngSubmit)="onSubmit()"
              class="form-layout compact-form"
            >
              <div class="form-row equal-columns">
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                  <mat-label>Name</mat-label>
                  <input
                    matInput
                    formControlName="name"
                    placeholder="Enter company name"
                  />
                  <mat-icon matSuffix color="primary">business</mat-icon>
                </mat-form-field>

                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                  <mat-label>Email</mat-label>
                  <input
                    matInput
                    type="email"
                    formControlName="email"
                    placeholder="Enter email"
                  />
                  <mat-icon matSuffix color="accent">email</mat-icon>
                </mat-form-field>
              </div>

              <div class="form-row equal-columns">
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                  <mat-label>Phone</mat-label>
                  <input
                    matInput
                    type="tel"
                    formControlName="phone"
                    placeholder="Enter phone number"
                  />
                  <mat-icon matSuffix color="primary">phone</mat-icon>
                </mat-form-field>

                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                  <mat-label>Status</mat-label>
                  <mat-select formControlName="status">
                    <mat-option value="active">Active</mat-option>
                    <mat-option value="inactive">Inactive</mat-option>
                    <mat-option value="pending">Pending</mat-option>
                  </mat-select>
                  <mat-icon matSuffix color="accent">status</mat-icon>
                </mat-form-field>
              </div>

              <mat-form-field appearance="outline" subscriptSizing="dynamic">
                <mat-label>Description</mat-label>
                <textarea
                  matInput
                  formControlName="description"
                  rows="3"
                  placeholder="Enter description"
                ></textarea>
                <mat-icon matSuffix color="accent">description</mat-icon>
              </mat-form-field>

              <div class="checkbox-container">
                <mat-checkbox formControlName="isActive"> 
                  Active Company
                </mat-checkbox>
              </div>
            </form>
          </mat-card-content>

          <mat-card-actions class="card-actions">
            <button
              mat-raised-button
              color="primary"
              (click)="onSubmit()"
              [disabled]="form.invalid || saving()"
            >
              @if (saving()) {
                <mat-icon class="spinning-icon">refresh</mat-icon>
              } @else {
                <mat-icon>{{
                  editing() ? 'update' : 'add'
                }}</mat-icon>
              }
              {{ editing() ? 'Update' : 'Add' }}
            </button>

            @if (editing()) {
              <button mat-button (click)="cancelEdit()" type="button">
                <mat-icon>cancel</mat-icon>
                Cancel
              </button>
            }

            <button mat-button (click)="resetForm()" type="button">
              <mat-icon>refresh</mat-icon>
              Reset
            </button>
          </mat-card-actions>
        </mat-card>

        <!-- AG Grid Table Card -->
        <mat-card class="table-card">
          <mat-card-header class="card-header">
            <mat-card-title class="card-title">
              <mat-icon color="primary">grid_view</mat-icon>
              Corporate Companies
              <span class="count-badge">
                {{ rowData().length }}
              </span>
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="card-content">
            @if (rowData().length === 0) {
              <div class="empty-state">
                <mat-icon color="accent">business_center</mat-icon>
                <p class="empty-title">No companies configured yet</p>
                <p class="empty-subtitle">Add your first company using the form above</p>
              </div>
            } @else {
              <div class="ag-grid-container">
                <ag-grid-angular
                  class="ag-theme-material"
                  style="height: 400px; width: 100%;"
                  [columnDefs]="columnDefs"
                  [rowData]="rowData()"
                  [defaultColDef]="defaultColDef"
                  [gridOptions]="gridOptions"
                  [pagination]="true"
                  [paginationPageSize]="10"
                  [paginationPageSizeSelector]="[10, 25, 50]"
                  [suppressCellFocus]="false"
                  [rowSelection]="'single'"
                  [animateRows]="true"
                  (gridReady)="onGridReady($event)"
                  (selectionChanged)="onSelectionChanged()"
                  (cellDoubleClicked)="onCellDoubleClick($event)"
                ></ag-grid-angular>
              </div>
            }
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .ag-grid-container {
      margin: 8px 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: var(--md-sys-elevation-shadow-level1);
    }
    
    .ag-theme-material {
      border-radius: 8px;
    }
    
    .form-row {
      display: flex;
      gap: 16px;
      margin-bottom: 8px;
    }
    
    .form-row.equal-columns .mat-mdc-form-field {
      flex: 1;
    }
    
    .card-actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    
    .card-actions button {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `]
})
export class AgGridDemoComponent {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  saving = signal(false);
  editing = signal<CorporateItem | null>(null);
  
  // Sample data
  rowData = signal<CorporateItem[]>([
    {
      id: 1,
      name: 'Acme Corporation',
      description: 'Technology solutions provider',
      isActive: true,
      status: 'active',
      createdDate: new Date('2024-01-15'),
      email: 'contact@acme.com',
      phone: '+1-555-0123'
    },
    {
      id: 2,
      name: 'Global Industries',
      description: 'Manufacturing and logistics',
      isActive: true,
      status: 'active',
      createdDate: new Date('2024-02-20'),
      email: 'info@global.com',
      phone: '+1-555-0456'
    },
    {
      id: 3,
      name: 'Tech Innovations Ltd',
      description: 'Software development company',
      isActive: false,
      status: 'inactive',
      createdDate: new Date('2024-03-10'),
      email: 'hello@techinno.com',
      phone: '+1-555-0789'
    }
  ]);

  form!: FormGroup;

  // AG Grid configuration
  columnDefs: ColDef[] = [
    {
      field: 'name',
      headerName: 'Company Name',
      flex: 2,
      minWidth: 150,
      sortable: true,
      filter: true,
      cellStyle: { fontWeight: '500' }
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 2,
      minWidth: 180,
      sortable: true,
      filter: true
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1.5,
      minWidth: 130,
      sortable: true,
      filter: true
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 100,
      sortable: true,
      filter: true,
      cellRenderer: (params: { value: string }) => {
        const status = params.value;
        const statusClass = status === 'active' ? 'status-active' : 
                           status === 'inactive' ? 'status-inactive' : 'status-pending';
        return `<span class="status-badge ${statusClass}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>`;
      }
    },
    {
      field: 'createdDate',
      headerName: 'Created',
      flex: 1.2,
      minWidth: 120,
      sortable: true,
      filter: 'agDateColumnFilter',
      valueFormatter: (params: { value: Date }) => {
        return new Date(params.value).toLocaleDateString();
      }
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      minWidth: 120,
      sortable: false,
      filter: false,
      cellRenderer: () => {
        return `
          <div style="display: flex; gap: 4px; align-items: center; height: 100%;">
            <button class="ag-action-btn edit-btn" title="Edit">
              <span class="material-icons" style="font-size: 16px;">edit</span>
            </button>
            <button class="ag-action-btn delete-btn" title="Delete">
              <span class="material-icons" style="font-size: 16px;">delete</span>
            </button>
          </div>
        `;
      },
      onCellClicked: (event: CellClickedEvent) => {
        const target = event.event?.target as HTMLElement;
        if (target?.closest('.edit-btn')) {
          this.editItem(event.data);
        } else if (target?.closest('.delete-btn')) {
          this.deleteItem(event.data);
        }
      }
    }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
    floatingFilter: false
  };

  gridOptions: GridOptions = {
    animateRows: true,
    rowSelection: 'single',
    suppressCellFocus: false,
    rowHeight: 44,
    headerHeight: 48
  };

  private gridApi!: GridApi;

  constructor() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      phone: [''],
      description: [''],
      status: ['active', Validators.required],
      isActive: [true],
    });
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    // Auto-size columns to fit content
    params.api.sizeColumnsToFit();
  }

  onSelectionChanged(): void {
    const selectedRows = this.gridApi.getSelectedRows();
    if (selectedRows.length > 0) {
      console.log('Selected row:', selectedRows[0]);
    }
  }

  onCellDoubleClick(event: { data: CorporateItem }): void {
    this.editItem(event.data);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.saving.set(true);

      setTimeout(() => {
        const formValue = this.form.value;
        
        if (this.editing()) {
          // Update existing item
          const currentData = this.rowData();
          const index = currentData.findIndex(item => item.id === this.editing()!.id);
          if (index >= 0) {
            currentData[index] = {
              ...currentData[index],
              ...formValue
            };
            this.rowData.set([...currentData]);
          }
          this.snackBar.open('Company updated successfully!', 'Close', {
            duration: 3000,
          });
          this.editing.set(null);
        } else {
          // Add new item
          const newItem: CorporateItem = {
            id: Date.now(), // Simple ID generation
            ...formValue,
            createdDate: new Date()
          };
          this.rowData.set([...this.rowData(), newItem]);
          this.snackBar.open('Company added successfully!', 'Close', {
            duration: 3000,
          });
        }

        this.saving.set(false);
        this.resetForm();
        
        // Refresh grid to show changes
        if (this.gridApi) {
          this.gridApi.setGridOption('rowData', this.rowData());
          this.gridApi.sizeColumnsToFit();
        }
      }, 500);
    }
  }

  editItem(item: CorporateItem): void {
    this.editing.set(item);
    this.form.patchValue({
      name: item.name,
      email: item.email || '',
      phone: item.phone || '',
      description: item.description || '',
      status: item.status,
      isActive: item.isActive,
    });
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.resetForm();
  }

  deleteItem(item: CorporateItem): void {
    if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
      const currentData = this.rowData();
      const filteredData = currentData.filter(i => i.id !== item.id);
      this.rowData.set(filteredData);
      
      // Refresh grid
      if (this.gridApi) {
        this.gridApi.setGridOption('rowData', this.rowData());
      }
      
      this.snackBar.open('Company deleted successfully!', 'Close', {
        duration: 3000,
      });
    }
  }

  resetForm(): void {
    this.form.reset({
      status: 'active',
      isActive: true,
    });
  }
}
