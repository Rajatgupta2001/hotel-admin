import { Component, inject, signal, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-default-settings',
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
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  template: `
    <div class="default-settings-container">
      <!-- Header -->
      <div class="header-section">
        <div class="header-content">
          <mat-icon class="header-icon">settings</mat-icon>
          <h1 class="header-title">Default Settings</h1>
        </div>
        <p class="header-subtitle">Main / Default Settings</p>
      </div>

      <form [formGroup]="settingsForm" (ngSubmit)="onSave()">
        <!-- Global Settings Section -->
        <mat-card class="settings-section">
          <mat-card-header>
            <mat-card-title class="section-title"
              >Global Settings</mat-card-title
            >
          </mat-card-header>
          <mat-card-content>
            <div class="form-grid">
              <div class="form-row">
                <mat-form-field appearance="outline" class="form-field">
                  <mat-label>Default Language</mat-label>
                  <mat-select formControlName="defaultLanguage">
                    <mat-option value="english">English</mat-option>
                    <mat-option value="spanish">Spanish</mat-option>
                    <mat-option value="french">French</mat-option>
                  </mat-select>
                </mat-form-field>

                <mat-form-field appearance="outline" class="form-field">
                  <mat-label>Default Currency</mat-label>
                  <mat-select formControlName="defaultCurrency">
                    <mat-option value="INR"
                      >India, Rupees (Rs or Rs. are commonly used
                      instead)</mat-option
                    >
                    <mat-option value="USD">US Dollar</mat-option>
                    <mat-option value="EUR">Euro</mat-option>
                  </mat-select>
                  <mat-hint>The currency symbol is: Rs.</mat-hint>
                </mat-form-field>
              </div>

              <div class="form-row">
                <mat-form-field appearance="outline" class="form-field">
                  <mat-label>Financial Year</mat-label>
                  <input
                    matInput
                    [matDatepicker]="financialYearPicker"
                    formControlName="financialYearStart"
                    placeholder="1 January to 31 December"
                  />
                  <mat-datepicker-toggle
                    matSuffix
                    [for]="financialYearPicker"
                  ></mat-datepicker-toggle>
                  <mat-datepicker #financialYearPicker></mat-datepicker>
                  <mat-hint>Click to change</mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline" class="form-field">
                  <mat-label>Currency Conversion Rate</mat-label>
                  <mat-select formControlName="currencyConversionRate">
                    <mat-option value="automatic">Automatic</mat-option>
                    <mat-option value="manual">Manual</mat-option>
                  </mat-select>
                  <mat-hint>Click to change</mat-hint>
                </mat-form-field>
              </div>

              <div class="form-row">
                <mat-form-field appearance="outline" class="form-field">
                  <mat-label>Currency Conversion Margin %</mat-label>
                  <input
                    matInput
                    type="number"
                    formControlName="currencyConversionMargin"
                  />
                  <mat-hint>Click to change</mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline" class="form-field">
                  <mat-label>Currency Decimal Places</mat-label>
                  <input
                    matInput
                    type="number"
                    formControlName="currencyDecimalPlaces"
                    placeholder="0 Decimal Places"
                  />
                  <mat-hint>Click to change, rounding off limit 0.5</mat-hint>
                </mat-form-field>
              </div>

              <div class="checkbox-grid">
                <div class="checkbox-row">
                  <mat-checkbox
                    formControlName="accountStatementInvoicesExclusive"
                  >
                    Account statement/Invoices Exclusive of Tax(es)
                  </mat-checkbox>
                  <span class="checkbox-hint">Yes - Click to change</span>
                </div>

                <div class="checkbox-row">
                  <mat-checkbox formControlName="taxFeeBreakupInvoiceFolio">
                    Tax/Fee Break up in Invoice/Folio
                  </mat-checkbox>
                  <span class="checkbox-hint">Yes - Click to change</span>
                </div>

                <div class="checkbox-row">
                  <mat-checkbox formControlName="displayTaxPercentage">
                    Display Tax percentage
                  </mat-checkbox>
                  <mat-checkbox
                    formControlName="showTaxAsPosReceipt"
                    class="secondary-checkbox"
                  >
                    Show Tax as POS Receipt
                  </mat-checkbox>
                </div>

                <div class="checkbox-row">
                  <mat-checkbox formControlName="taxFeeBreakupAccountStatement">
                    Tax/Fee Break up in Account Statement
                  </mat-checkbox>
                  <span class="checkbox-hint">Yes - Click to change</span>
                </div>

                <div class="checkbox-row">
                  <mat-checkbox formControlName="adjustmentInvoiceFolio">
                    Adjustment in Invoice/Folio
                  </mat-checkbox>
                  <span class="checkbox-hint">No - Click to change</span>
                </div>

                <div class="checkbox-row">
                  <mat-form-field appearance="outline" class="date-field">
                    <mat-label>Account Folio Date</mat-label>
                    <input
                      matInput
                      [matDatepicker]="folioDatePicker"
                      formControlName="accountFolioDate"
                    />
                    <mat-datepicker-toggle
                      matSuffix
                      [for]="folioDatePicker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #folioDatePicker></mat-datepicker>
                    <mat-hint>Closing Date - Click to change</mat-hint>
                  </mat-form-field>
                </div>

                <div class="checkbox-row">
                  <mat-checkbox formControlName="showDepositAlertOnCheckIn">
                    Show Deposit Alert on Check-in
                  </mat-checkbox>
                  <span class="checkbox-hint">No - Click to change</span>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Room Type and Special Rooms Section -->
        <mat-card class="settings-section">
          <mat-card-header>
            <mat-card-title class="section-title"
              >You book Room Type(s) and not specific Room(s) / Room
              Number(s)</mat-card-title
            >
          </mat-card-header>
          <mat-card-content>
            <div class="weekdays-section">
              <div class="weekdays-header">
                <span class="weekdays-label">High Weekdays</span>
                <span class="rooms-label">(Rooms reservations)</span>
              </div>
              <div class="weekdays-checkboxes">
                <mat-checkbox formControlName="highWeekdaysMon"
                  >Mon</mat-checkbox
                >
                <mat-checkbox formControlName="highWeekdaysTue"
                  >Tue</mat-checkbox
                >
                <mat-checkbox formControlName="highWeekdaysWed"
                  >Wed</mat-checkbox
                >
                <mat-checkbox formControlName="highWeekdaysThu"
                  >Thu</mat-checkbox
                >
                <mat-checkbox formControlName="highWeekdaysFri"
                  >Fri</mat-checkbox
                >
                <mat-checkbox formControlName="highWeekdaysSat"
                  >Sat</mat-checkbox
                >
                <mat-checkbox formControlName="highWeekdaysSun"
                  >Sun</mat-checkbox
                >
                <span class="weekdays-hint">phone skip if not applicable</span>
              </div>
              <div class="upgrade-note">
                For free upgrade charge will apply on these special nights
                (automatically)
              </div>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline" class="form-field">
                <mat-label>High Weekdays Start From</mat-label>
                <mat-select formControlName="highWeekdaysStartFrom">
                  <mat-option value="00:00">00:00 Hours To</mat-option>
                  <mat-option value="06:00">06:00 Hours To</mat-option>
                  <mat-option value="12:00">12:00 Hours To</mat-option>
                </mat-select>
                <mat-hint>00:00 Hours - Click to change</mat-hint>
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline" class="form-field">
                <mat-label>Date Format</mat-label>
                <mat-select formControlName="dateFormat">
                  <mat-option value="M/d/yy">M/d/yy</mat-option>
                  <mat-option value="dd/MM/yyyy">dd/MM/yyyy</mat-option>
                  <mat-option value="yyyy-MM-dd">yyyy-MM-dd</mat-option>
                </mat-select>
                <mat-hint>Click to change</mat-hint>
              </mat-form-field>

              <mat-form-field appearance="outline" class="form-field">
                <mat-label>Time Zone Location</mat-label>
                <mat-select formControlName="timeZoneLocation">
                  <mat-option value="asia/calcutta"
                    >Asia/Calcutta (+05:30)</mat-option
                  >
                  <mat-option value="america/new_york"
                    >America/New_York</mat-option
                  >
                  <mat-option value="europe/london">Europe/London</mat-option>
                </mat-select>
                <mat-hint>Click to change</mat-hint>
              </mat-form-field>
            </div>

            <div class="current-time">
              Current date and time: 8/19/25 12:05:16 PM
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline" class="form-field">
                <mat-label>Time Format</mat-label>
                <mat-select formControlName="timeFormat">
                  <mat-option value="12">12 Hours</mat-option>
                  <mat-option value="24">24 Hours</mat-option>
                </mat-select>
                <mat-hint>Click to change</mat-hint>
              </mat-form-field>

              <mat-form-field appearance="outline" class="form-field">
                <mat-label>Check-in Time</mat-label>
                <input matInput type="time" formControlName="checkInTime" />
                <mat-hint>Click to change</mat-hint>
              </mat-form-field>

              <mat-form-field appearance="outline" class="form-field">
                <mat-label>Check-out Time</mat-label>
                <input matInput type="time" formControlName="checkOutTime" />
                <mat-hint>Click to change</mat-hint>
              </mat-form-field>
            </div>

            <div class="guest-age-section">
              <div class="age-settings">
                <div class="age-setting">
                  <span class="age-label">Guest less than</span>
                  <mat-form-field appearance="outline" class="age-input">
                    <input
                      matInput
                      type="number"
                      formControlName="guestLessThanChild"
                      value="12"
                    />
                  </mat-form-field>
                  <span class="age-text">years of age</span>
                  <span class="age-status">will be considered Child</span>
                  <a href="#" class="change-link">Click to change</a>
                </div>

                <div class="age-setting">
                  <span class="age-label">Minimum Child Age</span>
                  <mat-form-field appearance="outline" class="age-input">
                    <input
                      matInput
                      type="number"
                      formControlName="minimumChildAge"
                      value="5"
                    />
                  </mat-form-field>
                  <span class="age-text">years of age</span>
                  <a href="#" class="change-link">Click to change</a>
                </div>

                <div class="age-setting">
                  <span class="age-label">Guest less than</span>
                  <mat-form-field appearance="outline" class="age-input">
                    <input
                      matInput
                      type="number"
                      formControlName="guestLessThanInfant"
                      value="3"
                    />
                  </mat-form-field>
                  <span class="age-text">years of age</span>
                  <span class="age-status">will be considered Infant</span>
                  <a href="#" class="change-link">Click to change</a>
                </div>
              </div>
            </div>

            <div class="commission-section">
              <div class="commission-row">
                <span class="commission-label"
                  >Global Travel Agent Commission</span
                >
                <mat-form-field appearance="outline" class="commission-input">
                  <input
                    matInput
                    type="number"
                    formControlName="globalTravelAgentCommission"
                    value="0"
                  />
                  <span matSuffix>%</span>
                </mat-form-field>
                <a href="#" class="change-link">Click to change</a>
              </div>

              <div class="commission-row">
                <span class="commission-label">Global Corporate Discount</span>
                <mat-form-field appearance="outline" class="commission-input">
                  <input
                    matInput
                    type="number"
                    formControlName="globalCorporateDiscount"
                    value="0"
                  />
                  <span matSuffix>%</span>
                </mat-form-field>
                <a href="#" class="change-link">Click to change</a>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Night Audit Section -->
        <mat-card class="settings-section">
          <mat-card-header>
            <mat-card-title class="section-title">Night Audit</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="audit-settings">
              <div class="audit-row">
                <span class="audit-label"
                  >The Night Audit or roll over will not happen before</span
                >
                <mat-form-field appearance="outline" class="time-input">
                  <input
                    matInput
                    [matDatepicker]="auditDatePicker"
                    formControlName="nightAuditDate"
                  />
                  <mat-datepicker-toggle
                    matSuffix
                    [for]="auditDatePicker"
                  ></mat-datepicker-toggle>
                  <mat-datepicker #auditDatePicker></mat-datepicker>
                </mat-form-field>
                <span class="audit-text">Next Calendar Date</span>
                <a href="#" class="change-link">Click to change</a>
              </div>

              <div class="audit-checkbox">
                <span class="audit-note"
                  >On Auto Night Audit mark all rooms pending check</span
                >
                <mat-select
                  formControlName="autoNightAuditCheck"
                  class="audit-select"
                >
                  <mat-option value="checkin">Check-in</mat-option>
                  <mat-option value="checkout">Check-out</mat-option>
                </mat-select>
                <span class="audit-text">automatically.</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Housekeeping Settings Section -->
        <mat-card class="settings-section">
          <mat-card-header>
            <mat-card-title class="section-title"
              >House Keeping Settings</mat-card-title
            >
          </mat-card-header>
          <mat-card-content>
            <div class="housekeeping-settings">
              <div class="housekeeping-row">
                <span class="housekeeping-label">On Every</span>
                <mat-form-field appearance="outline" class="number-input">
                  <input
                    matInput
                    type="number"
                    formControlName="housekeepingEvery1"
                    value="1"
                  />
                </mat-form-field>
                <span class="housekeeping-text"
                  >Night Audit or roll over mark all occupied rooms to</span
                >
                <mat-select
                  formControlName="housekeepingMark1"
                  class="status-select"
                >
                  <mat-option value="dirty">Dirty</mat-option>
                  <mat-option value="clean">Clean</mat-option>
                </mat-select>
                <a href="#" class="change-link">Click to change</a>
              </div>

              <div class="housekeeping-row">
                <span class="housekeeping-label">On Every</span>
                <mat-form-field appearance="outline" class="number-input">
                  <input
                    matInput
                    type="number"
                    formControlName="housekeepingEvery2"
                    value="1"
                  />
                </mat-form-field>
                <span class="housekeeping-text"
                  >Night Audit or roll over mark all Vacant rooms to</span
                >
                <mat-select
                  formControlName="housekeepingMark2"
                  class="status-select"
                >
                  <mat-option value="houseup">HouseUp</mat-option>
                  <mat-option value="dirty">Dirty</mat-option>
                </mat-select>
                <a href="#" class="change-link">Click to change</a>
              </div>

              <div class="housekeeping-checkboxes">
                <div class="housekeeping-checkbox">
                  <span class="housekeeping-label"
                    >Mark the checkout rooms to</span
                  >
                  <mat-select
                    formControlName="checkoutRoomsMark1"
                    class="status-select"
                  >
                    <mat-option value="dirty">Dirty</mat-option>
                    <mat-option value="inspect">Inspect</mat-option>
                  </mat-select>
                  <a href="#" class="change-link">Click to change</a>
                </div>

                <div class="housekeeping-checkbox">
                  <span class="housekeeping-label"
                    >Mark the checkout rooms to</span
                  >
                  <mat-select
                    formControlName="checkoutRoomsMark2"
                    class="status-select"
                  >
                    <mat-option value="inspect">Inspect</mat-option>
                    <mat-option value="dirty">Dirty</mat-option>
                  </mat-select>
                  <a href="#" class="change-link">Click to change</a>
                </div>

                <div class="housekeeping-checkbox">
                  <span class="housekeeping-label"
                    >Mark the Cancel Check-in as rooms to</span
                  >
                  <mat-select
                    formControlName="cancelCheckInMark"
                    class="status-select"
                  >
                    <mat-option value="inspect">Inspect</mat-option>
                    <mat-option value="dirty">Dirty</mat-option>
                  </mat-select>
                  <a href="#" class="change-link">Click to change</a>
                </div>

                <div class="housekeeping-checkbox">
                  <span class="housekeeping-label"
                    >On DRO service avail room status no</span
                  >
                  <mat-select
                    formControlName="droServiceMark"
                    class="status-select"
                  >
                    <mat-option value="inspect">Inspect</mat-option>
                    <mat-option value="dirty">Dirty</mat-option>
                  </mat-select>
                  <a href="#" class="change-link">Click to change</a>
                </div>

                <div class="housekeeping-checkbox">
                  <mat-checkbox formControlName="additionalServiceImpact">
                    Additional service will impact service schedule No
                  </mat-checkbox>
                  <a href="#" class="change-link">Click to change</a>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="saving()"
          >
            @if (saving()) {
              <mat-icon class="animate-spin">refresh</mat-icon>
            }
            Save Changes
          </button>
          <button mat-button type="button" (click)="onCancel()">Cancel</button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .default-settings-container {
        padding: 16px;
        max-width: 1200px;
        margin: 0 auto;
        font-size: 10px;
      }

      .header-section {
        margin-bottom: 20px;
      }

      .header-content {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 4px;
      }

      .header-icon {
        color: var(--md-sys-color-primary);
        font-size: 20px;
      }

      .header-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--md-sys-color-on-surface);
        margin: 0;
      }

      .header-subtitle {
        font-size: 10px;
        color: var(--md-sys-color-on-surface-variant);
        margin: 0;
      }

      .settings-section {
        margin-bottom: 16px;
      }

      .section-title {
        font-size: 12px;
        font-weight: 600;
        color: var(--md-sys-color-primary);
      }

      .form-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .form-row {
        display: flex;
        gap: 16px;
        align-items: flex-start;
      }

      .form-field {
        flex: 1;
        min-width: 200px;
      }

      .checkbox-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 16px;
      }

      .checkbox-row {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 32px;
      }

      .checkbox-hint {
        font-size: 9px;
        color: var(--md-sys-color-on-surface-variant);
        margin-left: auto;
      }

      .secondary-checkbox {
        margin-left: 16px;
      }

      .date-field {
        width: 200px;
      }

      .weekdays-section {
        margin: 16px 0;
      }

      .weekdays-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .weekdays-label {
        font-weight: 600;
        font-size: 10px;
      }

      .rooms-label {
        font-size: 9px;
        color: var(--md-sys-color-on-surface-variant);
      }

      .weekdays-checkboxes {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }

      .weekdays-hint {
        font-size: 9px;
        color: var(--md-sys-color-on-surface-variant);
        margin-left: 8px;
      }

      .upgrade-note {
        font-size: 9px;
        color: var(--md-sys-color-on-surface-variant);
        margin-top: 4px;
        font-style: italic;
      }

      .current-time {
        font-size: 10px;
        color: var(--md-sys-color-on-surface-variant);
        margin: 8px 0;
        text-align: center;
      }

      .guest-age-section {
        margin: 16px 0;
      }

      .age-settings {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .age-setting {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }

      .age-label {
        font-size: 10px;
        min-width: 120px;
      }

      .age-input {
        width: 60px;
      }

      .age-text {
        font-size: 10px;
      }

      .age-status {
        font-size: 10px;
        font-weight: 500;
      }

      .change-link {
        font-size: 9px;
        color: var(--md-sys-color-primary);
        text-decoration: none;
      }

      .change-link:hover {
        text-decoration: underline;
      }

      .commission-section {
        margin: 16px 0;
      }

      .commission-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .commission-label {
        font-size: 10px;
        min-width: 200px;
      }

      .commission-input {
        width: 80px;
      }

      .audit-settings {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .audit-row {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }

      .audit-label {
        font-size: 10px;
      }

      .audit-text {
        font-size: 10px;
      }

      .time-input {
        width: 150px;
      }

      .audit-checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }

      .audit-note {
        font-size: 10px;
      }

      .audit-select {
        width: 100px;
      }

      .housekeeping-settings {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .housekeeping-row {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }

      .housekeeping-label {
        font-size: 10px;
      }

      .housekeeping-text {
        font-size: 10px;
      }

      .number-input {
        width: 60px;
      }

      .status-select {
        width: 100px;
      }

      .housekeeping-checkboxes {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
      }

      .housekeeping-checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .action-buttons {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-top: 24px;
        padding: 16px;
      }

      /* Responsive design */
      @media (max-width: 768px) {
        .form-row {
          flex-direction: column;
        }

        .weekdays-checkboxes {
          flex-direction: column;
          align-items: flex-start;
        }

        .age-setting,
        .commission-row,
        .audit-row,
        .housekeeping-row {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      /* Material Design 3 form field overrides */
      ::ng-deep .mat-mdc-form-field {
        font-size: 10px;
      }

      ::ng-deep .mat-mdc-form-field .mat-mdc-form-field-label {
        font-size: 9px;
      }

      ::ng-deep .mat-mdc-input-element {
        font-size: 10px;
      }

      ::ng-deep .mat-mdc-select-value {
        font-size: 10px;
      }

      ::ng-deep .mat-mdc-option {
        font-size: 10px;
      }

      ::ng-deep .mat-mdc-checkbox .mdc-form-field {
        font-size: 10px;
      }

      ::ng-deep .mat-mdc-card-title {
        font-size: 12px;
      }

      ::ng-deep .mat-mdc-card-content {
        font-size: 10px;
      }
    `,
  ],
})
export class DefaultSettingsComponent implements OnInit {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private platformId = inject(PLATFORM_ID);

  saving = signal(false);
  settingsForm!: FormGroup;

  constructor() {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadDefaultSettings();
  }

  private initializeForm(): void {
    this.settingsForm = this.fb.group({
      // Global Settings
      defaultLanguage: ['english'],
      defaultCurrency: ['INR'],
      financialYearStart: [new Date()],
      currencyConversionRate: ['automatic'],
      currencyConversionMargin: [0],
      currencyDecimalPlaces: [0],
      accountStatementInvoicesExclusive: [true],
      taxFeeBreakupInvoiceFolio: [true],
      displayTaxPercentage: [true],
      showTaxAsPosReceipt: [false],
      taxFeeBreakupAccountStatement: [true],
      adjustmentInvoiceFolio: [false],
      accountFolioDate: [new Date()],
      showDepositAlertOnCheckIn: [false],

      // High Weekdays
      highWeekdaysMon: [false],
      highWeekdaysTue: [false],
      highWeekdaysWed: [false],
      highWeekdaysThu: [false],
      highWeekdaysFri: [false],
      highWeekdaysSat: [false],
      highWeekdaysSun: [false],
      highWeekdaysStartFrom: ['00:00'],

      // Date/Time Settings
      dateFormat: ['M/d/yy'],
      timeZoneLocation: ['asia/calcutta'],
      timeFormat: ['12'],
      checkInTime: ['12:00'],
      checkOutTime: ['12:00'],

      // Guest Age Settings
      guestLessThanChild: [12],
      minimumChildAge: [5],
      guestLessThanInfant: [3],

      // Commission Settings
      globalTravelAgentCommission: [0],
      globalCorporateDiscount: [0],

      // Night Audit
      nightAuditDate: [new Date()],
      autoNightAuditCheck: ['checkin'],

      // Housekeeping
      housekeepingEvery1: [1],
      housekeepingMark1: ['dirty'],
      housekeepingEvery2: [1],
      housekeepingMark2: ['houseup'],
      checkoutRoomsMark1: ['dirty'],
      checkoutRoomsMark2: ['inspect'],
      cancelCheckInMark: ['inspect'],
      droServiceMark: ['inspect'],
      additionalServiceImpact: [false],
    });
  }

  private loadDefaultSettings(): void {
    // Load saved settings from local storage or service (SSR-safe)
    if (isPlatformBrowser(this.platformId)) {
      const savedSettings = localStorage.getItem('defaultSettings');
      if (savedSettings) {
        try {
          const settings = JSON.parse(savedSettings);
          this.settingsForm.patchValue(settings);
        } catch (error) {
          console.error('Error loading saved settings:', error);
        }
      }
    }
  }

  onSave(): void {
    if (this.settingsForm.valid) {
      this.saving.set(true);

      const formData = this.settingsForm.value;

      // Save to local storage (SSR-safe)
      if (isPlatformBrowser(this.platformId)) {
        try {
          localStorage.setItem('defaultSettings', JSON.stringify(formData));

          setTimeout(() => {
            this.saving.set(false);
            this.snackBar.open(
              'Default settings saved successfully!',
              'Close',
              {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
              },
            );
          }, 1000);
        } catch (error) {
          this.saving.set(false);
          this.snackBar.open(
            'Error saving settings. Please try again.',
            'Close',
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            },
          );
          console.error('Error saving settings:', error);
        }
      } else {
        // SSR fallback
        this.saving.set(false);
        this.snackBar.open('Settings saved successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    } else {
      this.snackBar.open(
        'Please fill in all required fields correctly.',
        'Close',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        },
      );
    }
  }

  onCancel(): void {
    if (
      confirm(
        'Are you sure you want to cancel? All unsaved changes will be lost.',
      )
    ) {
      this.loadDefaultSettings();
      this.snackBar.open('Changes cancelled.', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}
