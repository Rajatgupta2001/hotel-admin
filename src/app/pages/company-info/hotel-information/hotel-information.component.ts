import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule } from 'ag-grid-community';
import {
  ColDef,
  GridReadyEvent,
  GridSizeChangedEvent,
  CellValueChangedEvent,
  ICellRendererParams,
  RowClassParams,
} from 'ag-grid-community';
import { StorageService } from '../../../services/storage.service';

// Custom Cell Renderers following room types pattern
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

class CheckboxCellRenderer {
  eGui!: HTMLElement;
  private params!: ICellRendererParams;

  init(params: ICellRendererParams) {
    this.params = params;
    this.eGui = document.createElement('div');
    this.eGui.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    `;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked =
      params.value === true || params.value === 'true' || params.value === 1;
    checkbox.style.cssText = `
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: #2196f3;
    `;

    checkbox.addEventListener('change', () => {
      // Update the data model directly
      const rowData = params.data as HotelInfoRow;
      rowData.fieldValue = checkbox.checked;

      // Manually trigger onCellValueChanged
      if (params.api) {
        params.api.refreshCells({ rowNodes: [params.node!] });
      }
    });

    this.eGui.appendChild(checkbox);
  }

  getGui() {
    return this.eGui;
  }

  refresh(): boolean {
    return false;
  }
}

// Hotel Data Interface for storage
interface SavedHotelData {
  basicInfo?: HotelInfoRow[];
  billingAddress?: HotelInfoRow[];
  billingContact?: HotelInfoRow[];
  lastUpdated?: string;
}

// Hotel Information Data Interface
interface HotelInfoRow {
  id: string;
  fieldName: string;
  fieldValue: string | boolean | number;
  fieldType: 'text' | 'dropdown' | 'checkbox' | 'textarea' | 'file';
  options?: string[];
  placeholder?: string;
  required?: boolean;
  editable?: boolean;
  section: 'basic' | 'billing' | 'contact';
}

@Component({
  selector: 'app-hotel-information',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    AgGridAngular,
  ],
  template: `
    <div class="hotel-info-container">
      <!-- Header Section -->
      <div class="header-section">
        <div class="header-content">
          <mat-icon class="header-icon">business</mat-icon>
          <div class="header-text">
            <h1 class="header-title">Hotel Information</h1>
            <p class="header-subtitle">Please enter the Hotel Details below.</p>
          </div>
        </div>
      </div>

      <!-- Hotel Information Grid -->
      <div class="grid-container">
        <!-- Basic Hotel Information Section -->
        <div class="grid-section">
          <h3 class="section-title">Basic Hotel Information</h3>
          <ag-grid-angular
            class="hotel-info-grid ag-theme-material"
            [gridOptions]="gridOptions"
            [rowData]="basicInfoData"
            [columnDefs]="getColumnDefs()"
            [modules]="modules"
            [domLayout]="'autoHeight'"
            (gridReady)="onGridReady($event)"
            (gridSizeChanged)="onGridSizeChanged($event)"
            (cellValueChanged)="onCellValueChanged($event)"
            style="width: 100%; height: auto; min-height: 300px;"
          >
          </ag-grid-angular>
        </div>

        <!-- Billing Address Section -->
        <div class="grid-section">
          <h3 class="section-title">Main Billing Address:</h3>
          <ag-grid-angular
            class="hotel-info-grid ag-theme-material"
            [gridOptions]="gridOptions"
            [rowData]="billingAddressData"
            [columnDefs]="getColumnDefs()"
            [modules]="modules"
            [domLayout]="'autoHeight'"
            (gridReady)="onGridReady($event)"
            (gridSizeChanged)="onGridSizeChanged($event)"
            (cellValueChanged)="onCellValueChanged($event)"
            style="width: 100%; height: auto; min-height: 250px;"
          >
          </ag-grid-angular>
        </div>

        <!-- Main Billing Contact Section -->
        <div class="grid-section">
          <h3 class="section-title">Main Billing Contact:</h3>
          <ag-grid-angular
            class="hotel-info-grid ag-theme-material"
            [gridOptions]="gridOptions"
            [rowData]="billingContactData"
            [columnDefs]="getColumnDefs()"
            [modules]="modules"
            [domLayout]="'autoHeight'"
            (gridReady)="onGridReady($event)"
            (gridSizeChanged)="onGridSizeChanged($event)"
            (cellValueChanged)="onCellValueChanged($event)"
            style="width: 100%; height: auto; min-height: 250px;"
          >
          </ag-grid-angular>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button
            mat-raised-button
            color="primary"
            (click)="saveHotelInfo()"
            class="save-button"
          >
            <mat-icon class="button-icon">save</mat-icon>
            Save Hotel Info
          </button>
          <button
            mat-raised-button
            color="accent"
            (click)="addNewProperty()"
            class="add-button"
          >
            <mat-icon class="button-icon">add</mat-icon>
            Add a New Property/Hotel
          </button>
          <button mat-stroked-button (click)="cancel()" class="cancel-button">
            <mat-icon class="button-icon">cancel</mat-icon>
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Main Container */
      .hotel-info-container {
        max-width: 1200px;
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
        border-bottom: 2px solid #e5e7eb;
      }

      /* AG Grid Styling */
      .hotel-info-grid {
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        font-family: 'Roboto', sans-serif;
      }

      /* AG Grid Theme Customization - Following room types pattern */
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
        --ag-row-height: 36px;
        --ag-header-height: 32px;
        --ag-list-item-height: 36px;
      }

      ::ng-deep .ag-theme-material .ag-header {
        font-weight: 600;
        background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
        border-bottom: 2px solid #6366f1;
        height: 32px;
        min-height: 32px;
        max-height: 32px;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        border-right: 1px solid #e5e7eb;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 32px;
        line-height: 1.1;
        font-size: 13px;
        font-weight: 600;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        border-bottom: 1px solid #f3f4f6;
        border-right: 1px solid #f3f4f6;
        padding: 4px 6px;
        line-height: 1.3;
        height: 36px;
        min-height: 36px;
        max-height: 36px;
        display: flex;
        align-items: center;
        overflow: visible;
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

      /* Action Buttons */
      .action-buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin: 32px 0;
        flex-wrap: wrap;
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
        margin-right: 8px;
        font-size: 20px;
        width: 20px;
        height: 20px;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .hotel-info-container {
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

        .action-buttons {
          flex-direction: column;
          align-items: center;
        }

        .action-buttons button {
          width: 100%;
          max-width: 300px;
        }
      }
    `,
  ],
})
export class HotelInformationComponent implements OnInit {
  private snackBar = inject(MatSnackBar);
  private storageService = inject(StorageService);

  // AG Grid module
  public modules = [AllCommunityModule];

  // Data arrays for each section
  basicInfoData: HotelInfoRow[] = [];
  billingAddressData: HotelInfoRow[] = [];
  billingContactData: HotelInfoRow[] = [];

  // AG Grid configuration
  gridOptions = {
    theme: 'legacy' as const,
    rowHeight: 36,
    headerHeight: 32,
    modules: this.modules,
    defaultColDef: {
      sortable: false,
      filter: false,
      resizable: true,
      editable: false,
      suppressMovable: true,
      suppressMenu: true,
      width: 100,
    },
    columnDefs: this.getColumnDefs(),
    rowData: [] as HotelInfoRow[],
    singleClickEdit: true,
    stopEditingWhenCellsLoseFocus: true,
    suppressRowClickSelection: true,
    enableCellTextSelection: true,
    animateRows: true,
    rowSelection: 'single' as const,
    suppressHorizontalScroll: true,
    onCellValueChanged: (event: CellValueChangedEvent) =>
      this.onCellValueChanged(event),
    getRowStyle: (params: RowClassParams) => {
      if (
        params.node &&
        params.node.rowIndex !== null &&
        params.node.rowIndex % 2 === 0
      ) {
        return { background: '#f9fafb' };
      }
      return { background: '#ffffff' };
    },
  };

  constructor() {
    // Initialize component
  }

  ngOnInit(): void {
    this.initializeData();
    this.loadData();
  }

  initializeData(): void {
    // Basic Hotel Information (matching the image exactly)
    this.basicInfoData = [
      {
        id: 'hotelname',
        fieldName: 'Name of the Hotel/Property*',
        fieldValue: 'Marriott',
        fieldType: 'text',
        placeholder: 'Enter hotel name',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'hotelcode',
        fieldName: 'Hotel Code',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter hotel code',
        required: false,
        editable: true,
        section: 'basic',
      },
      {
        id: 'companylogo',
        fieldName: 'Upload Company Logo',
        fieldValue: 'Choose file',
        fieldType: 'file',
        required: false,
        editable: false,
        section: 'basic',
      },
      {
        id: 'uploadphoto',
        fieldName: 'Upload Photos',
        fieldValue: 'Choose file',
        fieldType: 'file',
        required: false,
        editable: false,
        section: 'basic',
      },
      {
        id: 'address',
        fieldName: 'Address*',
        fieldValue: '2023, 46TH',
        fieldType: 'textarea',
        placeholder: 'Enter address',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'country',
        fieldName: 'Country*',
        fieldValue: 'India',
        fieldType: 'dropdown',
        options: [
          'India',
          'United States',
          'United Kingdom',
          'Canada',
          'Australia',
        ],
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'state',
        fieldName: 'State*',
        fieldValue: 'Select State',
        fieldType: 'dropdown',
        options: [
          'Select State',
          'Maharashtra',
          'Delhi',
          'Karnataka',
          'Tamil Nadu',
          'Gujarat',
        ],
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'city',
        fieldName: 'City*',
        fieldValue: 'New Delhi',
        fieldType: 'text',
        placeholder: 'Enter city',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'zipcode',
        fieldName: 'Zip Code*',
        fieldValue: '110092',
        fieldType: 'text',
        placeholder: 'Enter zip code',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'phone',
        fieldName: 'Phone*',
        fieldValue: '+918979714219',
        fieldType: 'text',
        placeholder: 'Enter phone number',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'hotelcategory',
        fieldName: 'Hotel Category',
        fieldValue: 'Select Hotel Category',
        fieldType: 'dropdown',
        options: [
          'Select Hotel Category',
          '5 Star',
          '4 Star',
          '3 Star',
          '2 Star',
          'Budget',
        ],
        required: false,
        editable: true,
        section: 'basic',
      },
      {
        id: 'fax',
        fieldName: 'Fax',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter fax number',
        required: false,
        editable: true,
        section: 'basic',
      },
      {
        id: 'website',
        fieldName: 'Website Address',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter website URL',
        required: false,
        editable: true,
        section: 'basic',
      },
      {
        id: 'email',
        fieldName: 'Email Address',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter email address',
        required: false,
        editable: true,
        section: 'basic',
      },
      {
        id: 'description',
        fieldName: 'Brief description of your hotel',
        fieldValue: '',
        fieldType: 'textarea',
        placeholder: 'Enter hotel description',
        required: false,
        editable: true,
        section: 'basic',
      },
      {
        id: 'rooms',
        fieldName: 'No. of Rooms',
        fieldValue: 60,
        fieldType: 'text',
        placeholder: 'Enter number of rooms',
        required: false,
        editable: true,
        section: 'basic',
      },
      {
        id: 'services',
        fieldName: 'Services Offered',
        fieldValue: '',
        fieldType: 'textarea',
        placeholder: 'Enter services offered',
        required: false,
        editable: true,
        section: 'basic',
      },
      {
        id: 'gstin',
        fieldName: 'GSTIN',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter GSTIN',
        required: false,
        editable: true,
        section: 'basic',
      },
    ];

    // Main Billing Address (matching the image exactly)
    this.billingAddressData = [
      {
        id: 'same_as_hotel',
        fieldName: 'Same as Hotel Address',
        fieldValue: false,
        fieldType: 'checkbox',
        required: false,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_address1',
        fieldName: 'Address Line 1*',
        fieldValue: '2023, 46TH',
        fieldType: 'text',
        placeholder: 'Enter address line 1',
        required: true,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_address2',
        fieldName: 'Address Line 2',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter address line 2',
        required: false,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_country',
        fieldName: 'Country*',
        fieldValue: 'India',
        fieldType: 'dropdown',
        options: [
          'India',
          'United States',
          'United Kingdom',
          'Canada',
          'Australia',
        ],
        required: true,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_state',
        fieldName: 'State*',
        fieldValue: 'Select State',
        fieldType: 'dropdown',
        options: [
          'Select State',
          'Maharashtra',
          'Delhi',
          'Karnataka',
          'Tamil Nadu',
          'Gujarat',
        ],
        required: true,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_city',
        fieldName: 'City*',
        fieldValue: 'New Delhi',
        fieldType: 'text',
        placeholder: 'Enter city',
        required: true,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_zipcode',
        fieldName: 'Zip Code*',
        fieldValue: '110092',
        fieldType: 'text',
        placeholder: 'Enter zip code',
        required: true,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_phone',
        fieldName: 'Office Phone*',
        fieldValue: '+918979714219',
        fieldType: 'text',
        placeholder: 'Enter office phone',
        required: true,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_fax',
        fieldName: 'Office Fax',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter office fax',
        required: false,
        editable: true,
        section: 'billing',
      },
    ];

    // Main Billing Contact (matching the image exactly)
    this.billingContactData = [
      {
        id: 'salutation',
        fieldName: 'Salutation*',
        fieldValue: 'Mr.',
        fieldType: 'dropdown',
        options: ['Mr.', 'Ms.', 'Mrs.', 'Dr.'],
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'first_name',
        fieldName: 'First Name*',
        fieldValue: 'Mukul',
        fieldType: 'text',
        placeholder: 'Enter first name',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'last_name',
        fieldName: 'Last Name*',
        fieldValue: 'Chaudhary',
        fieldType: 'text',
        placeholder: 'Enter last name',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'designation',
        fieldName: 'Designation*',
        fieldValue: 'My Designation',
        fieldType: 'text',
        placeholder: 'Enter designation',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'office_phone',
        fieldName: 'Office Phone*',
        fieldValue: '+918979714219',
        fieldType: 'text',
        placeholder: 'Enter office phone',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'office_fax',
        fieldName: 'Office Fax',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter office fax',
        required: false,
        editable: true,
        section: 'contact',
      },
      {
        id: 'email_id',
        fieldName: 'Email Id*',
        fieldValue: 'mukul.chaudhary@hotelogix.com',
        fieldType: 'text',
        placeholder: 'Enter email address',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'mobile',
        fieldName: 'Mobile',
        fieldValue: '+918979714219',
        fieldType: 'text',
        placeholder: 'Enter mobile number',
        required: false,
        editable: true,
        section: 'contact',
      },
      {
        id: 'company_note',
        fieldName: 'Note: Fields marked with an * are compulsory',
        fieldValue: '',
        fieldType: 'text',
        required: false,
        editable: false,
        section: 'contact',
      },
    ];
  }

  getColumnDefs(): ColDef[] {
    return [
      {
        headerName: 'Field Name',
        field: 'fieldName',
        width: 300,
        cellStyle: {
          fontWeight: '600',
          color: '#374151',
          padding: '6px 10px',
          background: '#f8f9fa',
          fontSize: '13px',
        },
        suppressSizeToFit: true,
      },
      {
        headerName: 'Value',
        field: 'fieldValue',
        flex: 1,
        editable: (params) =>
          params.data.editable && params.data.fieldType !== 'checkbox',
        cellRenderer: (params: ICellRendererParams) => {
          const data = params.data as HotelInfoRow;

          if (!data.editable) {
            return `<span style="
              color: #6b7280; 
              font-style: italic;
              padding: 6px 10px;
              background: #f8f9fa;
              border-radius: 4px;
              display: flex;
              align-items: center;
              font-size: 13px;
            ">${params.value || data.placeholder || ''}</span>`;
          }

          // For checkbox fields, use checkbox renderer
          if (data.fieldType === 'checkbox') {
            return CheckboxCellRenderer;
          }

          // For editable cells, use the EditableCellRenderer
          return EditableCellRenderer;
        },
        cellEditor: (params: ICellRendererParams) => {
          const data = params.data as HotelInfoRow;
          if (data.fieldType === 'dropdown') {
            return 'agSelectCellEditor';
          }
          if (data.fieldType === 'textarea') {
            return 'agLargeTextCellEditor';
          }
          return 'agTextCellEditor';
        },
        cellEditorParams: (params: ICellRendererParams) => {
          const data = params.data as HotelInfoRow;
          if (data.fieldType === 'dropdown' && data.options) {
            return { values: data.options };
          }
          if (data.fieldType === 'textarea') {
            return {
              maxLength: 500,
              rows: 4,
              cols: 50,
            };
          }
          return {};
        },
        suppressSizeToFit: true,
      },
    ];
  }

  onCellValueChanged(event: CellValueChangedEvent): void {
    const updatedRow = event.data as HotelInfoRow;
    console.log(`Updated ${updatedRow.fieldName}:`, updatedRow.fieldValue);

    // Handle the "Same as Hotel Address" checkbox
    if (updatedRow.id === 'same_as_hotel' && updatedRow.fieldValue === true) {
      // Copy hotel address fields to billing address
      const hotelAddress =
        this.basicInfoData.find((item) => item.id === 'address')?.fieldValue ||
        '';
      const hotelCity =
        this.basicInfoData.find((item) => item.id === 'city')?.fieldValue || '';
      const hotelState =
        this.basicInfoData.find((item) => item.id === 'state')?.fieldValue ||
        '';
      const hotelZip =
        this.basicInfoData.find((item) => item.id === 'zipcode')?.fieldValue ||
        '';
      const hotelCountry =
        this.basicInfoData.find((item) => item.id === 'country')?.fieldValue ||
        '';
      const hotelPhone =
        this.basicInfoData.find((item) => item.id === 'phone')?.fieldValue ||
        '';

      // Update billing address fields
      const billingAddress1 = this.billingAddressData.find(
        (item) => item.id === 'billing_address1',
      );
      const billingCity = this.billingAddressData.find(
        (item) => item.id === 'billing_city',
      );
      const billingState = this.billingAddressData.find(
        (item) => item.id === 'billing_state',
      );
      const billingZip = this.billingAddressData.find(
        (item) => item.id === 'billing_zipcode',
      );
      const billingCountry = this.billingAddressData.find(
        (item) => item.id === 'billing_country',
      );
      const billingPhone = this.billingAddressData.find(
        (item) => item.id === 'billing_phone',
      );

      if (billingAddress1) billingAddress1.fieldValue = hotelAddress;
      if (billingCity) billingCity.fieldValue = hotelCity;
      if (billingState) billingState.fieldValue = hotelState;
      if (billingZip) billingZip.fieldValue = hotelZip;
      if (billingCountry) billingCountry.fieldValue = hotelCountry;
      if (billingPhone) billingPhone.fieldValue = hotelPhone;
    }

    this.saveData();
  }

  loadData(): void {
    // Load saved data from storage
    const savedData = this.storageService.getItem(
      'hotelInformation',
    ) as SavedHotelData;
    if (savedData) {
      if (savedData.basicInfo) this.basicInfoData = savedData.basicInfo;
      if (savedData.billingAddress)
        this.billingAddressData = savedData.billingAddress;
      if (savedData.billingContact)
        this.billingContactData = savedData.billingContact;
    }
  }

  saveData(): void {
    const hotelData = {
      basicInfo: this.basicInfoData,
      billingAddress: this.billingAddressData,
      billingContact: this.billingContactData,
      lastUpdated: new Date().toISOString(),
    };
    this.storageService.setItem('hotelInformation', hotelData);
  }

  saveHotelInfo(): void {
    this.saveData();
    this.snackBar.open('Hotel information saved successfully!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'],
    });
  }

  addNewProperty(): void {
    this.snackBar.open('Add new property functionality', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  cancel(): void {
    // Reset to original data
    this.initializeData();
    this.snackBar.open('Changes cancelled', 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onGridReady(params: GridReadyEvent): void {
    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params: GridSizeChangedEvent): void {
    params.api.sizeColumnsToFit();
  }
}
