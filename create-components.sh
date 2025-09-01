#!/bin/bash

# Hotel Admin PWA Component Generator Script
# This script creates the complete project structure as specified

set -e

BASE_DIR="/home/hotelogix/Desktop/hotel-admin-pwa/src/app"

echo "Creating Hotel Admin PWA Complete Project Structure..."

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

echo "1. Creating Rooms Manager Components..."

# Rooms Manager Components
create_component "rooms-manager/amenities" "amenities" "amenities" "Amenities Management" "star"
create_component "rooms-manager/floors" "floors" "floors" "Floors Management" "layers"
create_component "rooms-manager/room-features" "room-features" "room-features" "Room Features Management" "home"
create_component "rooms-manager/other-hotel-areas" "other-hotel-areas" "other-hotel-areas" "Other Hotel Areas" "place"
create_component "rooms-manager/display-colors" "display-colors" "display-colors" "Display Colors" "palette"
create_component "rooms-manager/room-taxes" "room-taxes" "room-taxes" "Room Taxes" "account_balance"
create_component "rooms-manager/phone-extensions" "phone-extensions" "phone-extensions" "Phone Extensions" "phone"
create_component "rooms-manager/bill-messages" "bill-messages" "bill-messages" "Bill Messages" "message"
create_component "rooms-manager/terms-conditions" "terms-conditions" "terms-conditions" "Terms & Conditions" "gavel"

echo "2. Creating POS Manager Components..."

# POS Manager Components  
create_component "pos-manager/pos-points" "pos-points" "pos-points" "POS Points Management" "store"
create_component "pos-manager/pos-taxes" "pos-taxes" "pos-taxes" "POS Taxes Management" "receipt"
create_component "pos-manager/measurement-units" "measurement-units" "measurement-units" "Measurement Units" "straighten"
create_component "pos-manager/pos-attributes" "pos-attributes" "pos-attributes" "POS Attributes" "category"
create_component "pos-manager/pos-items" "pos-items" "pos-items" "POS Items Management" "inventory"
create_component "pos-manager/kitchen" "kitchen" "kitchen" "Kitchen Management" "restaurant"

echo "3. Creating Guest Manager Components..."

# Guest Manager Components
create_component "guest-manager/salutations" "salutations" "salutations" "Salutations Management" "person"
create_component "guest-manager/guest-list" "guest-list" "guest-list" "Guest List Management" "people"
create_component "guest-manager/vip-guest-list" "vip-guest-list" "vip-guest-list" "VIP Guest List" "star_border"
create_component "guest-manager/black-list" "black-list" "black-list" "Black List Management" "block"
create_component "guest-manager/credit-card-console" "credit-card-console" "credit-card-console" "Credit Card Console" "credit_card"
create_component "guest-manager/guest-preferences" "guest-preferences" "guest-preferences" "Guest Preferences" "tune"
create_component "guest-manager/guest-upload" "guest-upload" "guest-upload" "Guest Upload" "upload"
create_component "guest-manager/trip-reviews" "trip-reviews" "trip-reviews" "Trip Reviews" "rate_review"
create_component "guest-manager/custom-fields" "custom-fields" "custom-fields" "Guest Custom Fields" "dynamic_form"

echo "Components created successfully!"
echo "Total components created: $(find $BASE_DIR/pages -name "*.component.ts" | wc -l)"
