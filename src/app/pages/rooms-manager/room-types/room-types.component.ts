import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule } from 'ag-grid-community';
import {
  ColDef,
  ColGroupDef,
  GridReadyEvent,
  GridSizeChangedEvent,
  CellValueChangedEvent,
  ValueParserParams,
  ICellRendererParams,
  RowClassParams,
  GridApi,
  GridOptions,
  RowHeightParams,
  CheckboxSelectionCallbackParams,
  CellClassParams,
  EditableCallbackParams,
} from 'ag-grid-community';
import { StorageService } from '../../../services/storage.service';
// Models
import { convertToRoom, convertToRoomType, DBRoomType } from '../../../utils/type-converters';
import { AppAccessibilityI18n } from '../../../models/app-accessibility-i18n.model';
// New Angular models
import { 
  IRoomTypes, 
  IUpdateRoomTypes,
  ModelStatus
} from '../../../models';

// Custom Cell Renderer for Expandable Rows
class ExpandableCellRenderer {
  eGui!: HTMLElement;
  params!: ICellRendererParams;

  init(params: ICellRendererParams) {
    this.params = params;
    this.eGui = document.createElement('div');
    this.eGui.style.cssText = `
      display: flex;
      align-items: center;
      padding: 4px 8px;
      height: 100%;
      gap: 8px;
    `;

    const data = params.data as ExpandableRoomTypeRow;
    const level = data.level || 0;
    const indent = level * 20;

    // Add indentation
    this.eGui.style.paddingLeft = `${8 + indent}px`;

    // Add expand/collapse icon for expandable rows
    if (data.isExpandable) {
      const expandIcon = document.createElement('span');
      expandIcon.style.cssText = `
        cursor: pointer;
        font-family: 'Material Icons';
        font-size: 16px;
        color: #666;
        user-select: none;
        transition: transform 0.2s ease;
      `;
      expandIcon.textContent = data.isExpanded ? 'expand_more' : 'chevron_right';
      expandIcon.addEventListener('click', () => {
        this.toggleExpansion();
      });
      this.eGui.appendChild(expandIcon);
    } else {
      // Add spacing for non-expandable rows to maintain alignment
      const spacer = document.createElement('span');
      spacer.style.width = '20px';
      this.eGui.appendChild(spacer);
    }

    // Add row type icon
    const typeIcon = document.createElement('span');
    typeIcon.style.cssText = `
      font-family: 'Material Icons';
      font-size: 14px;
      color: #4a5568;
    `;
    
    switch (data.rowType) {
      case 'roomType':
        typeIcon.textContent = 'business';
        break;
      case 'rooms':
        typeIcon.textContent = 'meeting_room';
        break;
      case 'amenities':
        typeIcon.textContent = 'star';
        break;
      case 'form':
      case 'editForm':
        typeIcon.textContent = 'edit';
        break;
    }
    this.eGui.appendChild(typeIcon);

    // Add content
    const content = document.createElement('span');
    content.style.cssText = `
      flex: 1;
      font-size: 13px;
      color: #1a202c;
    `;
    content.textContent = this.getDisplayContent(data);
    this.eGui.appendChild(content);
  }

  private getDisplayContent(data: ExpandableRoomTypeRow): string {
    switch (data.rowType) {
      case 'roomType':
        return data.roomType || 'Unnamed Room Type';
      case 'rooms':
        return `Room ${data.roomNumber || 'New'} - ${data.floor || 'No Floor'} - ${data.block || 'No Block'}`;
      case 'amenities':
        return data.amenityName || 'Amenity';
      case 'form':
      case 'editForm':
        return `${data.field || 'Field'}: ${data.value || ''}`;
      default:
        return data.roomType || '';
    }
  }

  private toggleExpansion() {
    if (this.params.api && this.params.node && this.params.context) {
      const data = this.params.data as ExpandableRoomTypeRow;
      
      // Call the component's toggle method through context
      if (this.params.context.componentParent && this.params.context.componentParent.toggleRowExpansion) {
        this.params.context.componentParent.toggleRowExpansion(data);
      }
    }
  }

  getGui() {
    return this.eGui;
  }
}

// Interface for room data
interface InlineRoomData {
  id: string;
  roomNumber: string;
  floor: string;
  roomArea: string;
  status: string;
  isNew?: boolean;
}

// Interface for expandable room type row data with hierarchical structure
interface ExpandableRoomTypeRow {
  // Main row data
  index?: number | string;
  id: string;
  image?: string;
  roomType?: string;
  baseOccupancy?: number | string;
  maxOccupancy?: number | string;
  adult?: number | string;
  child?: number | string;
  rooms?: number | string | InlineRoomData[];
  amenities?: string;
  floor?: string;
  block?: string;
  actions?: string;
  extraBedAllowed?: boolean;
  status?: ModelStatus;
  sortOrder?: number;
  originalData?: IRoomTypes;
  
  // Hierarchical structure properties
  rowType: 'roomType' | 'rooms' | 'amenities' | 'form' | 'editForm';
  groupKey?: string;
  parentId?: string | null;
  level: number;
  isGroup?: boolean;
  isExpandable?: boolean;
  isExpanded?: boolean;
  isEditForm?: boolean;
  children: ExpandableRoomTypeRow[];
  
  // Form-specific properties
  field?: string;
  value?: string | number | boolean;
  fieldType?: 'text' | 'dropdown' | 'checkbox' | 'number' | 'amenities' | 'currency' | 'textarea' | 'file' | 'taxes';
  options?: string[];
  
  // Room-specific properties
  roomNumber?: string;
  
  // Amenity-specific properties
  amenityName?: string;
  selected?: boolean;
}

// Interface for room type form data
interface RoomTypeFormData {
  nameEnglish: string;
  shortName: string;
  uploadImage: string;
  imageCaption: string;
  descriptionEnglish: string;
  baseOccupancy: number;
  higherOccupancy: number;
  extraBedAllowed: boolean;
  numberOfRooms: number;
  availableAmenities: string[];
  selectedAmenities: string[];
  baseRate: number;
  higherPrice: number;
  extraBedPrice: number;
  vatEnabled: boolean;
  cgstEnabled: boolean;
  igstEnabled: boolean;
  provincialTaxEnabled: boolean;
  sgstEnabled: boolean;
  utgstEnabled: boolean;
}

// Interface for edit form row data
interface EditFormRowData {
  field: string;
  value: string | number | boolean;
  type:
    | 'text'
    | 'file'
    | 'textarea'
    | 'dropdown'
    | 'checkbox'
    | 'number'
    | 'currency'
    | 'amenities'
    | 'taxes';
}

// Interface for amenity data
interface AmenityRow {
  number: number;
  amenities: string;
  sortOrder: number;
}

// Interface for room data
interface RoomData {
  id: string;
  roomNumber: string;
  roomTypeId: string;
  floor: number;
  status: string;
  building?: string;
}

// Interface for Add Room Form
interface AddRoomForm {
  field: string;
  value: string;
}

// Window interface for global functions
// Window interface for custom functions
interface WindowWithCustomFunctions extends Window {
  openAmenitiesDialog?: () => void;
  toggleAmenitySelection?: (amenityName: string, isSelected: boolean) => void;
  toggleFeatureSelection?: (feature: string, isAvailable: boolean, rowIndex: number, event: Event) => void;
  startSelection?: (type: string, rowIndex: number, event: MouseEvent) => void;
  handleSelection?: (type: string, rowIndex: number, event: MouseEvent) => void;
  endSelection?: () => void;
  handleKeySelection?: (type: string, rowIndex: number, event: KeyboardEvent) => void;
  moveSelectedToRight?: (rowIndex: number) => void;
  moveAllToSelected?: (rowIndex: number) => void;
  moveSelectedToLeft?: (rowIndex: number) => void;
  moveAllToAvailable?: (rowIndex: number) => void;
  updateDropdownValue?: (field: string, value: string) => void;
}

interface WindowWithFeatureFunctions extends Window {
  moveFeatureToSelected?: (feature: string, rowIndex: number) => void;
  moveFeatureToAvailable?: (feature: string, rowIndex: number) => void;
  moveAllToSelected?: (rowIndex: number) => void;
  moveAllToAvailable?: (rowIndex: number) => void;
  toggleFeatureSelection?: (
    feature: string,
    isAvailable: boolean,
    rowIndex: number,
    event: Event,
  ) => void;
  moveSelectedToRight?: (rowIndex: number) => void;
  moveSelectedToLeft?: (rowIndex: number) => void;
  startSelection?: (type: string, rowIndex: number, event: MouseEvent) => void;
  handleSelection?: (type: string, rowIndex: number, event: MouseEvent) => void;
  endSelection?: () => void;
  handleKeySelection?: (
    type: string,
    rowIndex: number,
    event: KeyboardEvent,
  ) => void;
}

// Helper function to safely access window in SSR environment
function safeWindow(): WindowWithCustomFunctions | WindowWithFeatureFunctions | null {
  if (typeof window !== 'undefined') {
    return window as WindowWithCustomFunctions | WindowWithFeatureFunctions;
  }
  return null;
}

// Add Room Dialog Component
@Component({
  selector: 'app-add-room-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AgGridAngular,
  ],
  template: `
    <div class="add-room-dialog">
      <div class="dialog-header">
        <div class="header-content">
          <mat-icon class="header-icon">add</mat-icon>
          <h2>Add/Edit a Room</h2>
        </div>
        <div class="header-actions">
          <button
            mat-raised-button
            class="action-btn save-btn"
            (click)="save()"
          >
            <mat-icon>save</mat-icon>
            <span>Save</span>
          </button>
          <button
            mat-raised-button
            class="action-btn duplicate-btn"
            (click)="saveAndDuplicate()"
          >
            <mat-icon>content_copy</mat-icon>
            <span>Save and duplicate room</span>
          </button>
          <button
            mat-raised-button
            class="action-btn cancel-btn"
            (click)="cancel()"
          >
            <mat-icon>close</mat-icon>
            <span>Cancel</span>
          </button>
        </div>
      </div>

      <div class="dialog-breadcrumb">
        <span>Main / Rooms List / Add/Edit a Room</span>
      </div>

      <div class="dialog-content">
        <p class="form-instruction">
          Please enter the room type details below.
        </p>

        <ag-grid-angular
          class="add-room-grid ag-theme-material"
          [gridOptions]="gridOptions"
          [rowData]="formData"
          [columnDefs]="getColumnDefs()"
          [modules]="modules"
          [domLayout]="'autoHeight'"
          [suppressHorizontalScroll]="true"
          (gridReady)="onGridReady($event)"
          style="width: 100%; height: auto;"
        >
        </ag-grid-angular>

        <div class="form-actions">
          <button mat-raised-button color="primary" (click)="save()">
            Save
          </button>
          <button mat-raised-button (click)="saveAndDuplicate()">
            Save and duplicate room
          </button>
          <button mat-stroked-button (click)="cancel()">Cancel</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .add-room-dialog {
        width: 800px;
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
      }

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        background: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
      }

      .header-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .header-icon {
        color: #4caf50;
        font-size: 24px;
        width: 24px;
        height: 24px;
      }

      .header-content h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
      }

      .header-actions {
        display: flex;
        gap: 8px;
      }

      .action-btn {
        height: 40px;
        min-width: auto;
        padding: 0 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        white-space: nowrap;
      }

      .action-btn mat-icon {
        font-size: 18px;
        width: 18px;
        height: 18px;
      }

      .save-btn {
        background: #e3f2fd;
        color: #1976d2;
      }

      .duplicate-btn {
        background: #e8f5e8;
        color: #4caf50;
      }

      .cancel-btn {
        background: #ffebee;
        color: #f44336;
      }

      .dialog-breadcrumb {
        padding: 8px 24px;
        background: #fafafa;
        font-size: 12px;
        color: #666;
        border-bottom: 1px solid #e0e0e0;
      }

      .dialog-content {
        padding: 24px;
        flex: 1;
        overflow-y: auto;
      }

      .form-instruction {
        margin: 0 0 20px 0;
        color: #666;
        font-size: 14px;
      }

      .add-room-grid {
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        margin-bottom: 24px;
      }

      .form-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-start;
        padding-top: 16px;
        border-top: 1px solid #e0e0e0;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        padding: 8px 12px;
        border-right: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-height: 40px;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        background: #f5f5f5;
        border-right: 1px solid #e0e0e0;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class AddRoomDialogComponent implements OnInit {
  public modules = [AllCommunityModule];
  public formData: AddRoomForm[] = [];
  public gridOptions: GridOptions = {};
  public gridApi!: GridApi;
  public availableFeatures: string[] = [
    'Sea Facing',
    'Pool View',
    'Hill View',
    'Garden View',
    'City View',
    'Balcony',
  ];
  public selectedFeatures: string[] = [];
  public selectedAmenities: string[] = [];
  public availableAmenities: string[] = [
    'Light',
    'Bath tub', 
    'Wi-fi',
    'Air Conditioning',
    'Television',
    'Mini Bar',
    'Refrigerator',
    'Safe',
    'Hairdryer',
    'Cable/satellite TV',
    'Radio',
    'Modem connection',
    'Balcony',
    'Writing desk',
    'Bidet',
    'Coffee Table',
    'Kitchenette',
    'mineral water',
    'Pillow',
    'Shower',
    'Adapted for wheel-chairs',
    'Toilet',
    'Location with preferential view',
    'Coat hangers',
    'Connecting door',
    'Normal door lock',
    'mirror',
    'Fire alarm',
    'Walking clock',
    'Pay-TV',
    'Flowers',
    'Key card system',
    'Mirror to shave'
  ];
  public selectedAvailableItems: string[] = [];
  public selectedSelectedItems: string[] = [];

  // Selection state tracking
  private isSelecting = false;
  private selectionType = '';
  private selectionRowIndex = 0;

  private dialogRef = inject(MatDialogRef<AddRoomDialogComponent>);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  constructor() {
    this.initializeForm();
    this.setupGrid();
    this.setupAmenitiesDialog();
  }

  ngOnInit(): void {
    this.setupGrid();
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
  }

  private initializeForm(): void {
    this.formData = [
      { field: 'Room Name/Number', value: '' },
      { field: 'Room Code', value: '' },
      { field: 'Room Type', value: 'Business suite' },
      { field: 'Floor', value: 'Select Floor' },
      { field: 'Room Area/Block', value: 'Select Block' },
      { field: 'Select & Add Amenities', value: '' },
      { field: 'Comments', value: '' },
    ];
  }

  private setupGrid(): void {
    this.gridOptions = {
      rowHeight: 40,
      headerHeight: 40,
      suppressHorizontalScroll: true,
      suppressColumnVirtualisation: true,
      singleClickEdit: true,
      stopEditingWhenCellsLoseFocus: true,
      getRowHeight: (params: { data: AddRoomForm }) => {
        // Set specific heights for each field
        if (params.data && params.data.field) {
          switch (params.data.field) {
            case 'Room Name/Number':
              return 40;
            case 'Room Code':
              return 40;
            case 'Room Type':
              return 40;
            case 'Floor':
              return 40;
            case 'Room Area/Block':
              return 40;
            case 'Select & Add Amenities':
              return 40;
            case 'Comments':
              return 60;
            default:
              return 40;
          }
        }
        return 40;
      },
    };
  }

  getColumnDefs(): ColDef[] {
    return [
      {
        headerName: 'Field',
        field: 'field',
        width: 240,
        editable: false,
        cellStyle: {
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '8px 12px',
          fontSize: '14px',
        },
      },
      {
        headerName: 'Value',
        field: 'value',
        width: 400,
        editable: (params) => {
          // Only allow editing for text input fields, not dropdowns or feature selector
          const field = params.data.field;
          return (
            field === 'Room Name/Number' ||
            field === 'Room Code' ||
            field === 'Comments'
          );
        },
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '2px',
        },
        cellRenderer: (params: ICellRendererParams) => {
          const field = params.data.field;
          switch (field) {
            case 'Room Name/Number':
              return `<input type="text" value="${params.data.value}" 
                style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white;">`;
            case 'Room Code':
              return `<input type="text" value="${params.data.value}" 
                style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white;">`;
            case 'Room Type':
              return `<select style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white; cursor: pointer;">
                <option value="Business suite" ${params.data.value === 'Business suite' ? 'selected' : ''}>Business suite</option>
                <option value="Deluxe Room" ${params.data.value === 'Deluxe Room' ? 'selected' : ''}>Deluxe Room</option>
                <option value="Standard Room" ${params.data.value === 'Standard Room' ? 'selected' : ''}>Standard Room</option>
                <option value="Executive Room" ${params.data.value === 'Executive Room' ? 'selected' : ''}>Executive Room</option>
                <option value="Suite" ${params.data.value === 'Suite' ? 'selected' : ''}>Suite</option>
              </select>`;
            case 'Floor':
              return `<select onchange="window.updateDropdownValue && window.updateDropdownValue('Floor', this.value)" style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white; cursor: pointer;">
                <option value="Select Floor" ${params.data.value === 'Select Floor' ? 'selected' : ''}>Select Floor</option>
                <option value="Ground Floor" ${params.data.value === 'Ground Floor' ? 'selected' : ''}>Ground Floor</option>
                <option value="First Floor" ${params.data.value === 'First Floor' ? 'selected' : ''}>First Floor</option>
                <option value="Second Floor" ${params.data.value === 'Second Floor' ? 'selected' : ''}>Second Floor</option>
                <option value="Third Floor" ${params.data.value === 'Third Floor' ? 'selected' : ''}>Third Floor</option>
                <option value="Fourth Floor" ${params.data.value === 'Fourth Floor' ? 'selected' : ''}>Fourth Floor</option>
              </select>`;
            case 'Room Area/Block':
              return `<select onchange="window.updateDropdownValue && window.updateDropdownValue('Room Area/Block', this.value)" style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white; cursor: pointer;">
                <option value="Select Block" ${params.data.value === 'Select Block' ? 'selected' : ''}>Select Block</option>
                <option value="Block A" ${params.data.value === 'Block A' ? 'selected' : ''}>Block A</option>
                <option value="Block B" ${params.data.value === 'Block B' ? 'selected' : ''}>Block B</option>
                <option value="Block C" ${params.data.value === 'Block C' ? 'selected' : ''}>Block C</option>
                <option value="Block D" ${params.data.value === 'Block D' ? 'selected' : ''}>Block D</option>
                <option value="Main Building" ${params.data.value === 'Main Building' ? 'selected' : ''}>Main Building</option>
              </select>`;
            case 'Select & Add Amenities': {
              return `<div style="display: flex; align-items: center; gap: 8px; width: 100%; height: 100%; padding: 2px;">
                <span style="flex: 1; font-size: 13px; color: #666;">${this.selectedAmenities.length > 0 ? this.selectedAmenities.join(', ') : 'No amenities selected'}</span>
                <button onclick="window.openAmenitiesDialog && window.openAmenitiesDialog()" 
                        style="background: #007bff; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 16px; cursor: pointer; font-weight: bold; min-width: 40px; height: 32px;"
                        title="Add Amenities">+</button>
              </div>`;
            }
            case 'Comments':
              return `<textarea style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; min-height: 50px; resize: none; box-sizing: border-box; font-size: 13px; outline: none; background: white; font-family: inherit;" 
                placeholder="Enter comments..."></textarea>`;
            default:
              return params.value || '';
          }
        },
      },
    ];
  }

  private setupFeatureTransferFunctions(): void {
    const windowRef = safeWindow();
    if (!windowRef) return;

    (windowRef as WindowWithFeatureFunctions).toggleFeatureSelection = (
      feature: string,
      isAvailable: boolean,
      rowIndex: number,
      event: Event,
    ) => {
      const isCtrlPressed =
        (event as MouseEvent).ctrlKey || (event as MouseEvent).metaKey;

      if (isAvailable) {
        if (isCtrlPressed) {
          // Multi-select with Ctrl
          const index = this.selectedAvailableItems.indexOf(feature);
          if (index > -1) {
            this.selectedAvailableItems.splice(index, 1);
          } else {
            this.selectedAvailableItems.push(feature);
          }
        } else {
          // Single select
          this.selectedAvailableItems = [feature];
        }
      } else {
        if (isCtrlPressed) {
          // Multi-select with Ctrl
          const index = this.selectedSelectedItems.indexOf(feature);
          if (index > -1) {
            this.selectedSelectedItems.splice(index, 1);
          } else {
            this.selectedSelectedItems.push(feature);
          }
        } else {
          // Single select
          this.selectedSelectedItems = [feature];
        }
      }
      this.refreshFeatureDisplay(rowIndex);
    };

    // Cursor-based selection functions
    windowRef.startSelection = (
      type: string,
      rowIndex: number,
      event: MouseEvent,
    ) => {
      this.isSelecting = true;
      this.selectionType = type;
      this.selectionRowIndex = rowIndex;

      // Clear previous selections if not holding Ctrl
      if (!event.ctrlKey && !event.metaKey) {
        if (type === 'available') {
          this.selectedAvailableItems = [];
        } else {
          this.selectedSelectedItems = [];
        }
      }

      event.preventDefault();
    };

    windowRef.handleSelection = (
      type: string,
      rowIndex: number,
      event: MouseEvent,
    ) => {
      if (
        !this.isSelecting ||
        this.selectionType !== type ||
        this.selectionRowIndex !== rowIndex
      ) {
        return;
      }

      const target = event.target as HTMLElement;
      const featureItem = target.closest('.feature-item');
      if (featureItem) {
        const feature = featureItem.getAttribute('data-feature');
        if (feature) {
          if (type === 'available') {
            if (!this.selectedAvailableItems.includes(feature)) {
              this.selectedAvailableItems.push(feature);
              this.refreshFeatureDisplay(rowIndex);
            }
          } else {
            if (!this.selectedSelectedItems.includes(feature)) {
              this.selectedSelectedItems.push(feature);
              this.refreshFeatureDisplay(rowIndex);
            }
          }
        }
      }
    };

    windowRef.endSelection = () => {
      this.isSelecting = false;
      this.selectionType = '';
      this.selectionRowIndex = 0;
    };

    windowRef.handleKeySelection = (
      type: string,
      rowIndex: number,
      event: KeyboardEvent,
    ) => {
      // Ctrl+A to select all
      if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
        event.preventDefault();
        if (type === 'available') {
          this.selectedAvailableItems = [...this.availableFeatures];
        } else {
          this.selectedSelectedItems = [...this.selectedFeatures];
        }
        this.refreshFeatureDisplay(rowIndex);
      }
    };

    (windowRef as WindowWithFeatureFunctions).moveSelectedToRight = (rowIndex: number) => {
      this.selectedAvailableItems.forEach((feature) => {
        this.moveFeatureToSelected(feature);
      });
      this.selectedAvailableItems = [];
      this.refreshFeatureDisplay(rowIndex);
    };

    (windowRef as WindowWithFeatureFunctions).moveSelectedToLeft = (rowIndex: number) => {
      this.selectedSelectedItems.forEach((feature) => {
        this.moveFeatureToAvailable(feature);
      });
      this.selectedSelectedItems = [];
      this.refreshFeatureDisplay(rowIndex);
    };

    (windowRef as WindowWithFeatureFunctions).moveFeatureToSelected = (feature: string, rowIndex: number) => {
      this.moveFeatureToSelected(feature);
      this.refreshFeatureDisplay(rowIndex);
    };

    (windowRef as WindowWithFeatureFunctions).moveFeatureToAvailable = (feature: string, rowIndex: number) => {
      this.moveFeatureToAvailable(feature);
      this.refreshFeatureDisplay(rowIndex);
    };

    (windowRef as WindowWithFeatureFunctions).moveAllToSelected = (rowIndex: number) => {
      this.availableFeatures.forEach((feature) => {
        this.selectedFeatures.push(feature);
      });
      this.availableFeatures = [];
      this.selectedAvailableItems = [];
      this.refreshFeatureDisplay(rowIndex);
    };

    (windowRef as WindowWithFeatureFunctions).moveAllToAvailable = (rowIndex: number) => {
      this.selectedFeatures.forEach((feature) => {
        this.availableFeatures.push(feature);
      });
      this.selectedFeatures = [];
      this.selectedSelectedItems = [];
      this.refreshFeatureDisplay(rowIndex);
    };
  }

  private moveFeatureToSelected(feature: string): void {
    const index = this.availableFeatures.indexOf(feature);
    if (index > -1) {
      this.availableFeatures.splice(index, 1);
      this.selectedFeatures.push(feature);
    }
  }

  private moveFeatureToAvailable(feature: string): void {
    const index = this.selectedFeatures.indexOf(feature);
    if (index > -1) {
      this.selectedFeatures.splice(index, 1);
      this.availableFeatures.push(feature);
    }
  }

  private refreshFeatureDisplay(rowIndex: number): void {
    const availableContainer = document.getElementById(
      `available-features-${rowIndex}`,
    );
    const selectedContainer = document.getElementById(
      `selected-features-${rowIndex}`,
    );

    if (availableContainer) {
      // Make container focusable for keyboard shortcuts
      availableContainer.setAttribute('tabindex', '0');
      availableContainer.innerHTML = this.availableFeatures
        .map((feature) => {
          const isSelected = this.selectedAvailableItems.includes(feature);
          return `<div class="feature-item available" 
             data-feature="${feature}" 
             onclick="window.toggleFeatureSelection && window.toggleFeatureSelection('${feature}', true, ${rowIndex}, event)"
             style="padding: 2px 4px; margin: 1px 0; background: ${isSelected ? '#c3e6cb' : '#f8f9fa'}; border: 1px solid ${isSelected ? '#a3d977' : '#dee2e6'}; border-radius: 3px; cursor: pointer; user-select: none; font-size: 10px; ${isSelected ? 'font-weight: bold;' : ''}"
             onmouseover="this.style.backgroundColor='${isSelected ? '#a3d977' : '#e9ecef'}'" 
             onmouseout="this.style.backgroundColor='${isSelected ? '#c3e6cb' : '#f8f9fa'}'">
           ${feature}
         </div>`;
        })
        .join('');
    }

    if (selectedContainer) {
      // Make container focusable for keyboard shortcuts
      selectedContainer.setAttribute('tabindex', '0');
      selectedContainer.innerHTML = this.selectedFeatures
        .map((feature) => {
          const isSelected = this.selectedSelectedItems.includes(feature);
          return `<div class="feature-item selected" 
             data-feature="${feature}"
             onclick="window.toggleFeatureSelection && window.toggleFeatureSelection('${feature}', false, ${rowIndex}, event)"
             style="padding: 2px 4px; margin: 1px 0; background: ${isSelected ? '#a3d977' : '#d4edda'}; border: 1px solid ${isSelected ? '#7bc043' : '#c3e6cb'}; border-radius: 3px; cursor: pointer; user-select: none; font-size: 10px; ${isSelected ? 'font-weight: bold;' : ''}"
             onmouseover="this.style.backgroundColor='${isSelected ? '#7bc043' : '#c3e6cb'}'" 
             onmouseout="this.style.backgroundColor='${isSelected ? '#a3d977' : '#d4edda'}'">
           ${feature}
         </div>`;
        })
        .join('');
    }

    // Update form data
    const formItem = this.formData.find(
      (item) => item.field === 'Select & Add Amenities',
    );
    if (formItem) {
      formItem.value = this.selectedFeatures.join(', ');
    }
  }

  updateFormValue(rowIndex: number, field: string, value: string): void {
    const item = this.formData.find((item) => item.field === field);
    if (item) {
      item.value = value;
      
      // Trigger a grid refresh to ensure the updated values are displayed
      if (this.gridApi) {
        this.gridApi.refreshCells({ force: true });
      }
    }
  }

  private setupAmenitiesDialog(): void {
    const windowRef = safeWindow();
    if (!windowRef) return;
    
    (windowRef as WindowWithCustomFunctions).openAmenitiesDialog = () => {
      this.openAmenitiesDialog();
    };

    // Setup dropdown change handler for Floor and Block selections
    (windowRef as WindowWithCustomFunctions).updateDropdownValue = (field: string, value: string) => {
      this.updateFormValue(0, field, value);
      console.log(`Updated ${field} to ${value}`);
    };
  }

  openAmenitiesDialog(): void {
    const dialogRef = this.dialog.open(AmenitiesSelectionDialogComponent, {
      width: '800px',
      height: '600px',
      data: {
        availableAmenities: this.availableAmenities,
        selectedAmenities: [...this.selectedAmenities]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.selectedAmenities) {
        this.selectedAmenities = result.selectedAmenities;
        // Refresh the grid to update the display
        this.setupGrid();
      }
    });
  }

  save(): void {
    this.snackBar.open('Room saved successfully!', 'Close', { duration: 3000 });
    this.dialogRef.close({ action: 'save', data: this.formData });
  }

  saveAndDuplicate(): void {
    this.snackBar.open('Room saved and duplicated!', 'Close', {
      duration: 3000,
    });
    this.dialogRef.close({ action: 'saveAndDuplicate', data: this.formData });
  }

  cancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}

interface AmenityGridRow {
  index: number;
  leftColumn: { name: string; selected: boolean } | null;
  rightColumn: { name: string; selected: boolean } | null;
}

// Amenities Selection Dialog Component
@Component({
  selector: 'app-amenities-selection-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    AgGridAngular,
  ],
  template: `
    <div class="amenities-selection-dialog">
      <div class="dialog-header">
        <h2>Select & Add Amenities</h2>
        <div class="header-buttons">
          <button mat-raised-button color="accent" (click)="openAddAmenityDialog()" class="add-amenity-btn">
            Add Amenities
          </button>
          <button mat-icon-button (click)="cancel()">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>

      <div class="dialog-content">
        <ag-grid-angular
          class="amenities-grid ag-theme-material"
          [gridOptions]="gridOptions"
          [rowData]="getGridData()"
          [columnDefs]="getColumnDefs()"
          [modules]="modules"
          [domLayout]="'normal'"
          style="width: 100%; height: 400px; overflow-y: auto;"
        ></ag-grid-angular>
      </div>

      <div class="dialog-actions">
        <button mat-button (click)="cancel()">Cancel</button>
        <button mat-raised-button color="primary" (click)="save()">Save</button>
      </div>
    </div>
  `,
  styles: [`
    .amenities-selection-dialog {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #e0e0e0;
    }

    .dialog-header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
    }

    .header-buttons {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .add-amenity-btn {
      font-size: 14px;
      padding: 8px 16px;
    }

    .dialog-content {
      flex: 1;
      padding: 20px;
      overflow: hidden;
    }

    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 16px 20px;
      border-top: 1px solid #e0e0e0;
    }

    .amenities-grid {
      width: 100%;
      height: 100%;
    }
  `]
})
export class AmenitiesSelectionDialogComponent implements OnInit {
  public modules = [AllCommunityModule];
  public amenitiesData: { name: string; selected: boolean }[] = [];
  public gridOptions: GridOptions = {};

  private dialogRef = inject(MatDialogRef<AmenitiesSelectionDialogComponent>);
  private data = inject(MAT_DIALOG_DATA);
  private dialog = inject(MatDialog);

  constructor() {
    this.initializeData();
    this.setupGrid();
  }

  ngOnInit(): void {
    this.setupGrid();
    // Setup the amenity toggle function after a short delay to ensure grid is ready
    setTimeout(() => {
      this.setupAmenityToggle();
    }, 100);
  }

  private initializeData(): void {
    const availableAmenities = this.data.availableAmenities || [];
    const selectedAmenities = this.data.selectedAmenities || [];

    this.amenitiesData = availableAmenities.map((amenity: string) => ({
      name: amenity,
      selected: selectedAmenities.includes(amenity)
    }));
  }

  getGridData(): AmenityGridRow[] {
    // Create rows for the grid - each row represents one row in the display
    const midPoint = Math.ceil(this.amenitiesData.length / 2);
    const gridData: AmenityGridRow[] = [];
    
    for (let i = 0; i < midPoint; i++) {
      gridData.push({
        index: i,
        leftColumn: i < this.amenitiesData.length ? this.amenitiesData[i] : null,
        rightColumn: (i + midPoint) < this.amenitiesData.length ? this.amenitiesData[i + midPoint] : null
      });
    }
    
    return gridData;
  }

  private setupGrid(): void {
    this.gridOptions = {
      rowHeight: 35,
      headerHeight: 0, // Hide headers
      suppressHorizontalScroll: false,
      suppressColumnVirtualisation: true,
      rowSelection: 'multiple',
    };
  }

  getColumnDefs(): ColDef[] {
    // Split amenities into two columns
    const midPoint = Math.ceil(this.amenitiesData.length / 2);
    const leftColumnAmenities = this.amenitiesData.slice(0, midPoint);
    const rightColumnAmenities = this.amenitiesData.slice(midPoint);
    
    return [
      {
        headerName: '',
        field: 'leftColumn',
        flex: 1,
        cellRenderer: (params: ICellRendererParams) => {
          const rowIndex = params.node?.rowIndex || 0;
          const amenity = leftColumnAmenities[rowIndex];
          
          if (!amenity) return '';
          
          const checked = amenity.selected ? 'checked' : '';
          return `<div style="display: flex; align-items: center; gap: 8px; padding: 4px;">
            <input type="checkbox" ${checked} 
                   onchange="window.toggleAmenitySelection && window.toggleAmenitySelection('${amenity.name}', this.checked)"
                   style="transform: scale(1.2); cursor: pointer;">
            <span style="font-size: 14px;">${amenity.name}</span>
          </div>`;
        },
        editable: false,
      },
      {
        headerName: '',
        field: 'rightColumn',
        flex: 1,
        cellRenderer: (params: ICellRendererParams) => {
          const rowIndex = params.node?.rowIndex || 0;
          const amenity = rightColumnAmenities[rowIndex];
          
          if (!amenity) return '';
          
          const checked = amenity.selected ? 'checked' : '';
          return `<div style="display: flex; align-items: center; gap: 8px; padding: 4px;">
            <input type="checkbox" ${checked} 
                   onchange="window.toggleAmenitySelection && window.toggleAmenitySelection('${amenity.name}', this.checked)"
                   style="transform: scale(1.2); cursor: pointer;">
            <span style="font-size: 14px;">${amenity.name}</span>
          </div>`;
        },
        editable: false,
      },
    ];
  }

  private setupAmenityToggle(): void {
    const windowRef = safeWindow();
    if (!windowRef) return;
    
    (windowRef as WindowWithCustomFunctions).toggleAmenitySelection = (amenityName: string, isSelected: boolean) => {
      const amenity = this.amenitiesData.find(a => a.name === amenityName);
      if (amenity) {
        amenity.selected = isSelected;
      }
    };
  }

  save(): void {
    const selectedAmenities = this.amenitiesData
      .filter(amenity => amenity.selected)
      .map(amenity => amenity.name);

    this.dialogRef.close({ selectedAmenities });
  }

  openAddAmenityDialog(): void {
    const dialogRef = this.dialog.open(AddAmenityDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.newAmenity) {
        // Add the new amenity to the available amenities list
        this.amenitiesData.push({
          name: result.newAmenity,
          selected: false
        });
        
        // Update the data for parent components
        this.data.availableAmenities.push(result.newAmenity);
        
        // Refresh the grid display
        this.setupAmenityToggle();
      }
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}

// Add Amenity Dialog Component
@Component({
  selector: 'app-add-amenity-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  template: `
    <div class="add-amenity-dialog">
      <div class="dialog-header">
        <h2>Add New Amenity</h2>
        <button mat-icon-button (click)="cancel()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="dialog-content">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Amenity Name</mat-label>
          <input matInput 
                 [(ngModel)]="amenityName" 
                 placeholder="Enter amenity name"
                 (keyup.enter)="save()"
                 #amenityInput>
        </mat-form-field>
      </div>

      <div class="dialog-actions">
        <button mat-button (click)="cancel()">Cancel</button>
        <button mat-raised-button 
                color="primary" 
                (click)="save()" 
                [disabled]="!amenityName.trim()">
          Add Amenity
        </button>
      </div>
    </div>
  `,
  styles: [`
    .add-amenity-dialog {
      display: flex;
      flex-direction: column;
      min-width: 400px;
    }

    .dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #e0e0e0;
    }

    .dialog-header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
    }

    .dialog-content {
      padding: 20px;
    }

    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 16px 20px;
      border-top: 1px solid #e0e0e0;
    }

    .full-width {
      width: 100%;
    }
  `]
})
export class AddAmenityDialogComponent {
  public amenityName = '';

  private dialogRef = inject(MatDialogRef<AddAmenityDialogComponent>);
  private data = inject(MAT_DIALOG_DATA);

  save(): void {
    if (this.amenityName?.trim()) {
      this.dialogRef.close({ newAmenity: this.amenityName.trim() });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}

// Edit Room Type Dialog Component
@Component({
  selector: 'app-edit-room-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    AgGridAngular,
  ],
  template: `
    <div class="edit-room-type-dialog">
      <div class="dialog-header">
        <h2>{{ isEdit ? 'Edit' : 'Add a' }} Room Type</h2>
        <button mat-icon-button (click)="cancel()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="dialog-breadcrumb">
        <span
          >Main / Room Types List / {{ isEdit ? 'Edit' : 'Add a' }} Room
          Type</span
        >
      </div>

      <div class="dialog-content">
        <p class="form-instruction">
          Please enter the room type details below.
        </p>

        <ag-grid-angular
          class="room-type-grid ag-theme-material"
          [gridOptions]="gridOptions"
          [rowData]="formData"
          [columnDefs]="getColumnDefs()"
          [modules]="modules"
          [domLayout]="'autoHeight'"
          [suppressHorizontalScroll]="true"
          (gridReady)="onGridReady($event)"
          style="width: 100%; height: auto;"
        >
        </ag-grid-angular>
      </div>

      <div class="dialog-actions">
        <button mat-raised-button color="primary" (click)="save()">Save</button>
        <button mat-stroked-button (click)="cancel()">Cancel</button>
      </div>
    </div>
  `,
  styles: [
    `
      .edit-room-type-dialog {
        width: 900px;
        max-width: 95vw;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
      }

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        background: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
      }

      .dialog-header h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
        color: #333;
      }

      .dialog-breadcrumb {
        padding: 8px 24px;
        background: #fafafa;
        font-size: 12px;
        color: #666;
        border-bottom: 1px solid #e0e0e0;
      }

      .dialog-content {
        padding: 24px;
        flex: 1;
        overflow-y: auto;
      }

      .form-instruction {
        margin: 0 0 20px 0;
        color: #666;
        font-size: 14px;
      }

      .room-type-grid {
        border: 1px solid #e0e0e0;
        border-radius: 4px;
      }

      .dialog-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        padding: 16px 24px;
        border-top: 1px solid #e0e0e0;
        background: #fafafa;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        padding: 8px 12px;
        border-right: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-height: 40px;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        background: #f5f5f5;
        border-right: 1px solid #e0e0e0;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class EditRoomTypeDialogComponent implements OnInit {
  public modules = [AllCommunityModule];
  public formData: EditFormRowData[] = [];
  public gridOptions: GridOptions = {};
  public isEdit = false;
  public roomTypeData: RoomTypeFormData;
  public gridApi!: GridApi;
  public selectedAmenities: string[] = [];
  public availableAmenities: string[] = [
    'Light',
    'Bath tub', 
    'Wi-fi',
    'Air Conditioning',
    'Television',
    'Mini Bar',
    'Refrigerator',
    'Safe',
    'Hairdryer',
    'Cable/satellite TV',
    'Radio',
    'Modem connection',
    'Balcony',
    'Writing desk',
    'Bidet',
    'Coffee Table',
    'Kitchenette',
    'mineral water',
    'Pillow',
    'Shower',
    'Adapted for wheel-chairs',
    'Toilet',
    'Location with preferential view',
    'Coat hangers',
    'Connecting door',
    'Normal door lock',
    'mirror',
    'Fire alarm',
    'Walking clock',
    'Pay-TV',
    'Flowers',
    'Key card system',
    'Mirror to shave'
  ];

  private dialogRef = inject(MatDialogRef<EditRoomTypeDialogComponent>);
  private data = inject(MAT_DIALOG_DATA);
  private dialog = inject(MatDialog);

  constructor() {
    this.isEdit = !!this.data?.roomTypeId;
    this.roomTypeData = this.data?.roomTypeData || this.getDefaultFormData();
    this.selectedAmenities = this.roomTypeData.selectedAmenities || [];
    this.initializeFormData();
    this.setupGrid();
    this.setupAmenitiesDialog();
  }

  ngOnInit(): void {
    this.setupGrid();
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.setupEventListeners();
  }

  private getDefaultFormData(): RoomTypeFormData {
    return {
      nameEnglish: '',
      shortName: '',
      uploadImage: '',
      imageCaption: '',
      descriptionEnglish: '',
      baseOccupancy: 1,
      higherOccupancy: 2,
      extraBedAllowed: false,
      numberOfRooms: 1,
      availableAmenities: [
        'Light',
        'Bath tub',
        'Wi-fi',
        'Air Conditioning',
        'Television',
        'Mini Bar',
      ],
      selectedAmenities: [],
      baseRate: 125,
      higherPrice: 50,
      extraBedPrice: 20,
      vatEnabled: false,
      cgstEnabled: true,
      igstEnabled: false,
      provincialTaxEnabled: false,
      sgstEnabled: false,
      utgstEnabled: true,
    };
  }

  private initializeFormData(): void {
    this.formData = [
      {
        field: 'Name the Room Type (English)',
        value: this.roomTypeData.nameEnglish,
        type: 'text',
      },
      { field: 'Short Name', value: this.roomTypeData.shortName, type: 'text' },
      {
        field: 'Upload Image',
        value: this.roomTypeData.uploadImage,
        type: 'file',
      },
      {
        field: 'Image Caption',
        value: this.roomTypeData.imageCaption,
        type: 'text',
      },
      {
        field: 'Description (English)',
        value: this.roomTypeData.descriptionEnglish,
        type: 'textarea',
      },
      {
        field: 'Base Occupancy',
        value: this.roomTypeData.baseOccupancy,
        type: 'dropdown',
      },
      {
        field: 'Higher Occupancy',
        value: this.roomTypeData.higherOccupancy,
        type: 'dropdown',
      },
      {
        field: 'Extra bed allowed',
        value: this.roomTypeData.extraBedAllowed,
        type: 'checkbox',
      },
      {
        field: 'Number of Rooms of this Room Type',
        value: this.roomTypeData.numberOfRooms,
        type: 'number',
      },
      { field: 'Select & Add Amenities', value: '', type: 'amenities' },
      {
        field: 'Base Rate (List price)',
        value: this.roomTypeData.baseRate,
        type: 'currency',
      },
      {
        field: 'Higher Price (Surcharge Per Additional Person)',
        value: this.roomTypeData.higherPrice,
        type: 'currency',
      },
      {
        field: 'Extra Bed Price',
        value: this.roomTypeData.extraBedPrice,
        type: 'currency',
      },
      { field: 'Sales/Applicable Taxes', value: '', type: 'taxes' },
    ];
  }

  private setupGrid(): void {
    this.gridOptions = {
      rowHeight: 40,
      headerHeight: 40,
      suppressHorizontalScroll: true,
      suppressColumnVirtualisation: true,
      singleClickEdit: true,
      stopEditingWhenCellsLoseFocus: true,
      getRowHeight: (params: RowHeightParams) => {
        if (params.data && params.data.type) {
          switch (params.data.type) {
            case 'textarea':
              return 80;
            case 'amenities':
              return 40;
            case 'taxes':
              return 100;
            default:
              return 40;
          }
        }
        return 40;
      },
    };
  }

  getColumnDefs(): ColDef[] {
    return [
      {
        headerName: 'Field',
        field: 'field',
        width: 350,
        editable: false,
        cellStyle: {
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '8px 12px',
          fontSize: '14px',
        },
      },
      {
        headerName: 'Value',
        field: 'value',
        width: 500,
        editable: false,
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '2px',
        },
        cellRenderer: (params: ICellRendererParams) => {
          const field = params.data.field;
          const type = params.data.type;
          const value = params.data.value;

          switch (type) {
            case 'text':
              return `<input type="text" value="${value}" placeholder="${field.includes('English') ? 'Enter English name' : 'Enter ' + field.toLowerCase()}" 
                style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white;">`;

            case 'file':
              return `<div style="display: flex; align-items: center; gap: 8px; width: 100%;">
                <button style="background: #f0f0f0; border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">Choose File</button>
                <span style="font-size: 12px; color: #666;">No file chosen</span>
              </div>`;

            case 'textarea':
              return `<textarea placeholder="Enter description..." style="width: 100%; height: 60px; border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; resize: none; box-sizing: border-box; font-size: 13px; outline: none; background: white; font-family: inherit;">${value}</textarea>`;

            case 'dropdown':
              if (field.includes('Base Occupancy')) {
                return `<select style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white; cursor: pointer;">
                  <option value="1" ${value === 1 ? 'selected' : ''}>1 Persons</option>
                  <option value="2" ${value === 2 ? 'selected' : ''}>2 Persons</option>
                  <option value="3" ${value === 3 ? 'selected' : ''}>3 Persons</option>
                  <option value="4" ${value === 4 ? 'selected' : ''}>4 Persons</option>
                </select>`;
              } else {
                return `<select style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white; cursor: pointer;">
                  <option value="1" ${value === 1 ? 'selected' : ''}>1 Persons</option>
                  <option value="2" ${value === 2 ? 'selected' : ''}>2 Persons</option>
                  <option value="3" ${value === 3 ? 'selected' : ''}>3 Persons</option>
                  <option value="4" ${value === 4 ? 'selected' : ''}>4 Persons</option>
                </select>`;
              }

            case 'checkbox':
              return `<label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" ${value ? 'checked' : ''} style="margin: 0;">
                <span style="font-size: 13px;">Yes</span>
              </label>`;

            case 'number':
              return `<input type="number" value="${value}" min="1" 
                style="width: 80px; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white;">`;

            case 'currency':
              return `<div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 13px;">Rs.</span>
                <input type="number" value="${value}" min="0" step="0.01"
                  style="width: 80px; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white;">
                <span style="font-size: 12px; color: #666;">per person</span>
              </div>`;

            case 'amenities':
              return `<div style="display: flex; align-items: center; gap: 8px; width: 100%; height: 100%; padding: 2px;">
                <span style="flex: 1; font-size: 13px; color: #666;">${this.selectedAmenities.length > 0 ? this.selectedAmenities.join(', ') : 'No amenities selected'}</span>
                <button onclick="window.openAmenitiesDialog && window.openAmenitiesDialog()" 
                        style="background: #007bff; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 16px; cursor: pointer; font-weight: bold; min-width: 40px; height: 32px;"
                        title="Add Amenities">+</button>
              </div>`;

            case 'taxes':
              return `<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; padding: 4px;">
                <label style="display: flex; align-items: center; gap: 4px; font-size: 12px;">
                  <input type="checkbox" ${this.roomTypeData.vatEnabled ? 'checked' : ''}>
                  VAT
                </label>
                <label style="display: flex; align-items: center; gap: 4px; font-size: 12px;">
                  <input type="checkbox" ${this.roomTypeData.cgstEnabled ? 'checked' : ''}>
                  CGST
                </label>
                <label style="display: flex; align-items: center; gap: 4px; font-size: 12px;">
                  <input type="checkbox" ${this.roomTypeData.igstEnabled ? 'checked' : ''}>
                  IGST
                </label>
                <label style="display: flex; align-items: center; gap: 4px; font-size: 12px;">
                  <input type="checkbox" ${this.roomTypeData.provincialTaxEnabled ? 'checked' : ''}>
                  Provincial tax
                </label>
                <label style="display: flex; align-items: center; gap: 4px; font-size: 12px;">
                  <input type="checkbox" ${this.roomTypeData.sgstEnabled ? 'checked' : ''}>
                  SGST
                </label>
                <label style="display: flex; align-items: center; gap: 4px; font-size: 12px;">
                  <input type="checkbox" ${this.roomTypeData.utgstEnabled ? 'checked' : ''}>
                  UTGST
                </label>
              </div>`;

            default:
              return value || '';
          }
        },
      },
    ];
  }

  private setupEventListeners(): void {
    // Add event listeners for form interactions
    setTimeout(() => {
      // This would handle form field changes
    }, 100);
  }

  save(): void {
    console.log('Saving room type data:', this.roomTypeData);
    this.dialogRef.close({ action: 'save', data: this.roomTypeData });
  }

  private setupAmenitiesDialog(): void {
    const windowRef = safeWindow();
    if (!windowRef) return;
    
    (windowRef as WindowWithCustomFunctions).openAmenitiesDialog = () => {
      this.openAmenitiesDialog();
    };
  }

  openAmenitiesDialog(): void {
    const dialogRef = this.dialog.open(AmenitiesSelectionDialogComponent, {
      width: '800px',
      height: '600px',
      data: {
        availableAmenities: this.availableAmenities,
        selectedAmenities: [...this.selectedAmenities]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.selectedAmenities) {
        this.selectedAmenities = result.selectedAmenities;
        this.roomTypeData.selectedAmenities = result.selectedAmenities;
        // Refresh the grid to update the display
        this.setupGrid();
      }
    });
  }

  cancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}

// Sort Amenities Dialog Component
@Component({
  selector: 'app-sort-amenities-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    AgGridAngular,
  ],
  template: `
    <div class="sort-amenities-dialog">
      <div class="dialog-header">
        <h2>Sort Amenities - {{ roomTypeName }}</h2>
        <button mat-icon-button (click)="cancel()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="dialog-content">
        <ag-grid-angular
          class="amenities-grid ag-theme-material"
          [gridOptions]="gridOptions"
          [rowData]="amenitiesData"
          [columnDefs]="getColumnDefs()"
          [modules]="modules"
          [domLayout]="'autoHeight'"
          [suppressHorizontalScroll]="true"
          (gridReady)="onGridReady($event)"
          style="width: 100%; height: auto; min-height: 200px;"
        >
        </ag-grid-angular>
      </div>

      <div class="dialog-actions">
        <button mat-raised-button color="primary" (click)="save()">Save</button>
        <button mat-stroked-button (click)="cancel()">Cancel</button>
      </div>
    </div>
  `,
  styles: [
    `
      .sort-amenities-dialog {
        width: 600px;
        max-width: 90vw;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
      }

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        background: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
      }

      .dialog-header h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
        color: #333;
      }

      .dialog-content {
        padding: 24px;
        flex: 1;
        overflow-y: auto;
      }

      .amenities-grid {
        border: 1px solid #e0e0e0;
        border-radius: 4px;
      }

      .dialog-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        padding: 16px 24px;
        border-top: 1px solid #e0e0e0;
        background: #fafafa;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        padding: 8px 12px;
        border-right: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-height: 40px;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        background: #f5f5f5;
        border-right: 1px solid #e0e0e0;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      ::ng-deep .ag-theme-material .ag-row {
        height: 40px;
        min-height: 40px;
        max-height: 40px;
      }
    `,
  ],
})
export class SortAmenitiesDialogComponent implements OnInit {
  public modules = [AllCommunityModule];
  public amenitiesData: AmenityRow[] = [];
  public gridOptions: GridOptions = {};
  public roomTypeName = '';
  public gridApi!: GridApi;

  private dialogRef = inject(MatDialogRef<SortAmenitiesDialogComponent>);
  private data = inject(MAT_DIALOG_DATA);

  constructor() {
    this.roomTypeName = this.data?.roomTypeName || 'Business suite';
    this.initializeData();
    this.setupGrid();
  }

  ngOnInit(): void {
    this.setupGrid();
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Add event listener for sort order changes
    const gridElement = document.querySelector('.amenities-grid');
    if (gridElement) {
      gridElement.addEventListener('sortOrderChange', (event: Event) => {
        const customEvent = event as CustomEvent;
        const { rowIndex, value } = customEvent.detail;
        if (this.amenitiesData[rowIndex]) {
          this.amenitiesData[rowIndex].sortOrder = parseInt(value) || 0;
        }
      });
    }
  }

  private initializeData(): void {
    // Sample amenities data - in real app, this would come from the service
    this.amenitiesData = [
      { number: 1, amenities: 'Light', sortOrder: 1 },
      { number: 2, amenities: 'Bath tub', sortOrder: 2 },
      { number: 3, amenities: 'Wi-fi', sortOrder: 3 },
    ];
  }

  private setupGrid(): void {
    this.gridOptions = {
      rowHeight: 40,
      headerHeight: 40,
      suppressHorizontalScroll: true,
      suppressColumnVirtualisation: true,
      singleClickEdit: true,
      stopEditingWhenCellsLoseFocus: true,
    };
  }

  getColumnDefs(): ColDef[] {
    return [
      {
        headerName: '#',
        field: 'number',
        width: 60,
        editable: false,
        cellStyle: {
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      {
        headerName: 'Amenities',
        field: 'amenities',
        width: 300,
        editable: false,
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '8px 12px',
        },
      },
      {
        headerName: 'Sort order',
        field: 'sortOrder',
        width: 150,
        editable: true,
        cellRenderer: (params: ICellRendererParams) => {
          return `<input type="number" value="${params.value || 0}" 
            style="
              width: 60px; 
              border: 1px solid #d1d5db; 
              border-radius: 4px; 
              padding: 4px 8px; 
              text-align: center;
              background: white;
              font-size: 13px;
              outline: none;
            "
            onchange="this.dispatchEvent(new CustomEvent('sortOrderChange', { 
              detail: { rowIndex: ${params.node?.rowIndex}, value: this.value }, 
              bubbles: true 
            }))"
          >`;
        },
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    ];
  }

  save(): void {
    console.log('Saving amenities sort order:', this.amenitiesData);
    this.dialogRef.close({ action: 'save', data: this.amenitiesData });
  }

  cancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
}

// Edit PM Room Type Dialog Component
@Component({
  selector: 'app-edit-pm-room-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    AgGridAngular,
  ],
  template: `
    <div class="edit-pm-room-type-dialog">
      <div class="dialog-header">
        <div class="header-content">
          <mat-icon class="header-icon">add</mat-icon>
          <h2>Add a Paymaster Room Type</h2>
        </div>
        <div class="header-actions">
          <button
            mat-raised-button
            class="action-btn save-btn"
            (click)="save()"
          >
            <mat-icon>save</mat-icon>
            <span>Save</span>
          </button>
          <button
            mat-raised-button
            class="action-btn cancel-btn"
            (click)="cancel()"
          >
            <mat-icon>close</mat-icon>
            <span>Cancel</span>
          </button>
        </div>
      </div>

      <div class="dialog-breadcrumb">
        <span>Main / Room Types List / Add a Paymaster Room Type</span>
      </div>

      <div class="dialog-content">
        <p class="form-instruction">
          Please enter the room type details below.
        </p>

        <ag-grid-angular
          class="edit-pm-room-type-grid ag-theme-material"
          [gridOptions]="gridOptions"
          [rowData]="formData"
          [columnDefs]="getColumnDefs()"
          [modules]="modules"
          [domLayout]="'autoHeight'"
          [suppressHorizontalScroll]="true"
          (gridReady)="onGridReady()"
          style="width: 100%; height: auto;"
        >
        </ag-grid-angular>
      </div>
    </div>
  `,
  styles: [
    `
      .edit-pm-room-type-dialog {
        width: 1000px;
        max-width: 95vw;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
      }

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        background: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
      }

      .header-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .header-icon {
        color: #4caf50;
        font-size: 24px;
        width: 24px;
        height: 24px;
      }

      .header-content h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
      }

      .header-actions {
        display: flex;
        gap: 8px;
      }

      .action-btn {
        height: 40px;
        min-width: auto;
        padding: 0 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        white-space: nowrap;
      }

      .action-btn mat-icon {
        font-size: 18px;
        width: 18px;
        height: 18px;
      }

      .save-btn {
        background: #e3f2fd;
        color: #1976d2;
      }

      .cancel-btn {
        background: #ffebee;
        color: #f44336;
      }

      .dialog-breadcrumb {
        padding: 8px 24px;
        background: #fafafa;
        font-size: 12px;
        color: #666;
        border-bottom: 1px solid #e0e0e0;
      }

      .dialog-content {
        padding: 24px;
        flex: 1;
        overflow-y: auto;
      }

      .form-instruction {
        margin: 0 0 20px 0;
        color: #666;
        font-size: 14px;
      }

      .edit-pm-room-type-grid {
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        margin-bottom: 24px;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        padding: 8px 12px;
        border-right: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-height: 40px;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        background: #f5f5f5;
        border-right: 1px solid #e0e0e0;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class EditPmRoomTypeDialogComponent implements OnInit {
  public modules = [AllCommunityModule];
  public formData: EditFormRowData[] = [];
  public gridOptions: GridOptions = {};
  public gridApi!: GridApi;

  private dialogRef = inject(MatDialogRef<EditPmRoomTypeDialogComponent>);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.initializeForm();
    this.setupGrid();
  }

  ngOnInit(): void {
    this.setupGrid();
  }

  onGridReady(): void {
    // Setup grid ready functionality
    this.setupEventListeners();
  }

  private initializeForm(): void {
    this.formData = [

      { field: 'Name the Room Type (English)', value: 'PM-1', type: 'text' },
      { field: 'Short Name', value: 'PM', type: 'text' },
      { field: 'Upload Image', value: '', type: 'file' },
      { field: 'Image Caption', value: 'This abbreviated form is used in many places to display the room. So please make sure that it is easy to remember.', type: 'textarea' },
      { field: 'Description (English)', value: 'Pay master room 1', type: 'textarea' },
      { field: 'Base Occupancy', value: 1, type: 'dropdown' },
      { field: 'Higher Occupancy', value: 2, type: 'dropdown' },
      { field: 'Extra bed allowed', value: false, type: 'checkbox' },
      { field: 'Number of Rooms of this Room Type', value: 6, type: 'number' },
      { field: 'Base Rate (List price)', value: 0, type: 'currency' },
      { field: 'Higher Price (Surcharge Per Additional Person)', value: 0, type: 'currency' },
      { field: 'Extra Bed Price', value: 0, type: 'currency' },
    ];
  }

  private setupGrid(): void {
    this.gridOptions = {
      rowHeight: 50,
      headerHeight: 40,
      suppressHorizontalScroll: true,
      suppressColumnVirtualisation: true,
      singleClickEdit: false,
      stopEditingWhenCellsLoseFocus: true,
      getRowHeight: (params: { data: EditFormRowData }) => {
        if (params.data && params.data.type) {
          switch (params.data.type) {
            case 'textarea':
              return 80;
            case 'file':
              return 50;
            default:
              return 50;
          }
        }
        return 50;
      },
    };
  }

  getColumnDefs(): ColDef[] {
    return [
      {
        headerName: 'Field',
        field: 'field',
        width: 400,
        editable: false,
        cellStyle: {
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '8px 12px',
          fontSize: '14px',
        },
      },
      {
        headerName: 'Value',
        field: 'value',
        width: 500,
        editable: false,
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '2px',
        },
        cellRenderer: (params: ICellRendererParams) => {
          const field = params.data.field;
          const type = params.data.type;
          const value = params.data.value;

          switch (type) {
            case 'text':
              return `<input type="text" value="${value}" placeholder="${field.includes('English') ? 'Enter English name' : field.includes('French') ? 'Enter French name' : 'Enter ' + field.toLowerCase()}" 
                style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white;"
                onchange="this.dispatchEvent(new CustomEvent('valueChanged', { 
                  detail: { field: '${field}', value: this.value, type: '${type}' }, 
                  bubbles: true 
                }))"
              >`;

            case 'file':
              return `<div style="display: flex; align-items: center; gap: 8px; width: 100%;">
                <button style="background: #f0f0f0; border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">Choose File</button>
                <span style="font-size: 12px; color: #666;">No file chosen</span>
              </div>`;

            case 'textarea':
              return `<textarea placeholder="${field.includes('Caption') ? 'Enter image caption...' : 'Enter description...'}" style="width: 100%; height: 60px; border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; resize: none; box-sizing: border-box; font-size: 13px; outline: none; background: white; font-family: inherit;"
                onchange="this.dispatchEvent(new CustomEvent('valueChanged', { 
                  detail: { field: '${field}', value: this.value, type: '${type}' }, 
                  bubbles: true 
                }))"
              >${value}</textarea>`;

            case 'dropdown':
              if (field.includes('Base Occupancy') || field.includes('Higher Occupancy')) {
                return `<select style="width: 100%; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white; cursor: pointer;"
                  onchange="this.dispatchEvent(new CustomEvent('valueChanged', { 
                    detail: { field: '${field}', value: parseInt(this.value), type: '${type}' }, 
                    bubbles: true 
                  }))">
                  <option value="1" ${value === 1 ? 'selected' : ''}>1 Persons</option>
                  <option value="2" ${value === 2 ? 'selected' : ''}>2 Persons</option>
                  <option value="3" ${value === 3 ? 'selected' : ''}>3 Persons</option>
                  <option value="4" ${value === 4 ? 'selected' : ''}>4 Persons</option>
                  <option value="5" ${value === 5 ? 'selected' : ''}>5 Persons</option>
                  <option value="6" ${value === 6 ? 'selected' : ''}>6 Persons</option>
                </select>`;
              }
              break;

            case 'checkbox':
              return `<label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" ${value ? 'checked' : ''} style="margin: 0;"
                  onchange="this.dispatchEvent(new CustomEvent('valueChanged', { 
                    detail: { field: '${field}', value: this.checked, type: '${type}' }, 
                    bubbles: true 
                  }))">
                <span style="font-size: 13px;">Yes</span>
              </label>`;

            case 'number':
              return `<input type="number" value="${value}" min="0" 
                style="width: 80px; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white;"
                onchange="this.dispatchEvent(new CustomEvent('valueChanged', { 
                  detail: { field: '${field}', value: parseInt(this.value) || 0, type: '${type}' }, 
                  bubbles: true 
                }))"
              >`;

            case 'currency':
              return `<div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 13px;">Rs.</span>
                <input type="number" value="${value}" min="0" step="0.01"
                  style="width: 80px; height: 100%; border: 1px solid #ccc; padding: 2px 8px; border-radius: 4px; box-sizing: border-box; font-size: 13px; outline: none; background: white;"
                  onchange="this.dispatchEvent(new CustomEvent('valueChanged', { 
                    detail: { field: '${field}', value: parseFloat(this.value) || 0, type: '${type}' }, 
                    bubbles: true 
                  }))">
                <span style="font-size: 12px; color: #666;">per person</span>
              </div>`;

            default:
              return value || '';
          }
        },
      },
    ];
  }

  private setupEventListeners(): void {
    setTimeout(() => {
      const gridElement = document.querySelector('.edit-pm-room-type-grid');
      if (gridElement) {
        gridElement.addEventListener('valueChanged', (event: Event) => {
          const customEvent = event as CustomEvent;
          const { field, value, type } = customEvent.detail;
          this.updateFormValue(field, value, type);
        });
      }
    }, 100);
  }

  private updateFormValue(field: string, value: unknown, type: string): void {
    const formItem = this.formData.find(item => item.field === field);
    if (formItem) {
      formItem.value = value as string | number | boolean;
    }
    console.log('Updated form value:', { field, value, type });
  }

  save(): void {
    console.log('Saving PM Room Type data:', this.formData);
    this.snackBar.open('PM Room Type saved successfully!', 'Close', { 
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.dialogRef.close({ action: 'save', data: this.formData });
  }

  cancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }
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
    MatSnackBarModule,
    MatDialogModule,
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
              (click)="editPmRoomType()"
            >
              <mat-icon class="button-icon">edit</mat-icon>
              Edit Pm Room Type
            </button>
            <button
              mat-raised-button
              class="action-button primary"
              (click)="addNewRoomType()"
            >
              <mat-icon class="button-icon">add</mat-icon>
              Add a Room Type
            </button>
            <button
              mat-raised-button
              class="action-button danger"
              (click)="deleteSelectedRoomTypes()"
            >
              <mat-icon class="button-icon">delete</mat-icon>
              Delete Selected Room Type(s)
            </button>
            <button
              mat-raised-button
              class="action-button"
              (click)="saveSortOrder()"
            >
              <mat-icon class="button-icon">sort</mat-icon>
              Save Sort Order
            </button>
            <button mat-stroked-button class="action-button" (click)="cancel()">
              <mat-icon class="button-icon">cancel</mat-icon>
              Cancel
            </button>
          </div>
        </div>

        <div class="grid-section">
          <div class="subsection">
            <ag-grid-angular
              class="room-types-grid ag-theme-material"
              [gridOptions]="gridOptions"
              [rowData]="roomTypes"
              [columnDefs]="getColumnDefs()"
              [modules]="modules"
              [domLayout]="'autoHeight'"
              [suppressHorizontalScroll]="true"
              [suppressColumnVirtualisation]="true"
              (gridReady)="onGridReady($event)"
              (gridSizeChanged)="onGridSizeChanged($event)"
              style="width: 100%; height: auto; min-height: 200px; max-width: 1200px; overflow-x: auto;"
            >
            </ag-grid-angular>

            <!-- Bottom Actions -->
            <div
              class="grid-footer-actions"
              style="margin-top: 16px; display: flex; gap: 12px; align-items: center; justify-content: flex-start;"
            >
              <button
                mat-raised-button
                color="primary"
                class="save-changes-btn"
                (click)="saveChanges()"
                style="font-weight: 500; padding: 8px 24px;"
              >
                <mat-icon>save</mat-icon>
                Save Changes
              </button>

              <button
                mat-raised-button
                class="reload-data-btn"
                (click)="reloadData()"
                style="font-weight: 500; padding: 8px 24px; background: #f3f4f6; color: #374151;"
              >
                <mat-icon>refresh</mat-icon>
                Reload Data
              </button>
            </div>
          </div>
        </div>

        <!-- Footer Note -->
        <div class="footer-note"
          style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 16px; background: #e3f2fd; border: 1px solid #1976d2; border-radius: 8px; color: #1565c0; font-style: italic; margin-top: 32px;"
        >
          <mat-icon class="note-icon">info</mat-icon>
          <span>Click "Show" in the Rooms column to expand and view individual rooms in hierarchical format</span>
        </div>
      </div>

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
        background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 32px;
        box-shadow: 0 8px 32px rgba(25, 118, 210, 0.15);
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
        align-items: flex-start;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 2px solid #e5e7eb;
        flex-wrap: wrap;
        gap: 16px;
      }

      .grid-title {
        font-size: 24px;
        font-weight: 600;
        color: #1f2937;
        margin: 0;
      }

      .grid-actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        align-items: center;
      }

      .action-button {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        transition: all 0.2s ease;
        white-space: nowrap;
        min-width: 180px;
        padding: 10px 20px;
        font-size: 10px !important;
        font-weight: 500;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .action-button:hover {
        background: #e9ecef;
        transform: translateY(-1px);
      }

      .action-button.primary {
        background: #1976d2;
        color: white;
        border-color: #1976d2;
        min-width: 180px;
      }

      .action-button.primary:hover {
        background: #1565c0;
      }

      .action-button.danger {
        background: #dc2626;
        color: white;
        border-color: #dc2626;
        min-width: 280px;
      }

      .action-button.danger:hover {
        background: #b91c1c;
        border-color: #b91c1c;
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

      /* Outbox Status Section */
      .outbox-section {
        background: white;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 24px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e5e7eb;
      }

      .outbox-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        flex-wrap: wrap;
        gap: 12px;
      }

      .outbox-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #374151;
      }

      .outbox-icon {
        color: #6366f1;
      }

      .outbox-actions {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
      }

      .sync-button {
        background: #6366f1;
        color: white;
        border: none;
      }

      .sync-button:hover:not(:disabled) {
        background: #4f46e5;
      }

      .sync-button:disabled {
        background: #9ca3af;
      }

      .clear-button, .retry-button {
        border: 1px solid #d1d5db;
        color: #374151;
      }

      .clear-button:hover:not(:disabled) {
        background: #f3f4f6;
      }

      .retry-button:hover:not(:disabled) {
        background: #fef3c7;
        border-color: #f59e0b;
      }

      .outbox-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
      }

      .stat-card {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        background: #fafafa;
      }

      .stat-card.total {
        border-color: #6b7280;
        background: #f9fafb;
      }

      .stat-card.total mat-icon {
        color: #6b7280;
      }

      .stat-card.pending {
        border-color: #f59e0b;
        background: #fffbeb;
      }

      .stat-card.pending mat-icon {
        color: #f59e0b;
      }

      .stat-card.failed {
        border-color: #ef4444;
        background: #fef2f2;
      }

      .stat-card.failed mat-icon {
        color: #ef4444;
      }

      .stat-card.synced {
        border-color: #10b981;
        background: #f0fdf4;
      }

      .stat-card.synced mat-icon {
        color: #10b981;
      }

      .stat-content {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .stat-number {
        font-size: 24px;
        font-weight: 700;
        line-height: 1;
      }

      .stat-label {
        font-size: 12px;
        color: #6b7280;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
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
        --ag-font-size: 13px;
        --ag-row-height: 40px;
        --ag-header-height: 60px;
        --ag-list-item-height: 40px;
      }

      ::ng-deep .ag-theme-material .ag-header {
        font-weight: 600;
        background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
        border-bottom: 2px solid #1976d2;
        height: 60px;
        min-height: 60px;
        max-height: 60px;
      }

      ::ng-deep .ag-theme-material .ag-header-group-cell {
        background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
        border-right: 1px solid #e5e7eb;
        border-bottom: 1px solid #e5e7eb;
        padding: 2px 4px;
        font-weight: 600;
        color: #374151;
        text-align: center;
        height: 30px;
        line-height: 1.1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 9px;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        border-right: 1px solid #e5e7eb;
        padding: 2px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        line-height: 1.1;
        font-size: 9px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      ::ng-deep .ag-theme-material .ag-header-cell-label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        text-align: center;
        font-size: 9px;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        border-bottom: 1px solid #f3f4f6;
        border-right: 1px solid #f3f4f6;
        padding: 4px 8px;
        line-height: 1.2;
        height: 40px;
        min-height: 40px;
        max-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 13px;
      }

      ::ng-deep .ag-theme-material .ag-row {
        transition: background-color 0.2s ease;
        height: 40px;
        min-height: 40px;
        max-height: 40px;
        border-bottom: 1px solid #e5e7eb;
      }

      ::ng-deep .ag-theme-material .ag-row:hover {
        background-color: #f8fafc !important;
      }

      /* Occupancy header group styling */
      ::ng-deep .ag-theme-material .occupancy-header {
        background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
        font-weight: 700;
        text-align: center;
        border: 1px solid #e5e7eb;
      }

      /* Center align all headers */
      ::ng-deep .ag-theme-material .center-header {
        text-align: center !important;
        justify-content: center !important;
      }

      ::ng-deep .ag-theme-material .ag-header-cell-text {
        text-align: center !important;
      }

      /* Add New Room Type Section */
      .add-room-type-section {
        text-align: center;
        margin: 24px 0;
      }

      .add-button {
        background: linear-gradient(135deg, #1976d2, #42a5f5);
        color: white;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        box-shadow: 0 4px 16px rgba(25, 118, 210, 0.3);
        transition: all 0.3s ease;
      }

      .add-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(25, 118, 210, 0.4);
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
        background: linear-gradient(135deg, #1976d2, #42a5f5);
        color: white;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        box-shadow: 0 4px 16px rgba(25, 118, 210, 0.3);
        transition: all 0.3s ease;
      }

      .primary-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(25, 118, 210, 0.4);
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
        border-color: #1976d2;
        color: #1976d2;
        transform: translateY(-1px);
      }

      .save-button {
        background: linear-gradient(135deg, #1976d2, #42a5f5);
        color: white;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        box-shadow: 0 4px 16px rgba(25, 118, 210, 0.3);
        transition: all 0.3s ease;
      }

      .save-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(25, 118, 210, 0.4);
      }

      .add-button {
        background: linear-gradient(135deg, #388e3c, #66bb6a);
        color: white;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        box-shadow: 0 4px 16px rgba(56, 142, 60, 0.3);
        transition: all 0.3s ease;
      }

      .add-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(56, 142, 60, 0.4);
      }

      .cancel-button {
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: 2px solid #6b7280;
        color: #6b7280;
        background: white;
        transition: all 0.3s ease;
      }

      .cancel-button:hover {
        border-color: #374151;
        color: #374151;
        transform: translateY(-1px);
      }

      .button-icon {
        margin-right: 6px;
        font-size: 16px;
        width: 16px;
        height: 16px;
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
        background: #e3f2fd;
        border: 1px solid #1976d2;
        border-radius: 8px;
        color: #1565c0;
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

        .grid-actions {
          width: 100%;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        .action-button {
          flex: 1;
          min-width: 160px;
          max-width: 280px;
          text-align: center;
          margin-bottom: 8px;
        }

        .action-button.danger {
          min-width: 240px;
          max-width: 300px;
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
  // AG Grid modules
  public modules = [AllCommunityModule];

  // AG Grid configuration
  gridOptions = {
    theme: 'legacy' as const,
    rowHeight: 40,
    headerHeight: 60,
    modules: this.modules,
    rowSelection: 'multiple' as const,
    suppressRowClickSelection: true,
    enableCellTextSelection: true,
    groupDefaultExpanded: 0,
    groupUseEntireRow: false,
    enableGroupEdit: false,
    suppressAggFuncInHeader: true,
    groupSelectsChildren: false,
    suppressGroupSelectsChildren: true,
    autoSizeStrategy: {
      type: 'fitCellContents' as const,
      skipHeader: false,
      defaultMinWidth: 100,
      columnLimits: [
        {
          colId: 'checkbox',
          minWidth: 30,
          maxWidth: 30
        },
        {
          colId: 'index',
          minWidth: 40,
          maxWidth: 60
        },
        {
          colId: 'image',
          minWidth: 80,
          maxWidth: 120
        },
        {
          colId: 'rooms',
          minWidth: 110,
          maxWidth: 110
        }
      ]
    },
    getRowId: (params: {data: ExpandableRoomTypeRow}) => {
      return params.data.id || params.data.index?.toString() || '';
    },
    isExternalFilterPresent: () => false,
    doesExternalFilterPass: () => true,
    getDataPath: (data: ExpandableRoomTypeRow) => {
      // Create hierarchical path for nested rows
      if (data.parentId) {
        return [data.parentId, data.id];
      }
      return [data.id];
    },
    treeData: true,
    animateRows: true,
    getChildCount: (data: ExpandableRoomTypeRow) => {
      if (data && data.children && Array.isArray(data.children)) {
        return data.children.length;
      }
      return 0;
    },
    context: {
      componentParent: this
    },
    components: {
      expandableCellRenderer: ExpandableCellRenderer,
    },
    defaultColDef: {
      sortable: true,
      filter: false,
      resizable: false,
      editable: false,
      suppressMovable: true,
      suppressMenu: true,
      width: 100,
      cellStyle: (params: CellClassParams) => {
        const style: Record<string, string> = {
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        };
        
        // Add indentation based on row level
        if (params.data && params.data.level) {
          style['paddingLeft'] = `${params.data.level * 20}px`;
        }
        
        return style;
      },
      headerClass: 'center-header',
    },
    columnDefs: this.getColumnDefs(),
    rowData: [] as ExpandableRoomTypeRow[],
    singleClickEdit: true,
    stopEditingWhenCellsLoseFocus: true,
    suppressHorizontalScroll: true,
    onCellValueChanged: (event: CellValueChangedEvent) =>
      this.onCellValueChanged(event),
    getRowStyle: (params: RowClassParams) => {
      const style: Record<string, string> = {};
      
      if (params.data) {
        // Different background colors for different row types
        switch (params.data.rowType) {
          case 'roomType':
            style['background'] = params.node.rowIndex! % 2 === 0 ? '#ffffff' : '#f9fafb';
            style['fontWeight'] = '600';
            style['border-bottom'] = '1px solid #e5e7eb';
            break;
          case 'rooms':
            style['background'] = '#f0f9ff';
            style['border-left'] = '4px solid #3b82f6';
            style['padding-left'] = '16px';
            style['font-size'] = '12px';
            style['color'] = '#1e40af';
            break;
          case 'amenities':
            style['background'] = '#f0fdf4';
            style['border-left'] = '4px solid #10b981';
            style['padding-left'] = '16px';
            break;
          case 'form':
          case 'editForm':
            style['background'] = '#fffbeb';
            style['border'] = '2px dashed #d97706';
            break;
          default:
            style['background'] = params.node.rowIndex! % 2 === 0 ? '#ffffff' : '#f9fafb';
        }
        
        // Add indentation for child rows
        if (params.data.level && params.data.level > 0) {
          style['padding-left'] = `${params.data.level * 20 + 16}px`;
        }
      }
      
      return style;
    },
  };

  // Data
  roomTypes: ExpandableRoomTypeRow[] = [];
  rooms: RoomData[] = [];

  // Grid API references
  gridApi!: GridApi;
  roomsGridApi!: GridApi;

  // Loading states
  isLoading = false;
  isSaving = false;

  // Rooms grid state
  showRoomsGrid = false;
  selectedRoomType: ExpandableRoomTypeRow | null = null;
  roomsGridData: InlineRoomData[] = [];
  gridData: ExpandableRoomTypeRow[] = [];
  roomsGridOptions: GridOptions = {};

  // Edit form state
  showEditForm = false;
  selectedEditRoomType: ExpandableRoomTypeRow | null = null;
  editFormData: EditFormRowData[] = [];

  // Services
  private storageService = inject(StorageService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadData();
    this.setupRoomsGrid();
  }

  getColumnDefs(): (ColDef | ColGroupDef)[] {
    return [
      {
        headerName: '',
        field: 'checkbox',
        width: 30,
        editable: false,
        checkboxSelection: (params: CheckboxSelectionCallbackParams) => {
          return params.data && params.data.rowType === 'roomType';
        },
        headerCheckboxSelection: true,
        suppressSizeToFit: true,
        cellStyle: { textAlign: 'center' },
      },
      {
        headerName: '#',
        field: 'index',
        width: 40,
        editable: false,
        suppressSizeToFit: true,
        cellStyle: { textAlign: 'center' },
      },
      {
        headerName: 'Image',
        field: 'image',
        width: 80,
        editable: false,
        cellRenderer: () => {
          return `<div style="
            width: 50px; 
            height: 30px; 
            background: #f0f0f0; 
            border: 1px solid #ccc; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 13px; 
            color: #666;
            border-radius: 4px;
            margin: 2px auto;
          ">Image N/A</div>`;
        },
        suppressSizeToFit: true,
      },
      {
        headerName: 'Room Type',
        field: 'roomType',
        width: 110,
        editable: (params: EditableCallbackParams) => {
          return params.data && (params.data.rowType === 'roomType' || params.data.rowType === 'editForm');
        },
        cellRenderer: (params: ICellRendererParams) => {
          if (params.data && params.data.rowType === 'editForm') {
            return `<input type="text" value="${params.value || ''}" style="width: 100%; border: 1px solid #ddd; padding: 4px;" />`;
          }
          return params.value || '';
        },
        cellEditor: 'agTextCellEditor',
        cellEditorParams: {
          maxLength: 50,
        },
        suppressSizeToFit: true,
      },
      {
        headerName: 'Occupancy',
        headerClass: 'occupancy-header',
        children: [
          {
            headerName: 'Base',
            field: 'baseOccupancy',
            width: 55,
            editable: (params: EditableCallbackParams) => {
              return params.data && (params.data.rowType === 'roomType' || params.data.rowType === 'editForm');
            },
            cellRenderer: (params: ICellRendererParams) => {
              if (params.data && params.data.rowType === 'editForm') {
                return `<input type="number" value="${params.value || 1}" min="1" style="width: 100%; border: 1px solid #ddd; padding: 4px;" />`;
              }
              return params.value || '';
            },
            cellEditor: 'agTextCellEditor',
            valueParser: (params: ValueParserParams) => {
              const value = parseInt(params.newValue);
              return isNaN(value) ? 1 : Math.max(1, value);
            },
            suppressSizeToFit: true,
          },
          {
            headerName: 'Max',
            field: 'maxOccupancy',
            width: 55,
            editable: (params: EditableCallbackParams) => {
              return params.data && (params.data.rowType === 'roomType' || params.data.rowType === 'editForm');
            },
            cellRenderer: (params: ICellRendererParams) => {
              if (params.data && params.data.rowType === 'editForm') {
                return `<input type="number" value="${params.value || 1}" min="1" style="width: 100%; border: 1px solid #ddd; padding: 4px;" />`;
              }
              return params.value || '';
            },
            cellEditor: 'agTextCellEditor',
            valueParser: (params: ValueParserParams) => {
              const value = parseInt(params.newValue);
              return isNaN(value) ? 1 : Math.max(1, value);
            },
            suppressSizeToFit: true,
          },
          {
            headerName: 'Adult',
            field: 'adult',
            width: 55,
            editable: (params: EditableCallbackParams) => {
              return params.data && (params.data.rowType === 'roomType' || params.data.rowType === 'editForm');
            },
            cellRenderer: (params: ICellRendererParams) => {
              if (params.data && params.data.rowType === 'editForm') {
                return `<input type="number" value="${params.value || 1}" min="1" style="width: 100%; border: 1px solid #ddd; padding: 4px;" />`;
              }
              return params.value || '';
            },
            cellEditor: 'agTextCellEditor',
            valueParser: (params: ValueParserParams) => {
              const value = parseInt(params.newValue);
              return isNaN(value) ? 1 : Math.max(1, value);
            },
            suppressSizeToFit: true,
          },
          {
            headerName: 'Child',
            field: 'child',
            width: 55,
            editable: (params: EditableCallbackParams) => {
              return params.data && (params.data.rowType === 'roomType' || params.data.rowType === 'editForm');
            },
            cellRenderer: (params: ICellRendererParams) => {
              if (params.data && params.data.rowType === 'editForm') {
                return `<input type="number" value="${params.value || 0}" min="0" style="width: 100%; border: 1px solid #ddd; padding: 4px;" />`;
              }
              return params.value || '';
            },
            cellEditor: 'agTextCellEditor',
            valueParser: (params: ValueParserParams) => {
              const value = parseInt(params.newValue);
              return isNaN(value) ? 0 : Math.max(0, value);
            },
            suppressSizeToFit: true,
          },
        ],
      } as ColGroupDef,
      {
        headerName: 'Rooms',
        field: 'rooms',
        width: 110,
        editable: false,
        cellRenderer: (params: ICellRendererParams) => {
          const roomCount = params.data.rooms ? params.data.rooms.length : 0;
          const isThisRoomTypeSelected = this.selectedRoomType?.id === params.data.id;
          return `
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; gap: 8px;">
            <span style="font-size: 11px; color: #374151; font-weight: 500;">
              ${roomCount > 0 ? `${roomCount} Rooms` : 'No Rooms'}
            </span>
            <span 
              class="expand-rooms-link"
              style="
                font-size: 11px; 
                color: ${isThisRoomTypeSelected ? '#d97706' : '#1d4ed8'}; 
                cursor: pointer;
                font-weight: 500;
                text-decoration: underline;
                white-space: nowrap;
              "
              onmouseover="this.style.color='${isThisRoomTypeSelected ? '#b45309' : '#1e40af'}'"
              onmouseout="this.style.color='${isThisRoomTypeSelected ? '#d97706' : '#1d4ed8'}'"
              onclick="
                console.log('Rooms link clicked for ID:', '${params.data.id}'); 
                const event = new CustomEvent('toggleRooms', { 
                  detail: { id: '${params.data.id}', rowIndex: ${params.node.rowIndex}, nodeId: '${params.node.id}' }, 
                  bubbles: true 
                });
                this.dispatchEvent(event);
              "
            >
              ${isThisRoomTypeSelected ? 'Hide' : (roomCount > 0 ? 'Show' : 'Add')}
            </span>
          </div>`;
        },
        suppressSizeToFit: true,
      },
      {
        headerName: 'Extra Bed Allowed',
        field: 'extraBedAllowed',
        width: 100,
        editable: true,
        cellRenderer: (params: ICellRendererParams) => {
          return `<span style="font-size: 13px;">${params.value ? '1' : '-'}</span>`;
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['1', '-'],
        },
        valueParser: (params: ValueParserParams) => {
          return params.newValue === '1';
        },
        suppressSizeToFit: true,
      },
      {
        headerName: 'Action',
        field: 'action',
        width: 130,
        editable: false,
        cellRenderer: (params: ICellRendererParams) => {
          return `
            <div style="display: flex; gap: 4px; align-items: center;">
              <button 
                style="
                  background: #e8f5e8; 
                  color: #4caf50; 
                  border: none; 
                  border-radius: 4px; 
                  padding: 4px 8px; 
                  cursor: pointer;
                  font-size: 11px;
                  transition: all 0.2s ease;
                  white-space: nowrap;
                "
                onmouseover="this.style.background='#c8e6c9'"
                onmouseout="this.style.background='#e8f5e8'"
                onclick="this.dispatchEvent(new CustomEvent('editRoomType', { 
                  detail: { id: '${params.data.id}' }, 
                  bubbles: true 
                }))"
              >
                Edit
              </button>
              <button 
                style="
                  background: #dbeafe; 
                  color: #1d4ed8; 
                  border: none; 
                  border-radius: 4px; 
                  padding: 4px 8px; 
                  cursor: pointer;
                  font-size: 11px;
                  transition: all 0.2s ease;
                  white-space: nowrap;
                "
                onmouseover="this.style.background='#bfdbfe'"
                onmouseout="this.style.background='#dbeafe'"
                onclick="this.dispatchEvent(new CustomEvent('sortAmenities', { 
                  detail: { id: '${params.data.id}' }, 
                  bubbles: true 
                }))"
              >
                Sort Amenities
              </button>
            </div>
          `;
        },
        suppressSizeToFit: true,
      },
      {
        headerName: 'Status',
        field: 'status',
        width: 60,
        editable: true,
        cellRenderer: (params: ICellRendererParams) => {
          const isActive = params.value === 'active' || params.value === '1';
          if (isActive) {
            return `<span style="color: #16a34a; font-size: 18px; display: flex; justify-content: center; align-items: center; height: 100%;">✓</span>`;
          }
          return `<span style="color: #dc2626; font-size: 18px; display: flex; justify-content: center; align-items: center; height: 100%;">✗</span>`;
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['active', 'inactive'],
        },
        suppressSizeToFit: true,
      },
      {
        headerName: 'Sort Order',
        field: 'sortOrder',
        width: 55,
        editable: true,
        cellRenderer: (params: ICellRendererParams) => {
          return `<input type="text" value="${params.value || 0}" style="
            width: 50px; 
            border: 1px solid #d1d5db; 
            border-radius: 4px; 
            padding: 4px 6px; 
            text-align: center;
            background: white;
            font-size: 13px;
            margin: 2px auto;
            display: block;
          ">`;
        },
        cellEditor: 'agTextCellEditor',
        valueParser: (params: ValueParserParams) => {
          const value = parseInt(params.newValue);
          return isNaN(value) ? 0 : value;
        },
        suppressSizeToFit: true,
      },
    ];
  }

  onCellValueChanged(event: CellValueChangedEvent): void {
    const updatedRoomType = event.data;
    this.updateRoomType(updatedRoomType);
  }

  loadData(): void {
    this.isLoading = true;

    console.log('🔄 Loading room types data from storage...');

    // Load room types from storage
    const savedRoomTypes = this.storageService.getRoomTypes();

    console.log('📊 Room Types loaded from storage:', {
      count: savedRoomTypes.length,
      data:
        savedRoomTypes.length > 0 ? 'Found existing data' : 'No existing data',
    });

    // Create sample data if no data exists in storage
    if (savedRoomTypes.length === 0) {
      console.log('🔧 Creating sample room types data...');
      const sampleRoomTypes: DBRoomType[] = [
        {
          id: 1,
          hotelid: 1,
          title: 'Deluxe Room',
          accronym: 'DLX',
          noofrooms: 25,
          image: '',
          description: 'Luxurious deluxe room with modern amenities',
          isoverbookingalwd: 1,
          overbookingvalue: 10,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          stdoccupancy: 2,
          higheroccupancy: 4,
          maxadult: 3,
          maxchild: 2,
          isbedalwd: 1,
          xtralwdbeds: 2,
          taxapplicableon: 'room',
          shortorder: 1,
          createdby: 1,
          status: 'active',
          modifiedby: 1,
          publishonweb: 1,
          roomtypename: 'Deluxe Room',
        },
        {
          id: 2,
          hotelid: 1,
          title: 'Standard Room',
          accronym: 'STD',
          noofrooms: 30,
          image: '',
          description: 'Comfortable standard room with basic amenities',
          isoverbookingalwd: 1,
          overbookingvalue: 5,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          stdoccupancy: 2,
          higheroccupancy: 3,
          maxadult: 2,
          maxchild: 1,
          isbedalwd: 1,
          xtralwdbeds: 1,
          taxapplicableon: 'room',
          shortorder: 2,
          createdby: 1,
          status: 'active',
          modifiedby: 1,
          publishonweb: 1,
          roomtypename: 'Standard Room',
        },
        {
          id: 3,
          hotelid: 1,
          title: 'Suite',
          accronym: 'STE',
          noofrooms: 10,
          image: '',
          description: 'Premium suite with separate living area',
          isoverbookingalwd: 0,
          overbookingvalue: 0,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          stdoccupancy: 2,
          higheroccupancy: 6,
          maxadult: 4,
          maxchild: 2,
          isbedalwd: 1,
          xtralwdbeds: 3,
          taxapplicableon: 'room',
          shortorder: 3,
          createdby: 1,
          status: 'active',
          modifiedby: 1,
          publishonweb: 1,
          roomtypename: 'Suite',
        },
        {
          id: 4,
          hotelid: 1,
          title: 'Executive Room',
          accronym: 'EXE',
          noofrooms: 15,
          image: '',
          description: 'Executive room with business amenities',
          isoverbookingalwd: 1,
          overbookingvalue: 8,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          stdoccupancy: 1,
          higheroccupancy: 3,
          maxadult: 2,
          maxchild: 1,
          isbedalwd: 1,
          xtralwdbeds: 1,
          taxapplicableon: 'room',
          shortorder: 4,
          createdby: 1,
          status: 'active',
          modifiedby: 1,
          publishonweb: 1,
          roomtypename: 'Executive Room',
        },
        {
          id: 5,
          hotelid: 1,
          title: 'Family Room',
          accronym: 'FAM',
          noofrooms: 12,
          image: '',
          description: 'Spacious family room for large groups',
          isoverbookingalwd: 1,
          overbookingvalue: 15,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          stdoccupancy: 4,
          higheroccupancy: 8,
          maxadult: 6,
          maxchild: 4,
          isbedalwd: 1,
          xtralwdbeds: 4,
          taxapplicableon: 'room',
          shortorder: 5,
          createdby: 1,
          status: 'active',
          modifiedby: 1,
          publishonweb: 1,
          roomtypename: 'Family Room',
        },
        {
          id: 6,
          hotelid: 1,
          title: 'Premium Deluxe',
          accronym: 'PDX',
          noofrooms: 8,
          image: '',
          description: 'Premium deluxe room with city view',
          isoverbookingalwd: 0,
          overbookingvalue: 0,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          stdoccupancy: 2,
          higheroccupancy: 4,
          maxadult: 3,
          maxchild: 2,
          isbedalwd: 1,
          xtralwdbeds: 2,
          taxapplicableon: 'room',
          shortorder: 6,
          createdby: 1,
          status: 'active',
          modifiedby: 1,
          publishonweb: 1,
          roomtypename: 'Premium Deluxe',
        },
        {
          id: 7,
          hotelid: 1,
          title: 'Budget Room',
          accronym: 'BDG',
          noofrooms: 20,
          image: '',
          description: 'Affordable budget room with essential amenities',
          isoverbookingalwd: 1,
          overbookingvalue: 20,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          stdoccupancy: 1,
          higheroccupancy: 2,
          maxadult: 2,
          maxchild: 0,
          isbedalwd: 0,
          xtralwdbeds: 0,
          taxapplicableon: 'room',
          shortorder: 7,
          createdby: 1,
          status: 'active',
          modifiedby: 1,
          publishonweb: 1,
          roomtypename: 'Budget Room',
        },
        {
          id: 8,
          hotelid: 1,
          title: 'Presidential Suite',
          accronym: 'PRS',
          noofrooms: 2,
          image: '',
          description: 'Luxury presidential suite with premium services',
          isoverbookingalwd: 0,
          overbookingvalue: 0,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          stdoccupancy: 2,
          higheroccupancy: 8,
          maxadult: 6,
          maxchild: 4,
          isbedalwd: 1,
          xtralwdbeds: 5,
          taxapplicableon: 'room',
          shortorder: 8,
          createdby: 1,
          status: 'active',
          modifiedby: 1,
          publishonweb: 1,
          roomtypename: 'Presidential Suite',
        },
      ];

      // Save sample data to storage - skip conversion for now
      const currentData = this.storageService.getSnapshot();
      // currentData.roomTypes = sampleRoomTypes.map(rt => convertToRoomType(rt));
      localStorage.setItem('hotel-admin-data', JSON.stringify(currentData));

      console.log(
        '✅ Sample room types created and saved:',
        sampleRoomTypes.length,
      );

      // Use sample data directly since they are already DBRoomType
      this.roomTypes = sampleRoomTypes.map((rt: DBRoomType, index: number) => this.convertToRoomTypeRow(rt, index));
    } else {
      console.log('✅ Using existing room types from storage');
      // Use existing data from storage - skip conversion for now
      // const dbRoomTypes = savedRoomTypes.map(rt => convertToDBRoomType(rt));
      // For now, assume savedRoomTypes are already in DBRoomType format
      this.roomTypes = (savedRoomTypes as unknown as DBRoomType[]).map((rt: DBRoomType, index: number) => this.convertToRoomTypeRow(rt, index));
    }

    // Load rooms from storage
    this.rooms = ((this.storageService.getRooms() as unknown) ||
      []) as RoomData[];

    console.log('📊 Rooms loaded from storage:', this.rooms.length);

    // Update grid data - use hierarchical structure
    this.updateHierarchicalGridData();

    console.log('✅ Room types data loading complete:', {
      roomTypes: this.roomTypes.length,
      rooms: this.rooms.length,
    });

    this.isLoading = false;
  }

  // Setup separate rooms grid configuration
  private setupRoomsGrid(): void {
    this.roomsGridOptions = {
      rowHeight: 35,
      headerHeight: 40,
      defaultColDef: {
        resizable: true,
        sortable: false,
        filter: false,
        editable: true,
      },
      singleClickEdit: true,
      stopEditingWhenCellsLoseFocus: true,
      suppressHorizontalScroll: true,
      animateRows: true,
    };
  }

  // Generate child edit form rows for hierarchical display
  private generateEditFormRows(roomType: ExpandableRoomTypeRow): ExpandableRoomTypeRow[] {
    const editFormRows: ExpandableRoomTypeRow[] = [];
    
    // Create edit form fields based on room type data
    const formFields = [
      { field: 'Room Type Name', value: roomType.roomType || '', type: 'text' },
      { field: 'Base Occupancy', value: roomType.baseOccupancy || 1, type: 'number' },
      { field: 'Max Occupancy', value: roomType.maxOccupancy || 2, type: 'number' },
      { field: 'Max Adults', value: roomType.adult || 1, type: 'number' },
      { field: 'Max Children', value: roomType.child || 0, type: 'number' },
      { field: 'Extra Bed Allowed', value: roomType.extraBedAllowed || false, type: 'checkbox' },
      { field: 'Status', value: roomType.status || 'active', type: 'dropdown', options: ['active', 'inactive'] },
      { field: 'Sort Order', value: roomType.sortOrder || 0, type: 'number' }
    ];
    
    // Convert form fields to hierarchical rows
    formFields.forEach((fieldData, index) => {
      editFormRows.push({
        id: `${roomType.id}_edit_${index}`,
        index: `E${index + 1}`,
        parentId: roomType.id,
        level: 1,
        rowType: 'editForm',
        isEditForm: true,
        roomType: fieldData.field,
        field: fieldData.field,
        value: fieldData.value,
        fieldType: fieldData.type as 'text' | 'file' | 'textarea' | 'dropdown' | 'checkbox' | 'number' | 'currency' | 'amenities' | 'taxes',
        options: fieldData.options,
        isExpandable: false,
        isExpanded: false,
        children: [],
        rooms: undefined,
        amenities: `Edit: ${fieldData.field}`,
        baseOccupancy: '',
        maxOccupancy: '',
        adult: '',
        child: '',
        actions: '',
        extraBedAllowed: false,
        status: 'active' as ModelStatus
      });
    });
    
    return editFormRows;
  }

  // Convert room types to hierarchical data structure
  private convertToHierarchicalData(roomTypes: ExpandableRoomTypeRow[]): ExpandableRoomTypeRow[] {
    const hierarchicalData: ExpandableRoomTypeRow[] = [];
    
    roomTypes.forEach(roomType => {
      // Add the main room type row
      hierarchicalData.push({
        ...roomType,
        level: 0,
        isExpandable: true,
        isExpanded: false,
        children: []
      });
      
      // If this room type is expanded, add its child rows
      if (this.selectedRoomType?.id === roomType.id && this.showRoomsGrid) {
        const childRooms = this.generateChildRoomRows(roomType);
        hierarchicalData.push(...childRooms);
      }
    });
    
    return hierarchicalData;
  }

  // Generate child room rows for hierarchical display
  private generateChildRoomRows(roomType: ExpandableRoomTypeRow): ExpandableRoomTypeRow[] {
    const childRows: ExpandableRoomTypeRow[] = [];
    let roomsData: InlineRoomData[] = [];
    
    if (Array.isArray(roomType.rooms)) {
      roomsData = [...roomType.rooms];
    } else {
      // Create sample room data if none exists
      const roomCount = parseInt(roomType.rooms?.toString() || '0');
      roomsData = Array(Math.max(roomCount, 1)).fill(null).map((_, index) => ({
        id: `room_${roomType.id}_${index + 1}`,
        roomNumber: roomCount > 0 ? `${roomType.roomType?.substring(0, 2).toUpperCase() || 'RM'}${String(index + 101).padStart(3, '0')}` : '',
        floor: roomCount > 0 ? ['Ground Floor', '1st Floor', '2nd Floor', '3rd Floor'][index % 4] : '',
        roomArea: roomCount > 0 ? ['Block A', 'Block B', 'East Wing', 'West Wing'][index % 4] : '',
        status: roomCount > 0 ? ['Available', 'Occupied', 'Maintenance'][index % 3] : 'Available',
        isNew: roomCount === 0 || index >= roomCount
      }));
    }
    
    // Convert rooms to hierarchical rows
    roomsData.forEach((room, index) => {
      childRows.push({
        id: `${roomType.id}_room_${index}`,
        index: `R${index + 1}`,
        parentId: roomType.id,
        level: 1,
        rowType: 'rooms',
        roomType: `Room: ${room.roomNumber || 'New Room'}`,
        roomNumber: room.roomNumber,
        floor: room.floor,
        block: room.roomArea,
        status: room.status as ModelStatus,
        isExpandable: false,
        isExpanded: false,
        children: [],
        rooms: undefined, // Clear rooms field for child rows
        amenities: `Floor: ${room.floor || 'None'} | Area: ${room.roomArea || 'None'}`,
        baseOccupancy: '',
        maxOccupancy: '',
        adult: '',
        child: '',
        actions: '',
        extraBedAllowed: false
      });
    });
    
    return childRows;
  }

  // Show rooms grid for a specific room type
  showRoomsGridForRoomType(roomType: ExpandableRoomTypeRow): void {
    this.selectedRoomType = roomType;
    this.showRoomsGrid = true;
    
    // Update the main grid data to include hierarchical structure
    this.updateHierarchicalGridData();
  }

  // Show edit form for room type in hierarchical format
  private showEditFormForRoomType(roomType: ExpandableRoomTypeRow): void {
    const roomTypeIndex = this.gridData.findIndex(
      (row) => row.id === roomType.id && row.level === 0
    );

    if (roomTypeIndex === -1) return;

    // Check if edit form is already expanded
    const isEditFormExpanded = this.gridData.some(
      (row, index) =>
        index > roomTypeIndex && 
        row.level === 1 && 
        row.isEditForm
    );

    if (isEditFormExpanded) {
      // Collapse edit form - remove all edit form rows for this room type
      this.gridData = this.gridData.filter(
        (row, index) =>
          !(index > roomTypeIndex && 
            row.level === 1 && 
            row.isEditForm &&
            row.parentId === roomType.id)
      );
      this.gridApi?.setGridOption('rowData', this.gridData);
      return;
    }

    // Generate edit form rows
    const editFormRows = this.generateEditFormRows(roomType);

    // Insert edit form rows after the room type
    this.gridData.splice(roomTypeIndex + 1, 0, ...editFormRows);
    this.gridApi?.setGridOption('rowData', this.gridData);

    // Auto-size columns to fit content
    this.gridApi?.autoSizeAllColumns();
  }
    
  // Update grid data with hierarchical structure
  private updateHierarchicalGridData(): void {
    const hierarchicalData = this.convertToHierarchicalData(this.roomTypes);
    this.gridData = hierarchicalData;
    this.gridOptions.rowData = hierarchicalData;
    
    if (this.gridApi) {
      this.gridApi.setGridOption('rowData', hierarchicalData);
      this.gridApi.refreshCells();
      
      // Auto-size columns to fit content
      setTimeout(() => {
        this.gridApi?.autoSizeAllColumns(false);
      }, 100);
    }
  }

  // Hide rooms grid
  hideRoomsGrid(): void {
    this.showRoomsGrid = false;
    this.selectedRoomType = null;
    this.roomsGridData = [];
    
    // Update the main grid to remove hierarchical structure
    this.updateHierarchicalGridData();
  }

  // Get column definitions for rooms grid
  getRoomsColumnDefs(): ColDef[] {
    return [
      {
        headerName: 'Room Number',
        field: 'roomNumber',
        width: 140,
        editable: true,
        cellStyle: { fontSize: '13px', padding: '4px 8px' }
      },
      {
        headerName: 'Floor',
        field: 'floor',
        width: 120,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Ground Floor', '1st Floor', '2nd Floor', '3rd Floor', '4th Floor', '5th Floor']
        },
        cellStyle: { fontSize: '13px', padding: '4px 8px' }
      },
      {
        headerName: 'Room Area/Block',
        field: 'roomArea',
        width: 140,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Block A', 'Block B', 'Block C', 'East Wing', 'West Wing', 'North Wing', 'South Wing']
        },
        cellStyle: { fontSize: '13px', padding: '4px 8px' }
      },
      {
        headerName: 'Status',
        field: 'status',
        width: 120,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Available', 'Occupied', 'Out of Order', 'Maintenance']
        },
        cellStyle: { fontSize: '13px', padding: '4px 8px' }
      },
      {
        headerName: 'Actions',
        field: 'actions',
        width: 120,
        editable: false,
        cellRenderer: (params: ICellRendererParams) => {
          if (params.data.isNew && !params.data.roomNumber) {
            return `
              <button 
                class="btn-add-room" 
                style="
                  font-size: 11px; 
                  padding: 4px 12px; 
                  background: #10b981; 
                  color: white; 
                  border: none; 
                  border-radius: 4px; 
                  cursor: pointer;
                  font-weight: 500;
                "
                onclick="
                  const event = new CustomEvent('addRoom', { 
                    detail: { rowIndex: ${params.node.rowIndex} }, 
                    bubbles: true 
                  });
                  this.dispatchEvent(event);
                "
              >
                Add
              </button>
            `;
          } else {
            return `
              <button 
                class="btn-delete-room" 
                style="
                  font-size: 11px; 
                  padding: 4px 12px; 
                  background: #dc2626; 
                  color: white; 
                  border: none; 
                  border-radius: 4px; 
                  cursor: pointer;
                  font-weight: 500;
                "
                onclick="
                  const event = new CustomEvent('deleteRoom', { 
                    detail: { id: '${params.data.id}', rowIndex: ${params.node.rowIndex} }, 
                    bubbles: true 
                  });
                  this.dispatchEvent(event);
                "
              >
                Delete
              </button>
            `;
          }
        },
        cellStyle: { fontSize: '13px', padding: '4px 8px', textAlign: 'center' }
      }
    ];
  }

  // Grid ready handler for rooms grid
  onRoomsGridReady(params: GridReadyEvent): void {
    this.roomsGridApi = params.api;
    
    // Set up event listeners for room actions
    setTimeout(() => {
      const gridElement = document.querySelector('.rooms-detail-grid');
      if (gridElement) {
        gridElement.addEventListener('addRoom', () => {
          this.addNewRoom();
        });
        
        gridElement.addEventListener('deleteRoom', (event: Event) => {
          const customEvent = event as CustomEvent;
          this.deleteRoom(customEvent.detail.id);
        });
      }
    }, 100);
  }

  // Add new room
  addNewRoom(): void {
    const newRoom: InlineRoomData = {
      id: `new_${this.selectedRoomType?.id}_${Date.now()}`,
      roomNumber: '',
      floor: '',
      roomArea: '',
      status: 'Available',
      isNew: true
    };
    
    this.roomsGridData = [...this.roomsGridData, newRoom];
    
    if (this.roomsGridApi) {
      this.roomsGridApi.setGridOption('rowData', this.roomsGridData);
    }
  }

  // Delete room
  deleteRoom(roomId: string): void {
    this.roomsGridData = this.roomsGridData.filter(room => room.id !== roomId);
    
    if (this.roomsGridApi) {
      this.roomsGridApi.setGridOption('rowData', this.roomsGridData);
    }
  }

  // Save rooms changes
  saveRoomsChanges(): void {
    if (this.selectedRoomType) {
      // Update the room type with the new rooms data
      const validRooms = this.roomsGridData.filter(room => room.roomNumber && room.roomNumber.trim() !== '');
      this.selectedRoomType.rooms = validRooms;
      
      // Update the count in the main grid
      const roomTypeIndex = this.roomTypes.findIndex(rt => rt.id === this.selectedRoomType!.id);
      if (roomTypeIndex >= 0) {
        this.roomTypes[roomTypeIndex] = { ...this.selectedRoomType };
      }
      
      // Refresh main grid
      if (this.gridApi) {
        this.gridApi.refreshCells({
          columns: ['rooms']
        });
      }
      
      this.snackBar.open('Rooms updated successfully!', 'Close', { duration: 3000 });
    }
  }

  // Expandable Grid Methods
  toggleRowExpansion(data: ExpandableRoomTypeRow): void {
    if (!data.isExpandable) return;

    data.isExpanded = !data.isExpanded;

    if (data.isExpanded && data.children.length === 0) {
      // Load children based on row type
      this.loadChildrenData(data);
    }

    this.refreshGridData();
  }

  private loadChildrenData(parentRow: ExpandableRoomTypeRow): void {
    switch (parentRow.rowType) {
      case 'roomType':
        this.loadRoomTypeChildren(parentRow);
        break;
      default:
        break;
    }
  }

  private loadRoomTypeChildren(roomTypeRow: ExpandableRoomTypeRow): void {
    // Create child rows for rooms, amenities, and form
    const children: ExpandableRoomTypeRow[] = [];

    // Rooms section
    const roomsRow: ExpandableRoomTypeRow = {
      id: `${roomTypeRow.id}_rooms`,
      index: 0,
      roomType: `Rooms (${roomTypeRow.rooms || 0})`,
      baseOccupancy: 0,
      maxOccupancy: 0,
      adult: 0,
      child: 0,
      rooms: roomTypeRow.rooms || 0,
      amenities: '',
      floor: '',
      block: '',
      actions: '',
      originalData: roomTypeRow.originalData,
      rowType: 'rooms',
      level: roomTypeRow.level + 1,
      parentId: roomTypeRow.id,
      groupKey: `${roomTypeRow.id}_rooms`,
      isExpandable: false,
      isExpanded: false,
      children: []
    };

    // Amenities section
    const amenitiesRow: ExpandableRoomTypeRow = {
      id: `${roomTypeRow.id}_amenities`,
      index: 0,
      roomType: 'Amenities',
      baseOccupancy: 0,
      maxOccupancy: 0,
      adult: 0,
      child: 0,
      rooms: 0,
      amenities: roomTypeRow.amenities || 'None',
      floor: '',
      block: '',
      actions: '',
      originalData: roomTypeRow.originalData,
      rowType: 'amenities',
      level: roomTypeRow.level + 1,
      parentId: roomTypeRow.id,
      groupKey: `${roomTypeRow.id}_amenities`,
      isExpandable: false,
      isExpanded: false,
      children: []
    };

    // Edit form section
    const editFormRow: ExpandableRoomTypeRow = {
      id: `${roomTypeRow.id}_editForm`,
      index: 0,
      roomType: roomTypeRow.roomType,
      baseOccupancy: roomTypeRow.baseOccupancy,
      maxOccupancy: roomTypeRow.maxOccupancy,
      adult: roomTypeRow.adult,
      child: roomTypeRow.child,
      rooms: roomTypeRow.rooms,
      amenities: roomTypeRow.amenities,
      floor: roomTypeRow.floor,
      block: roomTypeRow.block,
      actions: '',
      originalData: roomTypeRow.originalData,
      rowType: 'editForm',
      level: roomTypeRow.level + 1,
      parentId: roomTypeRow.id,
      groupKey: `${roomTypeRow.id}_editForm`,
      isExpandable: false,
      isExpanded: false,
      children: []
    };

    children.push(roomsRow, amenitiesRow, editFormRow);
    roomTypeRow.children = children;
  }

  private refreshGridData(): void {
    // Use room types directly for master-detail functionality
    this.gridOptions.rowData = [...this.roomTypes];
    
    if (this.gridApi) {
      this.gridApi.setGridOption('rowData', this.roomTypes);
    }
  }

  private flattenHierarchicalData(data: ExpandableRoomTypeRow[]): ExpandableRoomTypeRow[] {
    const result: ExpandableRoomTypeRow[] = [];

    data.forEach(item => {
      result.push(item);
      
      if (item.isExpanded && item.children && item.children.length > 0) {
        const childrenFlattened = this.flattenHierarchicalData(item.children);
        result.push(...childrenFlattened);
      }
    });

    return result;
  }

  addNewRoomType(): void {
    console.log('Add New Room Type clicked');

    // Create default form data for a new room type
    const defaultFormData: RoomTypeFormData = {
      nameEnglish: '',
      shortName: '',
      uploadImage: '',
      imageCaption: '',
      descriptionEnglish: '',
      baseOccupancy: 2,
      higherOccupancy: 3,
      extraBedAllowed: true,
      numberOfRooms: 0,
      availableAmenities: [
        'Light',
        'Bath tub',
        'Wi-fi',
        'Air Conditioning',
        'Television',
        'Mini Bar',
      ],
      selectedAmenities: [],
      baseRate: 125,
      higherPrice: 50,
      extraBedPrice: 20,
      vatEnabled: false,
      cgstEnabled: true,
      igstEnabled: false,
      provincialTaxEnabled: false,
      sgstEnabled: false,
      utgstEnabled: true,
    };

    const dialogRef = this.dialog.open(EditRoomTypeDialogComponent, {
      width: '900px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      data: {
        roomTypeId: null, // null indicates this is a new room type
        roomTypeName: 'New Room Type',
        roomTypeData: defaultFormData,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.action === 'save') {
        console.log('New room type data saved:', result.data);

        // Create a new room type from the dialog result
        const newId = Date.now();
        const newDBRoomType: DBRoomType = {
          id: newId,
          hotelid: 1,
          title: result.data.nameEnglish || 'New Room Type',
          accronym: result.data.shortName || 'NRT',
          noofrooms: result.data.numberOfRooms || 0,
          image: result.data.uploadImage || '',
          description: result.data.descriptionEnglish || 'New room type',
          stdoccupancy: result.data.baseOccupancy || 2,
          higheroccupancy: result.data.higherOccupancy || 3,
          maxadult: result.data.baseOccupancy || 2,
          maxchild: 0,
          isbedalwd: result.data.extraBedAllowed ? 1 : 0,
          shortorder: this.roomTypes.length + 1,
          status: 'active',
          roomtypename: result.data.nameEnglish || 'New Room Type',
          isoverbookingalwd: 0,
          overbookingvalue: 0,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          xtralwdbeds: 1,
          taxapplicableon: 'room',
          createdby: 1,
          modifiedby: 1,
          publishonweb: 1,
          createdat: new Date().toISOString(),
          updatedat: new Date().toISOString()
        };

        const newRoomType = this.convertToRoomTypeRow(newDBRoomType, this.roomTypes.length);

        this.roomTypes.push(newRoomType);
        this.gridOptions.rowData = [...this.roomTypes];
        this.saveData();

        this.snackBar.open(
          `Room type "${newRoomType.roomType}" created successfully`,
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          },
        );

        // Reload data to reflect changes
        this.loadData();
      }
    });
  }

  updateRoomType(roomType: ExpandableRoomTypeRow): void {
    const index = this.roomTypes.findIndex((rt) => rt.id === roomType.id);
    if (index !== -1) {
      // Update the room type with new values
      this.roomTypes[index] = {
        ...roomType,
        originalData: {
          ...roomType.originalData,
          title: roomType.roomType || '',
          stdoccupancy: parseInt(roomType.baseOccupancy?.toString() || '1'),
          higheroccupancy: parseInt(roomType.maxOccupancy?.toString() || '1'),
          maxadult: parseInt(roomType.adult?.toString() || '1'),
          maxchild: parseInt(roomType.child?.toString() || '0'),
          noofrooms: parseInt(roomType.rooms?.toString() || '0'),
          isbedalwd: roomType.extraBedAllowed ? 1 : 0,
          status: roomType.status as 'active' | 'inactive' | 'deleted',
          shortorder: roomType.sortOrder || 0,
          modifiedby: 1,
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
      this.refreshGridData();
      this.saveData();
    }
  }

  saveData(): void {
    const appAccessibilityI18n: AppAccessibilityI18n = {
      accessibility: {
        ariaLabels: {
          roomTypeTable: 'Room Types Table',
          addRoomTypeBtn: 'Add Room Type',
          editRoomTypeBtn: 'Edit Room Type',
          deleteRoomTypeBtn: 'Delete Room Type',
        },
        keyboardNavigation: {
          enabled: true,
          tabOrder: ['addRoomTypeBtn', 'roomTypeTable', 'editRoomTypeBtn', 'deleteRoomTypeBtn'],
          shortcuts: {
            add: 'Alt+A',
            edit: 'Alt+E',
            delete: 'Alt+D',
          },
        },
        highContrastMode: false,
      },
      i18n: {
        locale: 'en',
        supportedLocales: ['en', 'es', 'fr'],
        translations: {
          'Room Types Table': 'Room Types Table',
          'Add Room Type': 'Add Room Type',
          'Edit Room Type': 'Edit Room Type',
          'Delete Room Type': 'Delete Room Type',
        },
      },
      appState: {
        roomTypes: this.roomTypes.map((rt) => convertToRoomType(rt.originalData as DBRoomType)),
        rooms: this.rooms.map(room => convertToRoom({
          id: room.id,
          roomTypeId: room.roomTypeId,
          roomNumber: room.roomNumber,
          floor: room.floor,
          status: room.status as 'active' | 'inactive' | 'deleted'
        })),
        lastModified: new Date().toISOString(),
        version: '1.0',
      },
    };
    localStorage.setItem('hotel-admin-data', JSON.stringify(appAccessibilityI18n));
    this.snackBar.open('Room Types saved with accessibility & i18n scaffolding', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
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

    // Safe browser API access for SSR compatibility
    if (typeof window !== 'undefined' && window.URL && document) {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `room-types-export-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
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
            (rt: DBRoomType, index: number) => this.convertToRoomTypeRow(rt, index),
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

  getRoomsByType(roomTypeId: string): RoomData[] {
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
    return roomType ? (roomType.roomType || 'Unknown') : 'Unknown';
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;

    // Set up event listeners for custom button events
    setTimeout(() => {
      const gridElement = document.querySelector('ag-grid-angular');

      if (gridElement) {
        gridElement.addEventListener('toggleRooms', (event: Event) => {
          console.log('Toggle rooms event received:', event);
          const customEvent = event as CustomEvent;
          const detail = customEvent.detail;
          console.log('Event detail:', detail);
          const roomTypeId = detail.id;
          
          // Find the room type data
          const roomType = this.roomTypes.find(rt => rt.id === roomTypeId);
          if (roomType) {
            if (this.selectedRoomType?.id === roomTypeId && this.showRoomsGrid) {
              // Hide the rooms grid if it's already showing for this room type
              this.hideRoomsGrid();
            } else {
              // Show the rooms grid for this room type
              this.showRoomsGridForRoomType(roomType);
            }
            
            // Refresh the main grid to update button states
            if (this.gridApi) {
              this.gridApi.refreshCells({
                columns: ['rooms']
              });
            }
          }
        });

        gridElement.addEventListener('editRoomType', (event: Event) => {
          const customEvent = event as CustomEvent;
          this.editRoomType(customEvent.detail.id);
        });

        gridElement.addEventListener('sortAmenities', (event: Event) => {
          const customEvent = event as CustomEvent;
          this.sortAmenities(customEvent.detail.id);
        });

        gridElement.addEventListener('confirmRow', (event: Event) => {
          const customEvent = event as CustomEvent;
          this.confirmRow(customEvent.detail.id);
        });
      }
    }, 100);

    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params: GridSizeChangedEvent): void {
    params.api.sizeColumnsToFit();
  }

  // Header Action Methods
  editPmRoomType(): void {
    console.log('Edit PM Room Type clicked');
    
    const dialogRef = this.dialog.open(EditPmRoomTypeDialogComponent, {
      width: '1000px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      panelClass: 'edit-pm-room-type-dialog-panel',
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.action === 'save') {
        console.log('PM Room Type saved:', result.data);
        this.snackBar.open('PM Room Type saved successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        
        // Create new room type from the dialog result
        const formData = result.data;
        const newRoomType = this.createRoomTypeFromFormData(formData);
        
        // Add to room types list
        this.roomTypes.push(newRoomType);
        this.gridOptions.rowData = [...this.roomTypes];
        this.saveData();
        
        // Reload data to reflect changes
        this.loadData();
      }
    });
  }

  addARoomType(): void {
    console.log('Add a Room Type clicked');
    this.snackBar.open('Add a Room Type functionality', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  deleteSelectedRoomTypes(): void {
    if (!this.gridApi) return;

    const selectedNodes = this.gridApi.getSelectedNodes();
    if (selectedNodes.length === 0) {
      this.snackBar.open('Please select room types to delete', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }

    const selectedIds = selectedNodes
      .map((node) => node.data?.id)
      .filter(Boolean);
    console.log('Delete selected room types:', selectedIds);

    // Remove selected room types from data
    this.roomTypes = this.roomTypes.filter(
      (rt) => !selectedIds.includes(rt.id),
    );
    this.gridOptions.rowData = [...this.roomTypes];

    // Save to localStorage
    this.saveData();

    this.snackBar.open(`Deleted ${selectedIds.length} room type(s)`, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  saveSortOrder(): void {
    console.log('Save Sort Order clicked');
    this.saveData();
    this.snackBar.open('Sort order saved successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  cancel(): void {
    console.log('Cancel clicked');
    this.loadData(); // Reload data from storage
    this.snackBar.open('Changes cancelled', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  // Grid Action Methods
  addRoom(roomTypeId: string): void {
    console.log('Add Room clicked for room type:', roomTypeId);
    this.snackBar.open(`Add Room for room type: ${roomTypeId}`, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  editRoomType(roomTypeId: string): void {
    console.log('Edit Room Type clicked for room type:', roomTypeId);

    // Find the room type data in the grid data
    const roomType = this.gridData.find((row: ExpandableRoomTypeRow) => row.id === roomTypeId && row.level === 0);
    
    if (!roomType) {
      console.error('Room type not found:', roomTypeId);
      return;
    }

    // Show edit form hierarchically instead of opening dialog
    this.showEditFormForRoomType(roomType);
  }

  sortAmenities(roomTypeId: string): void {
    console.log('Sort Amenities clicked for room type:', roomTypeId);

    // Find the room type name
    const roomType = this.roomTypes.find((rt) => rt.id === roomTypeId);
    const roomTypeName = roomType ? roomType.roomType : 'Room Type';

    const dialogRef = this.dialog.open(SortAmenitiesDialogComponent, {
      width: '600px',
      maxWidth: '90vw',
      data: {
        roomTypeId: roomTypeId,
        roomTypeName: roomTypeName,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.action === 'save') {
        console.log('Amenities sort order saved:', result.data);
        this.snackBar.open(
          `Amenities sort order updated for ${roomTypeName}`,
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          },
        );
      }
    });
  }

  private mapRoomTypeToFormData(roomType: IRoomTypes): RoomTypeFormData {
    return {
      nameEnglish: roomType.title || '',
      shortName: roomType.accronym || roomType.id?.toString() || '',
      uploadImage: roomType.image || '',
      imageCaption: '',
      descriptionEnglish: roomType.description || '',
      baseOccupancy: roomType.stdoccupancy || 1,
      higherOccupancy: roomType.higheroccupancy || 1,
      extraBedAllowed: roomType.isbedalwd === 1,
      numberOfRooms: roomType.noofrooms || 0,
      availableAmenities: [
        'Light',
        'Bath tub',
        'Wi-fi',
        'Air Conditioning',
        'Television',
        'Mini Bar',
      ],
      selectedAmenities: [],
      baseRate: 125,
      higherPrice: 50,
      extraBedPrice: 20,
      vatEnabled: false,
      cgstEnabled: true,
      igstEnabled: false,
      provincialTaxEnabled: false,
      sgstEnabled: false,
      utgstEnabled: true,
    };
  }

  private createRoomTypeFromFormData(formData: EditFormRowData[]): ExpandableRoomTypeRow {
    const getValue = (field: string) => {
      const item = formData.find(f => f.field === field);
      return item ? item.value : '';
    };

    const newId = Date.now();
    const nameEnglish = getValue('Name the Room Type (English)') as string || 'PM-1';
    const shortName = getValue('Short Name') as string || 'PM';
    const baseOccupancy = getValue('Base Occupancy') as number || 1;
    const higherOccupancy = getValue('Higher Occupancy') as number || 2;
    const extraBedAllowed = getValue('Extra bed allowed') as boolean || false;
    const numberOfRooms = getValue('Number of Rooms of this Room Type') as number || 6;

    // Create the DBRoomType first
    const dbRoomType: DBRoomType = {
        id: newId,
        hotelid: 1,
        title: nameEnglish,
        accronym: shortName,
        noofrooms: numberOfRooms,
        image: '',
        description: getValue('Description (English)') as string || 'Pay master room',
        isoverbookingalwd: 0,
        overbookingvalue: 0,
        overbookingtype: 'percentage',
        isgenderbase: 0,
        stdoccupancy: baseOccupancy,
        higheroccupancy: higherOccupancy,
        maxadult: baseOccupancy,
        maxchild: Math.max(0, higherOccupancy - baseOccupancy),
        isbedalwd: extraBedAllowed ? 1 : 0,
        xtralwdbeds: extraBedAllowed ? 1 : 0,
        taxapplicableon: 'room',
        shortorder: this.roomTypes.length + 1,
        createdby: 1,
        status: 'active',
        modifiedby: 1,
        publishonweb: 1,
        roomtypename: nameEnglish,
        createdat: new Date().toISOString(),
        updatedat: new Date().toISOString()
    };

    // Create the RoomTypeRow using our utility function
    return this.convertToRoomTypeRow(dbRoomType, this.roomTypes.length);
  }

  confirmRow(roomTypeId: string): void {
    console.log('Confirm Row clicked for room type:', roomTypeId);
    this.snackBar.open(
      `Confirmed changes for room type: ${roomTypeId}`,
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      },
    );
  }

  // Bottom Action Methods
  saveChanges(): void {
    console.log('Save Changes clicked');
    this.saveData();
    this.snackBar.open('All changes saved successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  reloadData(): void {
    console.log('Reload Data clicked');
    this.loadData();
    this.snackBar.open('Data reloaded from storage', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  // Convert DBRoomType to RoomTypeRow
  private convertToRoomTypeRow(rt: IRoomTypes | DBRoomType, index: number): ExpandableRoomTypeRow {
    // Handle both new Angular model (IRoomTypes) and legacy DBRoomType
    const roomType = rt as IRoomTypes; // Type assertion since both have similar structure
    
    // Create sample room data for testing master-detail functionality
    const sampleRooms: InlineRoomData[] = Array(parseInt(roomType.noofrooms?.toString() || '0')).fill(null).map((_, roomIndex) => ({
      id: `room_${roomType.id}_${roomIndex + 1}`,
      roomNumber: `${roomType.title?.substring(0, 2).toUpperCase() || 'RM'}${String(roomIndex + 101).padStart(3, '0')}`,
      floor: ['Ground Floor', '1st Floor', '2nd Floor', '3rd Floor'][roomIndex % 4],
      roomArea: ['Block A', 'Block B', 'East Wing', 'West Wing'][roomIndex % 4],
      status: ['Available', 'Occupied', 'Maintenance'][roomIndex % 3],
      isNew: false
    }));
    
    return {
      index: (index + 1).toString(),
      id: roomType.id?.toString() || '',
      image: roomType.image || '',
      roomType: roomType.title || (rt as DBRoomType).roomtypename || '',
      baseOccupancy: (roomType.stdoccupancy || 1).toString(),
      maxOccupancy: (roomType.higheroccupancy || 1).toString(),
      adult: (roomType.maxadult || 1).toString(),
      child: (roomType.maxchild || 0).toString(),
      rooms: sampleRooms, // Now an array of room objects instead of just count
      amenities: 'View Details', // Placeholder for amenities
      floor: '',
      block: '',
      actions: '',
      originalData: roomType as IRoomTypes,
      rowType: 'roomType',
      level: 0,
      parentId: null,
      groupKey: roomType.id?.toString() || '',
      isExpandable: true,
      isExpanded: false,
      children: []
    };
  }

  // Convert ExpandableRoomTypeRow back to Angular model (IUpdateRoomTypes)
  private convertRowToDB(row: ExpandableRoomTypeRow): IUpdateRoomTypes {
    // Create update object based on row data
    const updateData: IUpdateRoomTypes = {
      title: row.roomType || '',
      noofrooms: parseInt((row.rooms || '0').toString()) || 0,
      stdoccupancy: parseInt((row.baseOccupancy || '1').toString()) || 1,
      higheroccupancy: parseInt((row.maxOccupancy || '1').toString()) || 1,
      maxadult: parseInt((row.adult || '1').toString()) || 1,
      maxchild: parseInt((row.child || '0').toString()) || 0,
      isbedalwd: 1, // Default to true for expandable rows
      shortorder: 0, // Default sort order
      status: 'AC', // Default status
      image: row.image || '',
      modifiedby: 1 // Should come from current user context
    };
    
    return updateData;
  }

  openAddRoomDialog(): void {
    const dialogRef = this.dialog.open(AddRoomDialogComponent, {
      width: '850px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'add-room-dialog-panel',
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.action === 'save') {
        console.log('Room saved:', result.data);
        this.snackBar.open('Room saved successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      } else if (result && result.action === 'saveAndDuplicate') {
        console.log('Room saved and duplicated:', result.data);
        this.snackBar.open('Room saved and duplicated!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
}
