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
import { Hotel } from '../../../../models/hotel.model';

// Extended Hotel interface for form data
interface ExtendedHotel extends Hotel {
  hotelcode?: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  zipcode?: string;
  phone?: string;
  hotelcategory?: string;
  fax?: string;
  email?: string;
  gstin?: string;
  billingAddress1?: string;
  billingAddress2?: string;
  billingCountry?: string;
  billingState?: string;
  billingCity?: string;
  billingZipcode?: string;
  billingPhone?: string;
  billingFax?: string;
  contactSalutation?: string;
  contactFirstName?: string;
  contactLastName?: string;
  contactDesignation?: string;
  contactOfficePhone?: string;
  contactOfficeFax?: string;
  contactEmail?: string;
  contactMobile?: string;
  totalrooms?: number;
  createdDate?: string;
  modifiedDate?: string;
}

// Custom Cell Renderers for different field types
class EditableCellRenderer {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
    this.eGui = document.createElement('div');
    this.eGui.style.cssText = `
      padding: 4px 8px;
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 4px;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: text;
      transition: all 0.2s ease;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: #495057;
    `;
    this.eGui.innerHTML = params.value ? String(params.value) : '';

    this.eGui.addEventListener('mouseenter', () => {
      this.eGui.style.background = '#e3f2fd';
      this.eGui.style.borderColor = '#2196f3';
    });

    this.eGui.addEventListener('mouseleave', () => {
      this.eGui.style.background = '#f8f9fa';
      this.eGui.style.borderColor = '#e9ecef';
    });
  }

  getGui() {
    return this.eGui;
  }
}

class DropdownCellRenderer {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
    this.eGui = document.createElement('select');
    this.eGui.style.cssText = `
      width: 100%;
      padding: 4px 8px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      background: white;
      font-size: 14px;
      height: 32px;
      outline: none;
    `;

    const options = params.colDef?.cellEditorParams?.values || [];
    options.forEach((option: string) => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.text = option;
      if (option === params.value) {
        optionElement.selected = true;
      }
      this.eGui.appendChild(optionElement);
    });

    this.eGui.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      if (params.setValue) {
        params.setValue(target.value);
      }
    });
  }

  getGui() {
    return this.eGui;
  }
}

class CheckboxCellRenderer {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
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
      width: 16px;
      height: 16px;
      cursor: pointer;
    `;

    checkbox.addEventListener('change', () => {
      if (params.setValue) {
        params.setValue(checkbox.checked);
      }
    });

    this.eGui.appendChild(checkbox);
  }

  getGui() {
    return this.eGui;
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
            style="width: 100%; height: auto; min-height: 400px;"
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
            style="width: 100%; height: auto; min-height: 300px;"
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
            style="width: 100%; height: auto; min-height: 300px;"
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

      /* AG Grid Theme Customization */
      ::ng-deep .ag-theme-material {
        --ag-border-color: #e5e7eb;
        --ag-header-background-color: #f8f9fa;
        --ag-header-foreground-color: #374151;
        --ag-odd-row-background-color: #ffffff;
        --ag-even-row-background-color: #f9fafb;
        --ag-row-hover-color: #e3f2fd;
        --ag-selected-row-background-color: #bbdefb;
        --ag-font-family: 'Roboto', sans-serif;
        --ag-font-size: 14px;
        --ag-row-height: 45px;
        --ag-header-height: 40px;
        --ag-list-item-height: 45px;
      }

      ::ng-deep .ag-theme-material .ag-header {
        font-weight: 600;
        background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
        border-bottom: 2px solid #1976d2;
        height: 40px;
        min-height: 40px;
        max-height: 40px;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        border-right: 1px solid #dee2e6;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 40px;
        line-height: 1.2;
        font-size: 14px;
        font-weight: 600;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        border-bottom: 1px solid #f3f4f6;
        border-right: 1px solid #f3f4f6;
        padding: 8px 12px;
        line-height: 1.4;
        height: 45px;
        min-height: 45px;
        max-height: 45px;
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      ::ng-deep .ag-theme-material .ag-row {
        transition: background-color 0.2s ease;
        height: 45px;
        min-height: 45px;
        max-height: 45px;
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
    rowHeight: 45,
    headerHeight: 40,
    modules: this.modules,
    defaultColDef: {
      sortable: false,
      filter: false,
      resizable: true,
      editable: false,
      suppressMovable: true,
      suppressMenu: true,
    },
    columnDefs: this.getColumnDefs(),
    rowData: [] as HotelInfoRow[],
    singleClickEdit: true,
    stopEditingWhenCellsLoseFocus: true,
    suppressRowClickSelection: true,
    enableCellTextSelection: true,
    animateRows: true,
    rowSelection: 'single' as const,
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
        cellStyle: { fontWeight: '500', color: '#374151' },
        suppressSizeToFit: true,
      },
      {
        headerName: 'Value',
        field: 'fieldValue',
        flex: 1,
        editable: (params) => params.data.editable,
        cellRenderer: (params: ICellRendererParams) => {
          const data = params.data as HotelInfoRow;

          if (!data.editable) {
            return `<span style="color: #6b7280; font-style: italic;">${params.value || data.placeholder || ''}</span>`;
          }

          switch (data.fieldType) {
            case 'dropdown':
              return DropdownCellRenderer;
            case 'checkbox':
              return CheckboxCellRenderer;
            case 'file':
              return `<button style="
                background: #e3f2fd;
                border: 1px solid #1976d2;
                color: #1976d2;
                padding: 4px 12px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
              ">${params.value || 'Choose File'}</button>`;
            default:
              return EditableCellRenderer;
          }
        },
        cellEditor: (params: ICellRendererParams) => {
          const data = params.data as HotelInfoRow;
          if (data.fieldType === 'dropdown') {
            return 'agSelectCellEditor';
          }
          return 'agTextCellEditor';
        },
        cellEditorParams: (params: ICellRendererParams) => {
          const data = params.data as HotelInfoRow;
          if (data.fieldType === 'dropdown' && data.options) {
            return { values: data.options };
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
    this.saveData();
  }

  loadData(): void {
    // First check if we have data in the centralized storage service
    const existingHotel = this.storageService.getHotel();

    // If we have hotel data in the service, populate the form
    if (existingHotel) {
      this.populateFormFromHotelData(existingHotel as unknown as ExtendedHotel);
    } else {
      // Check for legacy data stored under 'hotelInformation' key
      const savedData = this.storageService.getItem(
        'hotelInformation',
      ) as SavedHotelData;
      if (savedData) {
        if (savedData.basicInfo) this.basicInfoData = savedData.basicInfo;
        if (savedData.billingAddress)
          this.billingAddressData = savedData.billingAddress;
        if (savedData.billingContact)
          this.billingContactData = savedData.billingContact;

        // Migrate legacy data to the new centralized storage
        this.saveHotelToService();
        // Remove legacy data
        this.storageService.removeItem('hotelInformation');
      }
    }
  }

  saveData(): void {
    // Save to both legacy format (for backward compatibility) and centralized service
    const hotelData: SavedHotelData = {
      basicInfo: this.basicInfoData,
      billingAddress: this.billingAddressData,
      billingContact: this.billingContactData,
      lastUpdated: new Date().toISOString(),
    };

    // Save to legacy format for immediate compatibility
    this.storageService.setItem('hotelInformation', hotelData);

    // Save to centralized storage service
    this.saveHotelToService();
  }

  private populateFormFromHotelData(hotel: ExtendedHotel): void {
    // Update basic info with hotel data
    this.updateFieldValue(this.basicInfoData, 'hotelname', hotel.hotelname);
    this.updateFieldValue(this.basicInfoData, 'hotelcode', hotel.hotelcode);
    this.updateFieldValue(this.basicInfoData, 'address', hotel.address);
    this.updateFieldValue(this.basicInfoData, 'country', hotel.country);
    this.updateFieldValue(this.basicInfoData, 'state', hotel.state);
    this.updateFieldValue(this.basicInfoData, 'city', hotel.city);
    this.updateFieldValue(this.basicInfoData, 'zipcode', hotel.zipcode);
    this.updateFieldValue(this.basicInfoData, 'phone', hotel.phone);
    this.updateFieldValue(
      this.basicInfoData,
      'hotelcategory',
      hotel.hotelcategory,
    );
    this.updateFieldValue(this.basicInfoData, 'fax', hotel.fax);
    this.updateFieldValue(this.basicInfoData, 'website', hotel.website);
    this.updateFieldValue(
      this.basicInfoData,
      'email',
      hotel.hotelemailid || hotel.email,
    );
    this.updateFieldValue(this.basicInfoData, 'description', hotel.description);
    this.updateFieldValue(
      this.basicInfoData,
      'rooms',
      hotel.noofrooms || hotel.totalrooms,
    );
    this.updateFieldValue(this.basicInfoData, 'services', hotel.services);
    this.updateFieldValue(this.basicInfoData, 'gstin', hotel.gstin);

    // Update billing address
    this.updateFieldValue(
      this.billingAddressData,
      'billing_address1',
      hotel.billingAddress1 || hotel.address,
    );
    this.updateFieldValue(
      this.billingAddressData,
      'billing_address2',
      hotel.billingAddress2,
    );
    this.updateFieldValue(
      this.billingAddressData,
      'billing_country',
      hotel.billingCountry || hotel.country,
    );
    this.updateFieldValue(
      this.billingAddressData,
      'billing_state',
      hotel.billingState || hotel.state,
    );
    this.updateFieldValue(
      this.billingAddressData,
      'billing_city',
      hotel.billingCity || hotel.city,
    );
    this.updateFieldValue(
      this.billingAddressData,
      'billing_zipcode',
      hotel.billingZipcode || hotel.zipcode,
    );
    this.updateFieldValue(
      this.billingAddressData,
      'billing_phone',
      hotel.billingPhone || hotel.phone,
    );
    this.updateFieldValue(
      this.billingAddressData,
      'billing_fax',
      hotel.billingFax || hotel.fax,
    );

    // Update billing contact
    this.updateFieldValue(
      this.billingContactData,
      'salutation',
      hotel.contactSalutation,
    );
    this.updateFieldValue(
      this.billingContactData,
      'first_name',
      hotel.contactFirstName,
    );
    this.updateFieldValue(
      this.billingContactData,
      'last_name',
      hotel.contactLastName,
    );
    this.updateFieldValue(
      this.billingContactData,
      'designation',
      hotel.contactDesignation,
    );
    this.updateFieldValue(
      this.billingContactData,
      'office_phone',
      hotel.contactOfficePhone || hotel.phone,
    );
    this.updateFieldValue(
      this.billingContactData,
      'office_fax',
      hotel.contactOfficeFax || hotel.fax,
    );
    this.updateFieldValue(
      this.billingContactData,
      'email_id',
      hotel.contactEmail || hotel.hotelemailid || hotel.email,
    );
    this.updateFieldValue(
      this.billingContactData,
      'mobile',
      hotel.contactMobile,
    );
  }

  private updateFieldValue(
    dataArray: HotelInfoRow[],
    fieldId: string,
    value: string | number | boolean | undefined,
  ): void {
    const field = dataArray.find((f) => f.id === fieldId);
    if (field && value !== undefined && value !== null && value !== '') {
      field.fieldValue = value;
    }
  }

  private saveHotelToService(): void {
    // Convert form data to hotel object for centralized storage
    const hotelData: ExtendedHotel = {
      id: 1, // Default hotel ID
      compid: 1, // Default company ID
      createdby: 1, // Default created by user ID
      modifiedby: 1, // Default modified by user ID
      status: 'active',
      hotelname: this.getFieldValue(this.basicInfoData, 'hotelname'),
      hotelcode: this.getFieldValue(this.basicInfoData, 'hotelcode'),
      address: this.getFieldValue(this.basicInfoData, 'address'),
      country: this.getFieldValue(this.basicInfoData, 'country'),
      state: this.getFieldValue(this.basicInfoData, 'state'),
      city: this.getFieldValue(this.basicInfoData, 'city'),
      zipcode: this.getFieldValue(this.basicInfoData, 'zipcode'),
      phone: this.getFieldValue(this.basicInfoData, 'phone'),
      hotelcategory: this.getFieldValue(this.basicInfoData, 'hotelcategory'),
      fax: this.getFieldValue(this.basicInfoData, 'fax'),
      website: this.getFieldValue(this.basicInfoData, 'website'),
      hotelemailid: this.getFieldValue(this.basicInfoData, 'email'),
      description: this.getFieldValue(this.basicInfoData, 'description'),
      noofrooms: Number(this.getFieldValue(this.basicInfoData, 'rooms')) || 0,
      services: this.getFieldValue(this.basicInfoData, 'services'),
      gstin: this.getFieldValue(this.basicInfoData, 'gstin'),

      // Billing address
      billingAddress1: this.getFieldValue(
        this.billingAddressData,
        'billing_address1',
      ),
      billingAddress2: this.getFieldValue(
        this.billingAddressData,
        'billing_address2',
      ),
      billingCountry: this.getFieldValue(
        this.billingAddressData,
        'billing_country',
      ),
      billingState: this.getFieldValue(
        this.billingAddressData,
        'billing_state',
      ),
      billingCity: this.getFieldValue(this.billingAddressData, 'billing_city'),
      billingZipcode: this.getFieldValue(
        this.billingAddressData,
        'billing_zipcode',
      ),
      billingPhone: this.getFieldValue(
        this.billingAddressData,
        'billing_phone',
      ),
      billingFax: this.getFieldValue(this.billingAddressData, 'billing_fax'),

      // Billing contact
      contactSalutation: this.getFieldValue(
        this.billingContactData,
        'salutation',
      ),
      contactFirstName: this.getFieldValue(
        this.billingContactData,
        'first_name',
      ),
      contactLastName: this.getFieldValue(this.billingContactData, 'last_name'),
      contactDesignation: this.getFieldValue(
        this.billingContactData,
        'designation',
      ),
      contactOfficePhone: this.getFieldValue(
        this.billingContactData,
        'office_phone',
      ),
      contactOfficeFax: this.getFieldValue(
        this.billingContactData,
        'office_fax',
      ),
      contactEmail: this.getFieldValue(this.billingContactData, 'email_id'),
      contactMobile: this.getFieldValue(this.billingContactData, 'mobile'),

      // Additional fields for hotel data structure
      createdDate: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
    };

    // Save to centralized storage service
    this.storageService.setHotel(hotelData as unknown as Record<string, unknown>);
    console.log('✅ Hotel data saved to centralized storage:', hotelData);
  }

  private getFieldValue(dataArray: HotelInfoRow[], fieldId: string): string {
    const field = dataArray.find((f) => f.id === fieldId);
    return field ? String(field.fieldValue || '') : '';
  }

  saveHotelInfo(): void {
    // Save to both legacy and centralized storage
    this.saveData();

    // Show success message
    this.snackBar.open(
      'Hotel information saved successfully to local storage!',
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['success-snackbar'],
      },
    );

    // Debug localStorage state
    console.log('🔍 Hotel Information Storage Debug:');
    this.storageService.debugStorage();
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
