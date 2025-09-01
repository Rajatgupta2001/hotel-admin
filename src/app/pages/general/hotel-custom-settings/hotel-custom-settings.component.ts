import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';

interface SettingCategory {
  name: string;
  icon: string;
  settings: SettingItem[];
  expanded?: boolean;
}

interface SettingItem {
  key: string;
  title: string;
  description?: string;
  type: 'dropdown' | 'text' | 'number' | 'checkbox' | 'textarea' | 'toggle';
  possibleValues?: string[];
  defaultValue?: string | number | boolean;
  isRequired?: boolean;
  value?: string | number | boolean;
  helpText?: string;
}

@Component({
  selector: 'app-hotel-custom-settings',
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
    MatExpansionModule,
    MatSlideToggleModule,
    MatDividerModule,
  ],
  template: `
    <div class="max-w-7xl mx-auto h-full">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">
          Hotel Custom Settings
        </h1>
        <p class="text-sm text-gray-600">
          Configure hotel-specific settings and preferences
        </p>
      </div>

      <div class="space-y-4">
        @for (category of settingCategories(); track category.name) {
          <mat-card class="!p-0">
            <mat-expansion-panel
              [expanded]="category.expanded"
              class="!shadow-none"
            >
              <mat-expansion-panel-header class="!h-16">
                <mat-panel-title
                  class="!font-semibold !text-base flex items-center"
                >
                  <mat-icon class="mr-3 text-blue-600">{{
                    category.icon
                  }}</mat-icon>
                  {{ category.name }}
                </mat-panel-title>
                <mat-panel-description class="!text-sm !text-gray-600">
                  {{ category.settings.length }} settings
                </mat-panel-description>
              </mat-expansion-panel-header>

              <div class="p-6 pt-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  @for (setting of category.settings; track setting.key) {
                    <div class="space-y-2">
                      <!-- Setting Label -->
                      <div class="flex items-center justify-between">
                        <div
                          class="text-sm font-medium text-gray-700 flex items-center"
                        >
                          {{ setting.title }}
                          @if (setting.isRequired) {
                            <span class="text-red-500 ml-1">*</span>
                          }
                        </div>
                        @if (setting.helpText) {
                          <mat-icon
                            class="text-gray-400 !text-lg cursor-help"
                            [matTooltip]="setting.helpText"
                            matTooltipPosition="left"
                          >
                            help_outline
                          </mat-icon>
                        }
                      </div>

                      <!-- Setting Description -->
                      @if (setting.description) {
                        <p class="text-xs text-gray-500">
                          {{ setting.description }}
                        </p>
                      }

                      <!-- Setting Input -->
                      <div class="mt-2">
                        @switch (setting.type) {
                          @case ('dropdown') {
                            <mat-form-field appearance="outline" class="w-full">
                              <mat-select
                                [formControl]="getFormControl(setting.key)"
                                [placeholder]="'Select ' + setting.title"
                              >
                                @for (
                                  option of setting.possibleValues;
                                  track option
                                ) {
                                  <mat-option [value]="option">{{
                                    option
                                  }}</mat-option>
                                }
                              </mat-select>
                            </mat-form-field>
                          }
                          @case ('text') {
                            <mat-form-field appearance="outline" class="w-full">
                              <input
                                matInput
                                [formControl]="getFormControl(setting.key)"
                                [placeholder]="'Enter ' + setting.title"
                              />
                            </mat-form-field>
                          }
                          @case ('number') {
                            <mat-form-field appearance="outline" class="w-full">
                              <input
                                matInput
                                type="number"
                                [formControl]="getFormControl(setting.key)"
                                [placeholder]="'Enter ' + setting.title"
                              />
                            </mat-form-field>
                          }
                          @case ('textarea') {
                            <mat-form-field appearance="outline" class="w-full">
                              <textarea
                                matInput
                                rows="3"
                                [formControl]="getFormControl(setting.key)"
                                [placeholder]="'Enter ' + setting.title"
                              >
                              </textarea>
                            </mat-form-field>
                          }
                          @case ('checkbox') {
                            <mat-checkbox
                              [formControl]="getFormControl(setting.key)"
                              class="!text-sm"
                            >
                              Enable {{ setting.title }}
                            </mat-checkbox>
                          }
                          @case ('toggle') {
                            <mat-slide-toggle
                              [formControl]="getFormControl(setting.key)"
                              class="!text-sm"
                            >
                              {{ setting.title }}
                            </mat-slide-toggle>
                          }
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>
            </mat-expansion-panel>
          </mat-card>
        }

        <!-- Save Button -->
        <div class="flex justify-end space-x-4 pt-6">
          <button
            mat-button
            type="button"
            (click)="resetToDefaults()"
            class="!text-gray-600"
          >
            <mat-icon class="mr-2">refresh</mat-icon>
            Reset to Defaults
          </button>
          <button
            mat-raised-button
            color="primary"
            (click)="saveSettings()"
            [disabled]="saving()"
            class="!px-8"
          >
            @if (saving()) {
              <mat-icon class="animate-spin mr-2">refresh</mat-icon>
            } @else {
              <mat-icon class="mr-2">save</mat-icon>
            }
            Save Settings
          </button>
        </div>
      </div>
    </div>
  `,
})
export class HotelCustomSettingsComponent {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private platformId = inject(PLATFORM_ID);

  saving = signal(false);
  form: FormGroup;

  settingCategories = signal<SettingCategory[]>([
    {
      name: 'Front Office',
      icon: 'business_center',
      expanded: true,
      settings: [
        {
          key: 'allowZeroAmount',
          title: 'Allow zero amount in manual posting',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Enable to allow posting of zero amount transactions',
        },
        {
          key: 'allowUpdateResAfterCheckin',
          title: 'Allow update of reservations after check-in',
          type: 'toggle',
          defaultValue: false,
          helpText:
            'Permit modification of reservation details after guest check-in',
        },
        {
          key: 'showNotesAtFrontdesk',
          title: 'Show notes at frontdesk',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Display guest notes on the front desk interface',
        },
        {
          key: 'showMembershipNumber',
          title: 'Show membership number',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Display membership numbers in guest profiles',
        },
        {
          key: 'hideDeclinedCardTransaction',
          title: 'Hide declined card transaction',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Hide declined credit card transactions from view',
        },
        {
          key: 'showRoomNumberOnToday',
          title: "Show room number on today's report",
          type: 'toggle',
          defaultValue: true,
          helpText: "Include room numbers in today's activity reports",
        },
      ],
    },
    {
      name: 'Reservation',
      icon: 'event_seat',
      expanded: false,
      settings: [
        {
          key: 'allowModifyLockedReservation',
          title: 'Allow modify locked reservation',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Enable modification of locked reservations',
        },
        {
          key: 'hideResRoomNumber',
          title: 'Hide Res Room Number',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Hide room numbers from reservation displays',
        },
        {
          key: 'minAdvanceBookingDays',
          title: 'Minimum advance booking days',
          type: 'number',
          defaultValue: 0,
          helpText: 'Minimum number of days required for advance booking',
        },
        {
          key: 'maxAdvanceBookingDays',
          title: 'Maximum advance booking days',
          type: 'number',
          defaultValue: 365,
          helpText: 'Maximum number of days allowed for advance booking',
        },
        {
          key: 'defaultReservationStatus',
          title: 'Default reservation status',
          type: 'dropdown',
          possibleValues: ['Confirmed', 'Tentative', 'Waitlist', 'Cancelled'],
          defaultValue: 'Confirmed',
          helpText: 'Default status for new reservations',
        },
        {
          key: 'allowGroupReservation',
          title: 'Allow group reservations',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Enable group booking functionality',
        },
      ],
    },
    {
      name: 'Housekeeping',
      icon: 'cleaning_services',
      expanded: false,
      settings: [
        {
          key: 'autoSetRoomClean',
          title: 'Auto set room to clean after checkout',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Automatically mark rooms as clean after guest checkout',
        },
        {
          key: 'requireHousekeepingInspection',
          title: 'Require housekeeping inspection',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Mandate housekeeping inspection before room availability',
        },
        {
          key: 'housekeepingTimeout',
          title: 'Housekeeping task timeout (hours)',
          type: 'number',
          defaultValue: 4,
          helpText: 'Maximum time allowed for housekeeping tasks',
        },
        {
          key: 'showMaintenanceRequests',
          title: 'Show maintenance requests',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Display maintenance requests in housekeeping interface',
        },
        {
          key: 'defaultRoomStatus',
          title: 'Default room status',
          type: 'dropdown',
          possibleValues: ['Clean', 'Dirty', 'Out of Order', 'Maintenance'],
          defaultValue: 'Clean',
          helpText: 'Default status for newly added rooms',
        },
      ],
    },
    {
      name: 'Rate & Pricing',
      icon: 'monetization_on',
      expanded: false,
      settings: [
        {
          key: 'allowNegativeRate',
          title: 'Allow negative rates',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Permit negative room rates for special cases',
        },
        {
          key: 'roundingMode',
          title: 'Rate rounding mode',
          type: 'dropdown',
          possibleValues: [
            'No Rounding',
            'Round to Nearest',
            'Round Up',
            'Round Down',
          ],
          defaultValue: 'Round to Nearest',
          helpText: 'Method for rounding calculated rates',
        },
        {
          key: 'baseCurrency',
          title: 'Base currency',
          type: 'dropdown',
          possibleValues: ['USD', 'EUR', 'GBP', 'INR', 'CAD', 'AUD'],
          defaultValue: 'USD',
          helpText: 'Primary currency for hotel operations',
        },
        {
          key: 'allowManualRateOverride',
          title: 'Allow manual rate override',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Enable manual override of calculated rates',
        },
        {
          key: 'showTaxInclusive',
          title: 'Show tax inclusive rates',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Display rates including taxes',
        },
        {
          key: 'defaultTaxRate',
          title: 'Default tax rate (%)',
          type: 'number',
          defaultValue: 10,
          helpText: 'Default tax percentage for new items',
        },
      ],
    },
    {
      name: 'Reports & Analytics',
      icon: 'analytics',
      expanded: false,
      settings: [
        {
          key: 'reportRetentionDays',
          title: 'Report retention days',
          type: 'number',
          defaultValue: 365,
          helpText: 'Number of days to retain generated reports',
        },
        {
          key: 'autoGenerateReports',
          title: 'Auto generate daily reports',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Automatically generate daily operational reports',
        },
        {
          key: 'reportFormat',
          title: 'Default report format',
          type: 'dropdown',
          possibleValues: ['PDF', 'Excel', 'CSV'],
          defaultValue: 'PDF',
          helpText: 'Default format for generated reports',
        },
        {
          key: 'includeGraphics',
          title: 'Include graphics in reports',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Include charts and graphs in reports',
        },
        {
          key: 'emailReports',
          title: 'Email reports to management',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Automatically email reports to management',
        },
      ],
    },
    {
      name: 'Security & Access',
      icon: 'security',
      expanded: false,
      settings: [
        {
          key: 'sessionTimeout',
          title: 'Session timeout (minutes)',
          type: 'number',
          defaultValue: 30,
          helpText: 'Automatic logout time for idle sessions',
        },
        {
          key: 'requirePasswordChange',
          title: 'Require periodic password change',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Force users to change passwords periodically',
        },
        {
          key: 'passwordChangeInterval',
          title: 'Password change interval (days)',
          type: 'number',
          defaultValue: 90,
          helpText: 'Days between required password changes',
        },
        {
          key: 'auditTrail',
          title: 'Enable audit trail',
          type: 'toggle',
          defaultValue: true,
          helpText: 'Log all user actions for security auditing',
        },
        {
          key: 'twoFactorAuth',
          title: 'Two-factor authentication',
          type: 'toggle',
          defaultValue: false,
          helpText: 'Require two-factor authentication for login',
        },
      ],
    },
  ]);

  constructor() {
    this.form = this.fb.group({});
    this.initializeForm();
    this.loadSettings();
  }

  private initializeForm(): void {
    const controls: Record<string, FormControl> = {};

    this.settingCategories().forEach((category) => {
      category.settings.forEach((setting) => {
        controls[setting.key] = new FormControl(setting.defaultValue);
      });
    });

    this.form = this.fb.group(controls);
  }

  private loadSettings(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedSettings = localStorage.getItem('hotelCustomSettings');
      if (savedSettings) {
        try {
          const settings = JSON.parse(savedSettings);
          this.form.patchValue(settings);
        } catch (error) {
          console.error('Error loading settings:', error);
        }
      }
    }
  }

  getFormControl(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  saveSettings(): void {
    this.saving.set(true);

    const settings = this.form.value;

    // Simulate API call
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('hotelCustomSettings', JSON.stringify(settings));
      }

      this.snackBar.open('Settings saved successfully!', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar'],
      });

      this.saving.set(false);
    }, 1000);
  }

  resetToDefaults(): void {
    if (
      confirm(
        'Are you sure you want to reset all settings to their default values? This action cannot be undone.',
      )
    ) {
      const defaultValues: Record<string, string | number | boolean> = {};

      this.settingCategories().forEach((category) => {
        category.settings.forEach((setting) => {
          defaultValues[setting.key] = setting.defaultValue || '';
        });
      });

      this.form.patchValue(defaultValues);

      this.snackBar.open('Settings reset to defaults', 'Close', {
        duration: 3000,
        panelClass: ['info-snackbar'],
      });
    }
  }
}
