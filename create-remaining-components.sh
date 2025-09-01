#!/bin/bash

# Hotel Admin PWA Component Generator Script - Part 2
# This script creates the remaining components

set -e

BASE_DIR="/home/hotelogix/Desktop/hotel-admin-pwa/src/app"

echo "Creating remaining Hotel Admin PWA Components..."

# Function to create a basic component
create_component() {
    local path=$1
    local component_name=$2
    local selector_name=$3
    local title=$4
    local icon=$5
    
    mkdir -p "$BASE_DIR/pages/$path"
    
    cat > "$BASE_DIR/pages/$path/$component_name.component.ts" << EOF
import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

@Component({
  selector: 'app-$selector_name',
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
  template: \`
    <div class="max-w-7xl mx-auto h-full">
      <div class="mb-4">
        <h1 class="text-xl font-bold text-gray-900 mb-1">$title</h1>
        <p class="text-sm text-gray-600">
          Manage $title configurations and settings
        </p>
      </div>

      <div class="space-y-4">
        <!-- Form Card -->
        <mat-card class="flex flex-col">
          <mat-card-header class="flex-shrink-0 !pb-2">
            <mat-card-title class="flex items-center text-sm font-medium">
              <mat-icon class="mr-2 text-blue-600 !text-lg">$icon</mat-icon>
              {{ editing() ? 'Edit' : 'Add' }} Item
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="flex-1 !pt-0 !pb-2">
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-3">
              <mat-form-field appearance="fill" class="w-full !text-sm">
                <mat-label>Name</mat-label>
                <input matInput formControlName="name" placeholder="Enter name" />
                <mat-icon matSuffix>label</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="fill" class="w-full !text-sm">
                <mat-label>Description</mat-label>
                <textarea matInput formControlName="description" rows="2" 
                         placeholder="Enter description"></textarea>
                <mat-icon matSuffix>description</mat-icon>
              </mat-form-field>

              <div class="flex items-center">
                <mat-checkbox formControlName="isActive">
                  Active
                </mat-checkbox>
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
                <mat-icon class="animate-spin mr-1 !text-base">refresh</mat-icon>
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
              <span class="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                {{ items().length }}
              </span>
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="flex-1 !pt-0 !pb-2 overflow-y-auto">
            @if (items().length === 0) {
              <div class="text-center py-6 text-gray-500">
                <mat-icon class="text-3xl mb-2 opacity-50">$icon</mat-icon>
                <p class="text-sm">No items configured yet</p>
                <p class="text-xs">Add your first item using the form above</p>
              </div>
            } @else {
              <div class="overflow-x-auto">
                <table mat-table [dataSource]="items()" class="w-full !text-sm">
                  <ng-container matColumnDef="name">
                    <th mat-header-cell *matHeaderCellDef class="font-semibold !text-sm">
                      Name
                    </th>
                    <td mat-cell *matCellDef="let item" class="!py-2">
                      <div class="font-medium text-sm">{{ item.name }}</div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="description">
                    <th mat-header-cell *matHeaderCellDef class="font-semibold !text-sm">
                      Description
                    </th>
                    <td mat-cell *matCellDef="let item" class="!py-2">
                      <div class="text-sm">{{ item.description || '-' }}</div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="status">
                    <th mat-header-cell *matHeaderCellDef class="font-semibold !text-sm">
                      Status
                    </th>
                    <td mat-cell *matCellDef="let item" class="!py-2">
                      <span [class]="getStatusClass(item.status)">
                        {{ getStatusText(item.status) }}
                      </span>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="actions">
                    <th mat-header-cell *matHeaderCellDef class="font-semibold !text-sm">
                      Actions
                    </th>
                    <td mat-cell *matCellDef="let item; let i = index" class="!py-2">
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
                  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
                </table>
              </div>
            }
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  \`,
})
export class ${component_name^}Component {
  private fb = inject(FormBuilder);
  private store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  saving = signal(false);
  editing = signal<any>(null);
  items = computed(() => [] as any[]);

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

  editItem(item: any): void {
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
    if (confirm(\`Are you sure you want to delete "\${item.name}"?\`)) {
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
EOF
}

echo "4. Creating General Manager Components..."

# General Manager Components
create_component "general/default-settings" "default-settings" "default-settings" "Default Settings" "settings"
create_component "general/hotel-custom-settings" "hotel-custom-settings" "hotel-custom-settings" "Hotel Custom Settings" "tune"
create_component "general/departments" "departments" "departments" "Departments Management" "business"
create_component "general/currencies" "currencies" "currencies" "Currencies Management" "attach_money"
create_component "general/languages" "languages" "languages" "Languages Management" "language"
create_component "general/cancellation-reasons" "cancellation-reasons" "cancellation-reasons" "Cancellation Reasons" "cancel"
create_component "general/tax-exempt-reasons" "tax-exempt-reasons" "tax-exempt-reasons" "Tax Exempt Reasons" "money_off"
create_component "general/reasons-list" "reasons-list" "reasons-list" "Reasons List" "list_alt"
create_component "general/operation-reasons" "operation-reasons" "operation-reasons" "Operation Reasons" "build"
create_component "general/special-discounts" "special-discounts" "special-discounts" "Special Discounts" "local_offer"
create_component "general/announcements" "announcements" "announcements" "Announcements" "campaign"
create_component "general/account-attributes" "account-attributes" "account-attributes" "Account Attributes" "account_circle"
create_component "general/pay-modes" "pay-modes" "pay-modes" "Payment Modes" "payment"
create_component "general/pay-types" "pay-types" "pay-types" "Payment Types" "credit_card"
create_component "general/counters" "counters" "counters" "Counters Management" "confirmation_number"
create_component "general/identification-types" "identification-types" "identification-types" "Identification Types" "badge"
create_component "general/guest-types" "guest-types" "guest-types" "Guest Types" "person_outline"
create_component "general/source-of-business" "source-of-business" "source-of-business" "Source of Business" "trending_up"
create_component "general/promo-codes" "promo-codes" "promo-codes" "Promo Codes" "loyalty"
create_component "general/custom-tag-list" "custom-tag-list" "custom-tag-list" "Custom Tag List" "local_offer"
create_component "general/general-custom-fields" "general-custom-fields" "general-custom-fields" "Custom Fields" "dynamic_form"
create_component "general/arrival-departure-modes" "arrival-departure-modes" "arrival-departure-modes" "Arrival/Departure Modes" "flight"
create_component "general/preferences" "preferences" "preferences" "Preferences" "favorite"
create_component "general/cancellation-policy" "cancellation-policy" "cancellation-policy" "Cancellation Policy" "policy"
create_component "general/booking-policy" "booking-policy" "booking-policy" "Booking Policy" "book_online"
create_component "general/minimum-bookable-nights" "minimum-bookable-nights" "minimum-bookable-nights" "Minimum Bookable Nights" "hotel"
create_component "general/email-configuration" "email-configuration" "email-configuration" "Email Configuration" "email"
create_component "general/email-settings" "email-settings" "email-settings" "Email Settings" "mail_outline"
create_component "general/cc-locator-email-settings" "cc-locator-email-settings" "cc-locator-email-settings" "CC Locator Email Settings" "location_on"
create_component "general/notes" "notes" "notes" "Notes Management" "note"
create_component "general/logged-in-users" "logged-in-users" "logged-in-users" "Logged In Users" "people_outline"
create_component "general/frontdesk-login-script" "frontdesk-login-script" "frontdesk-login-script" "Frontdesk Login Script" "code"
create_component "general/early-bird-discount" "early-bird-discount" "early-bird-discount" "Early Bird Discount" "schedule"
create_component "general/last-minute-discount" "last-minute-discount" "last-minute-discount" "Last Minute Discount" "update"
create_component "general/long-stay-discount" "long-stay-discount" "long-stay-discount" "Long Stay Discount" "event"
create_component "general/dynamic-pricing" "dynamic-pricing" "dynamic-pricing" "Dynamic Pricing" "trending_up"
create_component "general/market-segment" "market-segment" "market-segment" "Market Segment" "pie_chart"
create_component "general/job-types" "job-types" "job-types" "Job Types" "work"
create_component "general/guest-service-list" "guest-service-list" "guest-service-list" "Guest Service List" "room_service"
create_component "general/lost-found-types" "lost-found-types" "lost-found-types" "Lost & Found Types" "find_in_page"

echo "5. Creating Company Info Components..."

# Company Info Components
create_component "company-info/company-profile" "company-profile" "company-profile" "Company Profile" "business"
create_component "company-info/hotel-information" "hotel-information" "hotel-information" "Hotel Information" "info"
create_component "company-info/hotel-categories" "hotel-categories" "hotel-categories" "Hotel Categories" "category"
create_component "company-info/mailchimp-connect" "mailchimp-connect" "mailchimp-connect" "MailChimp Connect" "email"
create_component "company-info/channel-manager-offer" "channel-manager-offer" "channel-manager-offer" "Channel Manager Offer" "router"
create_component "company-info/property-layout" "property-layout" "property-layout" "Property Layout" "map"

echo "6. Creating Price Manager Components..."

# Price Manager Components
create_component "price-manager/seasons-attribute" "seasons-attribute" "seasons-attribute" "Seasons Attribute" "wb_sunny"
create_component "price-manager/seasons" "seasons" "seasons" "Seasons Management" "calendar_today"
create_component "price-manager/special-periods" "special-periods" "special-periods" "Special Periods" "event"
create_component "price-manager/room-prices" "room-prices" "room-prices" "Room Prices" "attach_money"
create_component "price-manager/add-ons" "add-ons" "add-ons" "Add-ons (Inclusions)" "add_circle"
create_component "price-manager/packages-master" "packages-master" "packages-master" "Packages Master" "card_giftcard"
create_component "price-manager/frontdesk-packages" "frontdesk-packages" "frontdesk-packages" "Frontdesk Packages" "desktop_windows"
create_component "price-manager/web-packages" "web-packages" "web-packages" "Web Packages" "web"
create_component "price-manager/corporate-packages" "corporate-packages" "corporate-packages" "Corporate Packages" "corporate_fare"
create_component "price-manager/travel-agent-packages" "travel-agent-packages" "travel-agent-packages" "Travel Agent Packages" "flight"
create_component "price-manager/vip-guest-packages" "vip-guest-packages" "vip-guest-packages" "VIP Guest Packages" "star"
create_component "price-manager/gds-packages" "gds-packages" "gds-packages" "GDS Packages" "cloud"
create_component "price-manager/centralized-rate" "centralized-rate" "centralized-rate" "Centralized Rate" "center_focus_strong"
create_component "price-manager/group-booking-source" "group-booking-source" "group-booking-source" "Group Booking Source" "group"
create_component "price-manager/group-tax" "group-tax" "group-tax" "Group Tax" "account_balance"
create_component "price-manager/rate-manager" "rate-manager" "rate-manager" "Rate Manager" "trending_up"
create_component "price-manager/day-use-slot" "day-use-slot" "day-use-slot" "Day Use Slot" "schedule"

echo "7. Creating Users Manager Components..."

# Users Manager Components
create_component "users-manager/user-levels" "user-levels" "user-levels" "User Levels" "security"
create_component "users-manager/users" "users" "users" "Users Management" "people"
create_component "users-manager/login-activity" "login-activity" "login-activity" "Login Activity" "history"

echo "8. Creating Console Components..."

# Console Components
create_component "console/registered-corporate" "registered-corporate" "registered-corporate" "Registered Corporate" "business_center"
create_component "console/registered-travel-agent" "registered-travel-agent" "registered-travel-agent" "Registered Travel Agent" "flight_takeoff"
create_component "console/console-custom-fields" "console-custom-fields" "console-custom-fields" "Console Custom Fields" "dynamic_form"

echo "Remaining components created successfully!"
echo "Total components now: $(find $BASE_DIR/pages -name "*.component.ts" | wc -l)"
