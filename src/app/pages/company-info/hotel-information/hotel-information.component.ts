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

// No custom renderers needed; use built-in editors/renderers for reliability

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

        <!-- Plain note under the last grid (not part of any grid) -->
        <div class="note-text">
          Note: Fields marked with an * are compulsory
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

      /* Plain note under grids */
      .note-text {
        margin: 12px 2px 0 2px;
        color: #6b7280;
        font-style: italic;
        font-size: 12px;
      }

  /* AG Grid Theme Customization - scaled down content; headers hidden */
      ::ng-deep .ag-theme-material {
        --ag-border-color: #e5e7eb;
        --ag-header-background-color: #f9fafb;
        --ag-header-foreground-color: #374151;
        --ag-odd-row-background-color: #ffffff;
        --ag-even-row-background-color: #f9fafb;
        --ag-row-hover-color: #e0e7ff;
        --ag-selected-row-background-color: #dbeafe;
        --ag-font-family: 'Roboto', sans-serif;
        /* Reduce base font-size and row/list heights by ~30% */
        --ag-font-size: 9px; /* ~70% of 13px */
        --ag-row-height: 25px; /* ~70% of 36px */
        --ag-header-height: 0px; /* hide header */
        --ag-list-item-height: 25px;
      }

      ::ng-deep .ag-theme-material .ag-header {
        display: none !important;
        height: 0 !important;
        min-height: 0 !important;
        max-height: 0 !important;
        border-bottom: none !important;
      }

      ::ng-deep .ag-theme-material .ag-header-cell {
        border-right: 1px solid #e5e7eb;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 32px;
        line-height: 1.1;
        font-size: 13px; /* keep header font size same */
        font-weight: 600;
      }

      ::ng-deep .ag-theme-material .ag-cell {
        border-bottom: 1px solid #f3f4f6;
        border-right: 1px solid #f3f4f6;
        padding: 2px 4px; /* scaled padding */
        line-height: 1.2;
        height: 25px; /* match row height */
        min-height: 25px;
        max-height: 25px;
        display: flex;
        align-items: center;
        overflow: visible;
      }

      ::ng-deep .ag-theme-material .ag-row {
        transition: background-color 0.2s ease;
        height: 25px;
        min-height: 25px;
        max-height: 25px;
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
  rowHeight: 25, // reduced ~30%
    headerHeight: 0,
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

  // Sanitize helper: remove static demo values and coerce invalid types
  private sanitizeRows(rows: HotelInfoRow[]): HotelInfoRow[] {
    const sampleValues = new Set<string>([
      'Marriott',
      '2023, 46TH',
      'India',
      'Select State',
      'New Delhi',
      '110092',
      '+918851696602',
      'My Designation',
      'rajat.gupta@hotelogix.com',
      'Mr.',
      'Select Hotel Category',
      'Choose file',
    ]);
    return rows.map((row) => {
      const r: HotelInfoRow = { ...row };
      if (r.fieldType === 'checkbox') return r; // keep boolean
  const v = r.fieldValue;
  // Coerce non-string (boolean/number/null) to '' for non-checkbox fields
  let val: string = typeof v === 'string' ? v : '';
      // Remove known sample values
      if (sampleValues.has((val || '').trim())) {
        val = '';
      }
      // For dropdown, ensure value is valid option
      if (r.fieldType === 'dropdown' && r.options) {
        if (!r.options.includes(val)) val = '';
      }
      r.fieldValue = val;
      return r;
    });
  }

  initializeData(): void {
    // Basic Hotel Information (matching the image exactly)
    this.basicInfoData = [
      {
        id: 'hotelname',
        fieldName: 'Name of the Hotel/Property*',
  fieldValue: '',
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
  fieldValue: '',
        fieldType: 'file',
        required: false,
        editable: false,
        section: 'basic',
      },
      {
        id: 'uploadphoto',
        fieldName: 'Upload Photos',
  fieldValue: '',
        fieldType: 'file',
        required: false,
        editable: false,
        section: 'basic',
      },
      {
        id: 'address',
        fieldName: 'Address*',
  fieldValue: '',
        fieldType: 'textarea',
        placeholder: 'Enter address',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'country',
        fieldName: 'Country*',
  fieldValue: '',
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
  fieldValue: '',
        fieldType: 'dropdown',
  options: ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat'],
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'city',
        fieldName: 'City*',
  fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter city',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'zipcode',
        fieldName: 'Zip Code*',
  fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter zip code',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'phone',
        fieldName: 'Phone*',
  fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter phone number',
        required: true,
        editable: true,
        section: 'basic',
      },
      {
        id: 'hotelcategory',
        fieldName: 'Hotel Category',
  fieldValue: '',
        fieldType: 'dropdown',
  options: ['5 Star', '4 Star', '3 Star', '2 Star', 'Budget'],
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
  fieldValue: '',
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
  fieldValue: '',
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
        fieldValue: '',
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
        fieldValue: '',
        fieldType: 'dropdown',
        options: [
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
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter city',
        required: true,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_zipcode',
        fieldName: 'Zip Code*',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter zip code',
        required: true,
        editable: true,
        section: 'billing',
      },
      {
        id: 'billing_phone',
        fieldName: 'Office Phone*',
        fieldValue: '',
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
        fieldValue: '',
        fieldType: 'dropdown',
        options: ['Mr.', 'Ms.', 'Mrs.', 'Dr.'],
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'first_name',
        fieldName: 'First Name*',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter first name',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'last_name',
        fieldName: 'Last Name*',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter last name',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'designation',
        fieldName: 'Designation*',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter designation',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'office_phone',
        fieldName: 'Office Phone*',
        fieldValue: '',
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
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter email address',
        required: true,
        editable: true,
        section: 'contact',
      },
      {
        id: 'mobile',
        fieldName: 'Mobile',
        fieldValue: '',
        fieldType: 'text',
        placeholder: 'Enter mobile number',
        required: false,
        editable: true,
        section: 'contact',
      },
    ];
  }

  getColumnDefs(): ColDef[] {
    return [
      {
  headerName: '',
        field: 'fieldName',
        width: 300,
        cellStyle: {
          fontWeight: '600',
          color: '#374151',
          padding: '6px 10px',
          background: '#f8f9fa',
          fontSize: '9px', // reduced ~30%
        },
        suppressSizeToFit: true,
      },
      {
  headerName: '',
        field: 'fieldValue',
        flex: 1,
        // Renderer will provide inline inputs; disable ag-Grid editors
        editable: () => false,
        cellRenderer: (params: ICellRendererParams) => {
          const data = params.data as HotelInfoRow;
          // For non-editable rows, show placeholder/greyed text
          if (!data.editable) {
            const text = params.value ?? data.placeholder ?? '';
            return `<span style="color:#6b7280;font-style:italic;padding:2px 4px;">${
              String(text)
            }</span>`;
          }
          // Styles shared by inputs to match reduced row height
          const baseInputStyles = 'box-sizing:border-box;width:100%;height:100%;padding:2px 4px;border:1px solid #e5e7eb;border-radius:3px;background:#fff;font-size:9px;line-height:1.2;outline:none;';

          // For checkbox, render a real checkbox that toggles value
          if (data.fieldType === 'checkbox') {
            const wrapper = document.createElement('div');
            wrapper.style.display = 'flex';
            wrapper.style.alignItems = 'center';
            wrapper.style.justifyContent = 'center';
            wrapper.style.height = '100%';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const v = params.value;
            checkbox.checked = v === true || v === 'true' || v === 1;
            checkbox.addEventListener('change', () => {
              // let ag-Grid handle value updates to trigger events/storage
              if (typeof params.setValue === 'function') {
                params.setValue(checkbox.checked);
              } else if (params.data) {
                (params.data as HotelInfoRow).fieldValue = checkbox.checked;
              }
            });
            wrapper.appendChild(checkbox);
            return wrapper;
          }
          // For dropdown, render a select input
          if (data.fieldType === 'dropdown' && data.options) {
            const select = document.createElement('select');
            select.setAttribute('style', baseInputStyles);
            const opts = data.options as string[];
            // Add placeholder option when empty
            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.textContent = data.placeholder || 'Select …';
            placeholder.disabled = false;
            placeholder.selected = (params.value == null || params.value === '');
            select.appendChild(placeholder);
            opts.forEach((opt) => {
              const optionEl = document.createElement('option');
              optionEl.value = opt;
              optionEl.textContent = opt;
              if (String(params.value ?? '') === opt) optionEl.selected = true;
              select.appendChild(optionEl);
            });
            select.addEventListener('change', () => {
              if (typeof params.setValue === 'function') {
                params.setValue(select.value);
              } else if (params.data) {
                (params.data as HotelInfoRow).fieldValue = select.value;
              }
            });
            return select;
          }
          // For textarea, render a single-row textarea with placeholder
          if (data.fieldType === 'textarea') {
            const ta = document.createElement('textarea');
            ta.setAttribute('rows', '2');
            ta.setAttribute('style', baseInputStyles + 'resize:vertical;');
            if (data.placeholder) ta.placeholder = data.placeholder;
            ta.value = params.value != null ? String(params.value) : '';
            ta.addEventListener('input', () => {
              if (typeof params.setValue === 'function') {
                params.setValue(ta.value);
              } else if (params.data) {
                (params.data as HotelInfoRow).fieldValue = ta.value;
              }
            });
            return ta;
          }
          // Default to a text input with placeholder
          const input = document.createElement('input');
          input.type = 'text';
          input.setAttribute('style', baseInputStyles);
          if (data.placeholder) input.placeholder = data.placeholder;
          input.value = params.value != null ? String(params.value) : '';
          input.addEventListener('input', () => {
            if (typeof params.setValue === 'function') {
              params.setValue(input.value);
            } else if (params.data) {
              (params.data as HotelInfoRow).fieldValue = input.value;
            }
          });
          return input;
          // Otherwise use default cell content
          // return undefined;
        },
        // No cellEditor needed; renderer handles edits inline
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
      if (savedData.basicInfo)
        this.basicInfoData = this.sanitizeRows(savedData.basicInfo);
      if (savedData.billingAddress)
        this.billingAddressData = this.sanitizeRows(
          savedData.billingAddress,
        );
      if (savedData.billingContact)
        this.billingContactData = this.sanitizeRows(
          savedData.billingContact.filter((row) => row.id !== 'company_note'),
        );
      // Persist sanitized data back
      this.saveData();
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
