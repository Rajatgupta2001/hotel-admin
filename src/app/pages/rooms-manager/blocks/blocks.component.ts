import { Component, inject, signal, computed } from '@angular/core';
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
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HotelStore } from '../../../services/hotel-store.service';
import { Block } from '../../../models/rooms-manager/block.model';

@Component({
  selector: 'app-blocks',
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
  template: `
    <div class="max-w-7xl mx-auto h-full">
      <div class="mb-4">
        <h1 class="text-xl font-bold text-gray-900 mb-1">Blocks Management</h1>
        <p class="text-sm text-gray-600">
          Manage hotel building blocks and their configurations
        </p>
      </div>

      <div class="space-y-4">
        <!-- Form Card -->
        <mat-card class="flex flex-col">
          <mat-card-header class="flex-shrink-0 !pb-2">
            <mat-card-title class="flex items-center text-sm font-medium">
              <mat-icon class="mr-2 text-blue-600 !text-lg">domain</mat-icon>
              {{ editingBlock() ? 'Edit Block' : 'Add Block' }}
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="flex-1 !pt-0 !pb-2">
            <form
              [formGroup]="blockForm"
              (ngSubmit)="onSubmit()"
              class="space-y-3"
            >
              <div class="grid grid-cols-2 gap-3">
                <mat-form-field appearance="fill" class="w-full !text-sm">
                  <mat-label>Block Code</mat-label>
                  <input
                    matInput
                    formControlName="code"
                    placeholder="e.g., BLK-A"
                  />
                  <mat-icon matSuffix>code</mat-icon>
                </mat-form-field>

                <mat-form-field appearance="fill" class="w-full !text-sm">
                  <mat-label>Block Name</mat-label>
                  <input
                    matInput
                    formControlName="name"
                    placeholder="e.g., Main Building"
                  />
                  <mat-icon matSuffix>apartment</mat-icon>
                </mat-form-field>
              </div>

              <mat-form-field appearance="fill" class="w-full !text-sm">
                <mat-label>Description</mat-label>
                <textarea
                  matInput
                  formControlName="description"
                  rows="2"
                  placeholder="Block description"
                ></textarea>
                <mat-icon matSuffix>description</mat-icon>
              </mat-form-field>

              <div class="flex items-center">
                <mat-checkbox formControlName="isActive">
                  Active Block
                </mat-checkbox>
              </div>
            </form>
          </mat-card-content>

          <mat-card-actions class="flex-shrink-0 !px-3 !pb-3 !pt-1">
            <button
              mat-raised-button
              color="primary"
              (click)="onSubmit()"
              [disabled]="blockForm.invalid || saving()"
              class="!text-sm !font-medium !min-h-9 !px-4"
            >
              @if (saving()) {
                <mat-icon class="animate-spin mr-1 !text-base"
                  >refresh</mat-icon
                >
              } @else {
                <mat-icon class="mr-1 !text-base">{{
                  editingBlock() ? 'update' : 'add'
                }}</mat-icon>
              }
              {{ editingBlock() ? 'Update' : 'Add' }} Block
            </button>

            @if (editingBlock()) {
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
              Blocks List
              <span
                class="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full"
              >
                {{ blocks().length }}
              </span>
            </mat-card-title>
          </mat-card-header>

          <mat-card-content class="flex-1 !pt-0 !pb-2 overflow-y-auto">
            @if (blocks().length === 0) {
              <div class="text-center py-6 text-gray-500">
                <mat-icon class="text-3xl mb-2 opacity-50">domain</mat-icon>
                <p class="text-sm">No blocks configured yet</p>
                <p class="text-xs">Add your first block using the form above</p>
              </div>
            } @else {
              <div class="overflow-x-auto">
                <table
                  mat-table
                  [dataSource]="blocks()"
                  class="w-full !text-sm"
                >
                  <ng-container matColumnDef="code">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Code
                    </th>
                    <td mat-cell *matCellDef="let block" class="!py-2">
                      <div class="font-medium text-sm">{{ block.code }}</div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="name">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Name
                    </th>
                    <td mat-cell *matCellDef="let block" class="!py-2">
                      <div class="text-sm">{{ block.name }}</div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="totalFloors">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Floors
                    </th>
                    <td mat-cell *matCellDef="let block" class="!py-2">
                      <div class="flex items-center text-sm">
                        <mat-icon class="!text-base mr-1">layers</mat-icon>
                        {{ block.totalFloors || 0 }}
                      </div>
                    </td>
                  </ng-container>

                  <ng-container matColumnDef="totalRooms">
                    <th
                      mat-header-cell
                      *matHeaderCellDef
                      class="font-semibold !text-sm"
                    >
                      Rooms
                    </th>
                    <td mat-cell *matCellDef="let block" class="!py-2">
                      <div class="flex items-center text-sm">
                        <mat-icon class="!text-base mr-1"
                          >meeting_room</mat-icon
                        >
                        {{ block.totalRooms || 0 }}
                      </div>
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
                    <td mat-cell *matCellDef="let block" class="!py-2">
                      <span [class]="getStatusClass(block.status)">
                        {{ getStatusText(block.status) }}
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
                    <td
                      mat-cell
                      *matCellDef="let block; let i = index"
                      class="!py-2"
                    >
                      <button
                        mat-icon-button
                        color="primary"
                        (click)="editBlock(block)"
                        matTooltip="Edit block"
                        class="!w-8 !h-8"
                      >
                        <mat-icon class="!text-lg">edit</mat-icon>
                      </button>
                      <button
                        mat-icon-button
                        color="warn"
                        (click)="deleteBlock(i)"
                        matTooltip="Delete block"
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
export class BlocksComponent {
  private fb = inject(FormBuilder);
  private store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  saving = signal(false);
  editingBlock = signal<Block | null>(null);

  // Local blocks storage until added to main store
  private localBlocks = signal<Block[]>([]);
  blocks = computed(() => this.localBlocks());

  displayedColumns = [
    'code',
    'name',
    'totalFloors',
    'totalRooms',
    'status',
    'actions',
  ];

  blockForm: FormGroup;

  constructor() {
    this.blockForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      isActive: [true],
    });

    // Add sample data for demonstration
    this.localBlocks.set([
      {
        id: 'block-1',
        code: 'BLK-A',
        name: 'Main Building',
        description: 'Main hotel building with reception and lobby',
        status: 'active',
        isActive: true,
        hotelId: 'hotel-1',
        floors: [],
        totalRooms: 25,
        totalFloors: 5,
        amenityIds: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'block-2',
        code: 'BLK-B',
        name: 'Annex Building',
        description: 'Secondary building with additional rooms',
        status: 'active',
        isActive: true,
        hotelId: 'hotel-1',
        floors: [],
        totalRooms: 15,
        totalFloors: 3,
        amenityIds: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }

  onSubmit(): void {
    if (this.blockForm.valid) {
      this.saving.set(true);
      const formValue = this.blockForm.value;

      setTimeout(() => {
        if (this.editingBlock()) {
          // Update existing block
          const updatedBlocks = this.localBlocks().map((block) =>
            block.id === this.editingBlock()!.id
              ? {
                  ...block,
                  code: formValue.code,
                  name: formValue.name,
                  description: formValue.description,
                  isActive: formValue.isActive,
                  updatedAt: new Date(),
                }
              : block,
          );
          this.localBlocks.set(updatedBlocks);
          this.snackBar.open('Block updated successfully!', 'Close', {
            duration: 3000,
          });
          this.editingBlock.set(null);
        } else {
          // Add new block
          const newBlock: Block = {
            id: this.generateId(),
            code: formValue.code,
            name: formValue.name,
            description: formValue.description || '',
            status: formValue.isActive ? 'active' : 'inactive',
            isActive: formValue.isActive,
            hotelId: 'hotel-1', // Default hotel ID
            floors: [],
            totalRooms: 0,
            totalFloors: 0,
            amenityIds: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          this.localBlocks.set([...this.localBlocks(), newBlock]);
          this.snackBar.open('Block added successfully!', 'Close', {
            duration: 3000,
          });
        }

        this.saving.set(false);
        this.resetForm();
      }, 300);
    }
  }

  editBlock(block: Block): void {
    this.editingBlock.set(block);
    this.blockForm.patchValue({
      code: block.code,
      name: block.name,
      description: block.description || '',
      isActive: block.isActive,
    });
  }

  cancelEdit(): void {
    this.editingBlock.set(null);
    this.resetForm();
  }

  deleteBlock(index: number): void {
    const block = this.blocks()[index];
    if (confirm(`Are you sure you want to delete "${block.name}"?`)) {
      const updatedBlocks = this.localBlocks().filter((_, i) => i !== index);
      this.localBlocks.set(updatedBlocks);
      this.snackBar.open('Block deleted successfully!', 'Close', {
        duration: 3000,
      });
    }
  }

  private generateId(): string {
    return 'block-' + Math.random().toString(36).substr(2, 9);
  }

  resetForm(): void {
    this.blockForm.reset({
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
