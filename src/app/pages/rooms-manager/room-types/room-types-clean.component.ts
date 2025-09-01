import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  ICellRendererParams,
  AllCommunityModule,
  GridReadyEvent,
  GridSizeChangedEvent,
  CellValueChangedEvent,
  ValueParserParams,
  ValueFormatterParams,
  RowClassParams,
} from 'ag-grid-community';
import { StorageService } from '../../../services/storage.service';

// EditableCellRenderer following hotel information pattern
class EditableCellRenderer {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
    this.eGui = document.createElement('div');
    this.eGui.style.cssText = `
      padding: 8px 12px;
      background: #e3f2fd;
      border: 1px solid #2196f3;
      border-radius: 4px;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: text;
      transition: all 0.2s ease;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: #1565c0;
      font-weight: 500;
    `;
    this.eGui.innerHTML = params.value ? String(params.value) : '';

    this.eGui.addEventListener('mouseenter', () => {
      this.eGui.style.background = '#bbdefb';
      this.eGui.style.borderColor = '#1976d2';
    });

    this.eGui.addEventListener('mouseleave', () => {
      this.eGui.style.background = '#e3f2fd';
      this.eGui.style.borderColor = '#2196f3';
    });
  }

  getGui() {
    return this.eGui;
  }
}

// Interface for room type row data
interface RoomTypeRow {
  id: string;
  name: string;
  baseRate: number;
  extraPersonCharge: number;
  extraBedCharge: number;
  originalData: Record<string, unknown>;
}

// Interface for room data display
interface RoomDisplay {
  id: string;
  roomNumber: string;
  roomTypeId: string;
  floor: number;
  status: string;
  building?: string;
}

@Component({
  selector: 'app-room-types',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    AgGridAngular,
  ],
  template: `
    <div class="room-types-container">
      <!-- Header Section -->
      <div class="header-section">
        <div class="header-content">
          <mat-icon class="header-icon">bed</mat-icon>
          <div class="header-text">
            <h1 class="header-title">Room Types Management</h1>
            <p class="header-subtitle">
              Manage your hotel room types and individual rooms
            </p>
          </div>
        </div>
      </div>

      <!-- Room Types Grid -->
      <div class="grid-container">
        <div class="grid-header">
          <h2 class="grid-title">Room Types</h2>
          <div class="grid-actions">
            <button
              mat-raised-button
              class="action-button"
              (click)="exportData()"
            >
              <mat-icon class="button-icon">download</mat-icon>
              Export
            </button>
            <input
              type="file"
              #fileInput
              (change)="importData($event)"
              accept=".json"
              style="display: none"
            />
            <button
              mat-raised-button
              class="action-button"
              (click)="fileInput.click()"
            >
              <mat-icon class="button-icon">upload</mat-icon>
              Import
            </button>
            <button
              mat-raised-button
              class="action-button primary"
              (click)="addNewRoomType()"
            >
              <mat-icon class="button-icon">add</mat-icon>
              Add Room Type
            </button>
          </div>
        </div>

        <div class="grid-section">
          <h3 class="section-title">Room Type Configuration</h3>
          <div class="subsection">
            <h4 class="subsection-title">Room Types</h4>
            <p class="click-to-edit-note">
              Click on the cells below to edit the room type information
            </p>
            <ag-grid-angular
              class="room-types-grid ag-theme-material"
              [gridOptions]="gridOptions"
              [rowData]="roomTypes"
              [columnDefs]="getColumnDefs()"
              [modules]="[AllCommunityModule]"
              [domLayout]="'autoHeight'"
              (gridReady)="onGridReady($event)"
              (gridSizeChanged)="onGridSizeChanged($event)"
              style="width: 100%; height: auto; min-height: 200px;"
            >
            </ag-grid-angular>
          </div>
        </div>

        <!-- Add New Room Type Section -->
        <div class="add-room-type-section">
          <button
            mat-raised-button
            class="add-button"
            (click)="addNewRoomType()"
          >
            <mat-icon class="button-icon">add_circle</mat-icon>
            Add New Room Type
          </button>
        </div>
      </div>

      <!-- Rooms Section -->
      <mat-card class="rooms-section">
        <mat-card-header>
          <mat-card-title>
            <mat-icon>hotel</mat-icon>
            Individual Rooms
          </mat-card-title>
          <mat-card-subtitle>
            Manage individual room instances for each room type
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div *ngIf="rooms.length === 0" class="empty-state">
            <mat-icon class="empty-icon">hotel_outlined</mat-icon>
            <p class="empty-text">No rooms configured yet</p>
            <p class="empty-subtext">
              Add room types first, then create individual room instances
            </p>
          </div>

          <div *ngIf="rooms.length > 0" class="rooms-grid">
            <mat-card *ngFor="let room of rooms" class="room-card">
              <div class="room-header">
                <h3 class="room-number">Room {{ room.roomNumber }}</h3>
                <span [class]="'status-' + room.status">{{
                  room.status | titlecase
                }}</span>
              </div>
              <div class="room-details">
                <p><strong>Floor:</strong> {{ room.floor }}</p>
                <p>
                  <strong>Building:</strong>
                  {{ room.building || 'Main Building' }}
                </p>
                <p>
                  <strong>Type:</strong> {{ getRoomTypeName(room.roomTypeId) }}
                </p>
              </div>
              <div class="room-actions">
                <button
                  mat-icon-button
                  class="room-action-btn"
                  color="primary"
                  title="Edit Room"
                >
                  <mat-icon>edit</mat-icon>
                </button>
                <button
                  mat-icon-button
                  class="room-action-btn"
                  color="warn"
                  title="Delete Room"
                >
                  <mat-icon>delete</mat-icon>
                </button>
              </div>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button
          mat-raised-button
          class="primary-button"
          [disabled]="isSaving"
          (click)="saveData()"
        >
          <mat-icon class="button-icon" [class.spinning]="isSaving">
            {{ isSaving ? 'sync' : 'save' }}
          </mat-icon>
          {{ isSaving ? 'Saving...' : 'Save Changes' }}
        </button>

        <button mat-stroked-button class="outline-button" (click)="loadData()">
          <mat-icon class="button-icon">refresh</mat-icon>
          Reload Data
        </button>
      </div>

      <!-- Footer Note -->
      <div class="footer-note">
        <mat-icon class="note-icon">info</mat-icon>
        <span
          >All changes are automatically saved to local storage. Use
          Export/Import for data backup and transfer.</span
        >
      </div>
    </div>
  `,
  styles: [
    `
      /* Main Container */
      .room-types-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 24px;
        background: #fafafa;
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
      }

      /* Header Section */
      .header-section {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        border-radius: 16px;
        padding: 24px;
        margin-bottom: 32px;
        box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
      }

      .header-content {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .header-icon {
        color: white;
        font-size: 48px;
        width: 48px;
        height: 48px;
      }

      .header-text {
        color: white;
      }

      .header-title {
        font-size: 28px;
        font-weight: 600;
        margin: 0 0 8px 0;
        letter-spacing: -0.5px;
      }

      .header-subtitle {
        font-size: 16px;
        opacity: 0.9;
        margin: 0;
        font-weight: 400;
      }

      /* Grid Container */
      .grid-container {
        background: white;
        border-radius: 12px;
        padding: 32px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        margin-bottom: 32px;
      }

      .grid-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 2px solid #e5e7eb;
      }

      .grid-title {
        font-size: 24px;
        font-weight: 600;
        color: #1f2937;
        margin: 0;
      }

      .grid-actions {
        display: flex;
        gap: 8px;
      }

      .action-button {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        transition: all 0.2s ease;
      }

      .action-button:hover {
        background: #e9ecef;
        transform: translateY(-1px);
      }

      .action-button.primary {
        background: #6366f1;
        color: white;
        border-color: #6366f1;
      }

      .action-button.primary:hover {
        background: #4f46e5;
      }

      /* Grid Sections */
      .grid-section {
        margin-bottom: 32px;
      }

      .section-title {
        font-size: 18px;
        font-weight: 600;
        color: #374151;
        margin: 0 0 16px 0;
        padding-bottom: 8px;
        border-bottom: 1px solid #d1d5db;
      }

      .subsection {
        margin-bottom: 24px;
      }

      .subsection-title {
        font-size: 16px;
        font-weight: 600;
        color: #1f2937;
        margin: 0 0 8px 0;
      }

      .click-to-edit-note {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 16px;
        font-style: italic;
      }

      /* AG Grid Styling */
      .room-types-grid {
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        font-family: 'Roboto', sans-serif;
      }

      /* AG Grid Theme Customization */
      ::ng-deep .ag-theme-material {
        --ag-border-color: #e5e7eb;
        --ag-header-background-color: #f9fafb;
        --ag-header-foreground-color: #374151;
        --ag-odd-row-background-color: #ffffff;
        --ag-even-row-background-color: #f9fafb;
        --ag-row-hover-color: #e0e7ff;
        --ag-selected-row-background-color: #dbeafe;
        --ag-font-family: 'Roboto', sans-serif;
        --ag-font-size: 14px;
        --ag-row-height: 36px;
        --ag-header-height: 40px;
        --ag-list-item-height: 36px;
      }

      ::ng-deep .ag-theme-material .ag-header {
        font-weight: 600;
        background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
        border-bottom: 2px solid #6366f1;
        height: 40px;
        min-height: 40px;
        max-height: 40px;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        border-right: 1px solid #e5e7eb;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 40px;
        line-height: 1.2;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        border-bottom: 1px solid #f3f4f6;
        border-right: 1px solid #f3f4f6;
        padding: 8px 12px;
        line-height: 1.2;
        height: 36px;
        min-height: 36px;
        max-height: 36px;
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      ::ng-deep .ag-theme-material .ag-row {
        transition: background-color 0.2s ease;
        height: 36px;
        min-height: 36px;
        max-height: 36px;
        border-bottom: 1px solid #e5e7eb;
      }

      ::ng-deep .ag-theme-material .ag-row:hover {
        background-color: #f8fafc !important;
      }

      /* Add New Room Type Section */
      .add-room-type-section {
        text-align: center;
        margin: 24px 0;
      }

      .add-button {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
        transition: all 0.3s ease;
      }

      .add-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
      }

      /* Rooms Section */
      .rooms-section {
        margin-top: 32px;
      }

      .rooms-card {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
      }

      .empty-state {
        text-align: center;
        padding: 48px 24px;
        color: #6b7280;
      }

      .empty-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }

      .empty-text {
        font-size: 16px;
        font-weight: 500;
        margin: 0 0 8px 0;
      }

      .empty-subtext {
        font-size: 14px;
        margin: 0;
      }

      .rooms-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 16px;
        padding: 16px 0;
      }

      .room-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        transition: all 0.2s ease;
      }

      .room-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
      }

      .room-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }

      .room-number {
        font-size: 18px;
        font-weight: 600;
        color: #1f2937;
        margin: 0;
      }

      .room-details {
        margin-bottom: 16px;
      }

      .room-details p {
        margin: 4px 0;
        font-size: 14px;
        color: #4b5563;
      }

      .room-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }

      .room-action-btn {
        width: 32px;
        height: 32px;
      }

      /* Status Classes */
      .status-available {
        background: #dcfce7;
        color: #15803d;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
      }

      .status-occupied {
        background: #dbeafe;
        color: #1d4ed8;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
      }

      .status-maintenance {
        background: #fef3c7;
        color: #d97706;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
      }

      .status-out-of-order {
        background: #fee2e2;
        color: #dc2626;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
      }

      /* Action Buttons */
      .action-buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin: 32px 0;
        flex-wrap: wrap;
      }

      .primary-button {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
        transition: all 0.3s ease;
      }

      .primary-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
      }

      .outline-button {
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: 2px solid #6b7280;
        color: #6b7280;
        background: white;
        transition: all 0.3s ease;
      }

      .outline-button:hover {
        border-color: #6366f1;
        color: #6366f1;
        transform: translateY(-1px);
      }

      .button-icon {
        margin-right: 8px;
        font-size: 20px;
        width: 20px;
        height: 20px;
      }

      .spinning {
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

      /* Footer Note */
      .footer-note {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 16px;
        background: #f0f9ff;
        border: 1px solid #0ea5e9;
        border-radius: 8px;
        color: #0c4a6e;
        font-style: italic;
        margin-top: 32px;
      }

      .note-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .room-types-container {
          padding: 16px;
        }

        .header-content {
          flex-direction: column;
          text-align: center;
          gap: 12px;
        }

        .header-title {
          font-size: 24px;
        }

        .grid-container {
          padding: 20px;
        }

        .grid-header {
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }

        .action-buttons {
          flex-direction: column;
          align-items: center;
        }

        .action-buttons button {
          width: 100%;
          max-width: 300px;
        }

        .rooms-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class RoomTypesComponent implements OnInit {
  // AG Grid module
  AllCommunityModule = AllCommunityModule;

  // AG Grid configuration
  gridOptions = {
    theme: 'legacy' as const,
    rowHeight: 36,
    headerHeight: 40,
    modules: [AllCommunityModule],
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
      editable: false,
      suppressMovable: true,
      suppressMenu: true,
    },
    columnDefs: this.getColumnDefs(),
    rowData: [] as RoomTypeRow[],
    singleClickEdit: false,
    stopEditingWhenCellsLoseFocus: true,
    suppressRowClickSelection: true,
    enableCellTextSelection: true,
    animateRows: true,
    rowSelection: 'single' as const,
    onCellValueChanged: (event: CellValueChangedEvent) => this.onCellValueChanged(event),
    getRowStyle: (params: RowClassParams) => {
      if (params.node && params.node.rowIndex !== null && params.node.rowIndex % 2 === 0) {
        return { background: '#ffffff' };
      } else {
        return { background: '#f9fafb' };
      }
    },
  };

  // Data
  roomTypes: RoomTypeRow[] = [];
  rooms: RoomDisplay[] = [];

  // Loading states
  isLoading = false;
  isSaving = false;

  // Services
  private storageService = inject(StorageService);

  ngOnInit(): void {
    this.loadData();
  }

  getColumnDefs(): ColDef[] {
    return [
      {
        headerName: 'Room Type Name',
        field: 'name',
        width: 250,
        editable: true,
        cellRenderer: EditableCellRenderer,
        cellEditor: 'agTextCellEditor',
        cellEditorParams: {
          maxLength: 50,
        },
      },
      {
        headerName: 'Base Rate',
        field: 'baseRate',
        width: 150,
        editable: true,
        cellRenderer: EditableCellRenderer,
        cellEditor: 'agTextCellEditor',
        valueParser: (params: ValueParserParams) => {
          const value = parseFloat(params.newValue);
          return isNaN(value) ? 0 : value;
        },
        valueFormatter: (params: ValueFormatterParams) => {
          return params.value ? `₹${params.value.toFixed(2)}` : '₹0.00';
        },
      },
      {
        headerName: 'Ex. Person Charge',
        field: 'extraPersonCharge',
        width: 180,
        editable: true,
        cellRenderer: EditableCellRenderer,
        cellEditor: 'agTextCellEditor',
        valueParser: (params: ValueParserParams) => {
          const value = parseFloat(params.newValue);
          return isNaN(value) ? 0 : value;
        },
        valueFormatter: (params: ValueFormatterParams) => {
          return params.value ? `₹${params.value.toFixed(2)}` : '₹0.00';
        },
      },
      {
        headerName: 'Ex. Bed Charge',
        field: 'extraBedCharge',
        width: 160,
        editable: true,
        cellRenderer: EditableCellRenderer,
        cellEditor: 'agTextCellEditor',
        valueParser: (params: ValueParserParams) => {
          const value = parseFloat(params.newValue);
          return isNaN(value) ? 0 : value;
        },
        valueFormatter: (params: ValueFormatterParams) => {
          return params.value ? `₹${params.value.toFixed(2)}` : '₹0.00';
        },
      },
      {
        headerName: 'Action',
        field: 'action',
        width: 100,
        cellRenderer: (params: ICellRendererParams) => {
          return `
            <button 
              class="action-btn delete-btn" 
              title="Delete Room Type"
              style="
                background: #fee2e2; 
                color: #dc2626; 
                border: none; 
                border-radius: 4px; 
                padding: 4px 8px; 
                cursor: pointer;
                font-size: 12px;
                transition: all 0.2s ease;
              "
              onmouseover="this.style.background='#fecaca'"
              onmouseout="this.style.background='#fee2e2'"
              onclick="this.dispatchEvent(new CustomEvent('deleteRoom', { 
                detail: { id: '${params.data.id}' }, 
                bubbles: true 
              }))"
            >
              Delete
            </button>
          `;
        },
        suppressSizeToFit: true,
        pinned: 'right',
      },
    ];
  }

  onCellValueChanged(event: CellValueChangedEvent): void {
    const updatedRoomType = event.data;
    this.updateRoomType(updatedRoomType);
  }

  loadData(): void {
    this.isLoading = true;

    // Load room types from storage
    const savedRoomTypes = this.storageService.getRoomTypes();
    this.roomTypes = (savedRoomTypes as unknown as Record<string, unknown>[]).map((rt: Record<string, unknown>, index: number) => ({
      id: (rt['id'] || `rt-${index}`).toString(),
      name: String(rt['name'] || rt['roomTypeName'] || rt['title'] || rt['roomtypename'] || ''),
      baseRate: Number(rt['baseRate'] || rt['rate'] || rt['stdoccupancy'] || 0),
      extraPersonCharge: Number(rt['extraPersonCharge'] || rt['extraPersonRate'] || rt['extraAdultRate'] || rt['higheroccupancy'] || 0),
      extraBedCharge: Number(rt['extraBedCharge'] || rt['extraBedRate'] || rt['xtralwdbeds'] || 0),
      // Keep original data for other properties
      originalData: rt as Record<string, unknown>,
    }));

    // Load rooms from storage
    const storageRooms = this.storageService.getRooms() || [];
    this.rooms = storageRooms.map(room => ({
      id: room['id']?.toString() || '',
      roomNumber: (room['rmnameorno'] || room['roomcode'] || '').toString(),
      roomTypeId: room['rmtypeid']?.toString() || '',
      floor: Number(room['floorid']) || 0,
      status: (room['status'] || 'available').toString(),
      building: 'Main Building'
    }));

    // Update grid data
    this.gridOptions.rowData = [...this.roomTypes];

    this.isLoading = false;
  }

  addNewRoomType(): void {
    const newRoomType: RoomTypeRow = {
      id: `rt-${Date.now()}`,
      name: 'New Room Type',
      baseRate: 0,
      extraPersonCharge: 0,
      extraBedCharge: 0,
      originalData: {
        id: `rt-${Date.now()}`,
        name: 'New Room Type',
        title: 'New Room Type',
        baseRate: 0,
        extraPersonCharge: 0,
        extraBedCharge: 0,
        roomTypeName: 'New Room Type',
        rate: 0,
        extraPersonRate: 0,
        extraBedRate: 0,
        extraAdultRate: 0,
        // Default values for other properties
        description: '',
        standardOccupancy: 2,
        maxOccupancy: 2,
        maxAdults: 2,
        maxChildren: 1,
        totalRooms: 0,
        allowOverbooking: false,
        status: 'active',
        isWebBookable: true,
        amenities: [],
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    this.roomTypes.push(newRoomType);
    this.gridOptions.rowData = [...this.roomTypes];
    this.saveData();
  }

  updateRoomType(roomType: RoomTypeRow): void {
    const index = this.roomTypes.findIndex((rt) => rt.id === roomType.id);
    if (index !== -1) {
      // Update the room type with new values
      this.roomTypes[index] = {
        ...roomType,
        originalData: {
          ...roomType.originalData,
          name: roomType.name,
          title: roomType.name,
          roomTypeName: roomType.name,
          baseRate: roomType.baseRate,
          rate: roomType.baseRate,
          extraPersonCharge: roomType.extraPersonCharge,
          extraPersonRate: roomType.extraPersonCharge,
          extraAdultRate: roomType.extraPersonCharge,
          extraBedCharge: roomType.extraBedCharge,
          extraBedRate: roomType.extraBedCharge,
          updatedAt: new Date().toISOString(),
        },
      };
      this.saveData();
    }
  }

  deleteRoomType(id: string): void {
    if (
      confirm(
        'Are you sure you want to delete this room type? This action cannot be undone.',
      )
    ) {
      this.roomTypes = this.roomTypes.filter((rt) => rt.id !== id);
      this.gridOptions.rowData = [...this.roomTypes];
      this.saveData();
    }
  }

  saveData(): void {
    this.isSaving = true;

    // Convert room types back to original format for storage
    const roomTypesToSave = this.roomTypes.map((rt) => rt.originalData);

    // Save to storage
    const currentData = this.storageService.getSnapshot();
    currentData.roomTypes = roomTypesToSave as unknown as Record<string, unknown>[];
    localStorage.setItem('hotel-admin-data', JSON.stringify(currentData));

    setTimeout(() => {
      this.isSaving = false;
    }, 500);
  }

  exportData(): void {
    const dataToExport = {
      roomTypes: this.roomTypes.map((rt) => rt.originalData),
      rooms: this.rooms,
      exportDate: new Date().toISOString(),
      version: '1.0',
    };

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
      type: 'application/json',
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `room-types-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  importData(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const result = e.target?.result;
        if (typeof result !== 'string') return;
        const importedData = JSON.parse(result);

        if (importedData.roomTypes && Array.isArray(importedData.roomTypes)) {
          // Convert imported data to our format
          this.roomTypes = importedData.roomTypes.map(
            (rt: Record<string, unknown>, index: number) => ({
              id: (rt['id'] || `rt-imported-${index}`).toString(),
              name: String(rt['name'] || rt['roomTypeName'] || rt['title'] || ''),
              baseRate: Number(rt['baseRate'] || rt['rate'] || 0),
              extraPersonCharge: Number(rt['extraPersonCharge'] || rt['extraPersonRate'] || rt['extraAdultRate'] || 0),
              extraBedCharge: Number(rt['extraBedCharge'] || rt['extraBedRate'] || 0),
              originalData: rt,
            }),
          );

          if (importedData.rooms && Array.isArray(importedData.rooms)) {
            this.rooms = importedData.rooms;
          }

          this.gridOptions.rowData = [...this.roomTypes];
          this.saveData();

          alert('Data imported successfully!');
        } else {
          alert(
            'Invalid file format. Please select a valid room types export file.',
          );
        }
      } catch {
        alert("Error reading file. Please ensure it's a valid JSON file.");
      }
    };
    reader.readAsText(file);

    // Clear the input
    const target = event.target as HTMLInputElement;
    if (target) {
      target.value = '';
    }
  }

  getRoomsByType(roomTypeId: string): RoomDisplay[] {
    return this.rooms.filter((room) => room.roomTypeId === roomTypeId);
  }

  getTotalRoomsByType(roomTypeId: string): number {
    return this.getRoomsByType(roomTypeId).length;
  }

  getAvailableRoomsByType(roomTypeId: string): number {
    return this.getRoomsByType(roomTypeId).filter(
      (room) => room.status === 'available',
    ).length;
  }

  getOccupiedRoomsByType(roomTypeId: string): number {
    return this.getRoomsByType(roomTypeId).filter(
      (room) => room.status === 'occupied',
    ).length;
  }

  getRoomTypeName(roomTypeId: string): string {
    const roomType = this.roomTypes.find((rt) => rt.id === roomTypeId);
    return roomType ? roomType.name : 'Unknown';
  }

  onGridReady(params: GridReadyEvent): void {
    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params: GridSizeChangedEvent): void {
    params.api.sizeColumnsToFit();
  }
}
