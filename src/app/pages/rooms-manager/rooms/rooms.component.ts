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
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HotelStore } from '../../../services/hotel-store.service';

@Component({
  selector: 'app-rooms',
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
    MatTooltipModule,
  ],
  template: `
    <div class="max-w-7xl mx-auto h-full">
      <div class="mb-4">
        <h1 class="text-xl font-bold text-gray-900 mb-1">Rooms Management</h1>
        <p class="text-sm text-gray-600">
          Manage Rooms configurations and settings
        </p>
      </div>

      <div class="space-y-4">
        <!-- Form Card -->
        <mat-card class="flex flex-col">
          <mat-card-header class="flex-shrink-0 !pb-2">
            <mat-card-title class="flex items-center text-sm font-medium">
              <mat-icon class="mr-2 text-blue-600 !text-lg"
                >meeting_room</mat-icon
              >
              {{ editing() ? 'Edit' : 'Add' }} Room
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="flex-1 !pt-0 !pb-2">
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-3">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <mat-form-field appearance="fill" class="w-full !text-sm">
                  <mat-label>Room Number</mat-label>
                  <input
                    matInput
                    formControlName="roomNumber"
                    placeholder="Enter room number"
                  />
                  <mat-icon matSuffix>meeting_room</mat-icon>
                  @if (form.get('roomNumber')?.hasError('duplicate')) {
                    <mat-error>Room number already exists</mat-error>
                  }
                </mat-form-field>

                <mat-form-field appearance="fill" class="w-full !text-sm">
                  <mat-label>Room Type</mat-label>
                  <mat-select formControlName="roomTypeId">
                    @for (roomType of roomTypes(); track roomType.id) {
                      <mat-option [value]="roomType.id">
                        {{ roomType.name || roomType.title }}
                      </mat-option>
                    }
                  </mat-select>
                  <mat-icon matSuffix>home</mat-icon>
                </mat-form-field>

                <mat-form-field appearance="fill" class="w-full !text-sm">
                  <mat-label>Floor</mat-label>
                  <input
                    matInput
                    type="number"
                    formControlName="floor"
                    placeholder="1"
                  />
                  <mat-icon matSuffix>layers</mat-icon>
                </mat-form-field>

                <mat-form-field appearance="fill" class="w-full !text-sm">
                  <mat-label>Building</mat-label>
                  <input
                    matInput
                    formControlName="building"
                    placeholder="Main Building"
                  />
                  <mat-icon matSuffix>domain</mat-icon>
                </mat-form-field>
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
                <mat-icon class="animate-spin mr-1 !text-base"
                  >refresh</mat-icon
                >
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
              Rooms List
              <span
                class="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full"
              >
                {{ rooms().length }}
              </span>
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="flex-1 !pt-0 !pb-2 overflow-y-auto">
            @if (rooms().length === 0) {
              <div class="text-center py-6 text-gray-500">
                <mat-icon class="text-3xl mb-2 opacity-50"
                  >meeting_room</mat-icon
                >
                <p class="text-sm">No rooms configured yet</p>
                <p class="text-xs">Add your first room using the form above</p>
              </div>
            } @else {
              <div class="overflow-x-auto">
                <table mat-table [dataSource]="rooms()" class="w-full !text-sm">
                  <ng-container matColumnDef="roomNumber">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Room Number
                    </th>
                    <td mat-cell *matCellDef="let room" class="!py-2">
                      <div class="font-medium text-sm">
                        {{ room.roomNumber }}
                      </div>
                      <div class="text-xs text-gray-500">
                        {{ room.building || 'Main Building' }}
                      </div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="roomType">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Room Type
                    </th>
                    <td mat-cell *matCellDef="let room" class="!py-2">
                      <div class="text-sm">
                        {{ roomTypeName(room.roomTypeId) }}
                      </div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="floor">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Floor
                    </th>
                    <td mat-cell *matCellDef="let room" class="!py-2">
                      <div class="text-sm">{{ room.floor || 1 }}</div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="status">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Status
                    </th>
                    <td mat-cell *matCellDef="let room" class="!py-2">
                      <span [class]="getStatusClass(room.status)">
                        {{ getStatusText(room.status) }}
                      </span>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="actions">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Actions
                    </th>
                    <td mat-cell *matCellDef="let room" class="!py-2">
                      <button
                        mat-icon-button
                        color="primary"
                        (click)="editRoom(room)"
                        matTooltip="Edit room"
                        class="!w-8 !h-8"
                      >
                        <mat-icon class="!text-lg">edit</mat-icon>
                      </button>
                      <button
                        mat-icon-button
                        color="warn"
                        (click)="deleteRoom(room.id)"
                        matTooltip="Delete room"
                        class="!w-8 !h-8"
                      >
                        <mat-icon class="!text-lg">delete</mat-icon>
                      </button>
                    </td>
                  </ng-container>

                  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                  <tr
                    mat-row
                    *matRowDef="let row; columns: displayedColumns"
                  ></tr>
                </table>
              </div>
            }
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
})
export class RoomsComponent {
  private fb = inject(FormBuilder);
  private store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  saving = signal(false);
  editing = signal<null | {
    id: string;
    roomNumber: string;
    roomTypeId: string;
    floor: number;
    building: string;
    status: string;
  }>(null);
  rooms = signal<
    {
      id: string;
      roomNumber: string;
      roomTypeId: string;
      floor: number;
      building: string;
      status: string;
    }[]
  >([]);
  roomTypes = signal<{ id: string; name?: string; title?: string }[]>([]);

  displayedColumns = ['roomNumber', 'roomType', 'floor', 'status', 'actions'];

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      roomNumber: ['', Validators.required],
      roomTypeId: ['', Validators.required],
      floor: [1, [Validators.required, Validators.min(1)]],
      building: ['Main Building'],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.saving.set(true);

      setTimeout(() => {
        if (this.editing()) {
          this.snackBar.open('Room updated successfully!', 'Close', {
            duration: 3000,
          });
          this.editing.set(null);
        } else {
          this.snackBar.open('Room added successfully!', 'Close', {
            duration: 3000,
          });
        }

        this.saving.set(false);
        this.resetForm();
      }, 300);
    }
  }

  editRoom(room: {
    id: string;
    roomNumber: string;
    roomTypeId: string;
    floor: number;
    building: string;
    status: string;
  }): void {
    this.editing.set(room);
    this.form.patchValue({
      roomNumber: room.roomNumber,
      roomTypeId: room.roomTypeId,
      floor: room.floor || 1,
      building: room.building || 'Main Building',
    });
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.resetForm();
  }

  deleteRoom(id: string): void {
    const room = this.rooms().find((r) => r.id === id);
    if (
      room &&
      confirm(`Are you sure you want to delete room "${room.roomNumber}"?`)
    ) {
      this.snackBar.open('Room deleted successfully!', 'Close', {
        duration: 3000,
      });
    }
  }

  resetForm(): void {
    this.form.reset({
      floor: 1,
      building: 'Main Building',
    });
  }

  roomTypeName(id: string): string {
    const roomType = this.roomTypes().find((rt) => rt.id === id);
    return roomType ? roomType.name || roomType.title || 'Unknown' : 'Unknown';
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
