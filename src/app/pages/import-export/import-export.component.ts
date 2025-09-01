import {
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { HotelStore } from '../../services/hotel-store.service';
import { IndexedDbService } from '../../services/indexeddb.service';
import { HotelData } from '../../models/hotel-data.model';
import { EntityId } from '../../models/base.model';

@Component({
  selector: 'app-import-export',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="max-w-7xl mx-auto h-full">
      <div class="mb-4">
        <h1 class="text-xl font-bold text-gray-900 mb-1">Import / Export</h1>
        <p class="text-sm text-gray-600">
          Backup and restore hotel configuration data
        </p>
      </div>

      <div class="space-y-4">
        <!-- Export Card -->
        <div>
          <mat-card class="flex flex-col">
            <mat-card-header class="flex-shrink-0 !pb-2">
              <mat-card-title class="flex items-center text-sm font-medium">
                <mat-icon class="mr-2 text-blue-600 !text-lg"
                  >download</mat-icon
                >
                Export Data
              </mat-card-title>
            </mat-card-header>

            <mat-card-content
              class="flex-1 !pt-0 !pb-2 overflow-y-auto max-h-96"
            >
              <p class="text-sm text-gray-600 mb-4">
                Download the current configuration as a single JSON file
                containing all hotel data.
              </p>

              <div class="space-y-2">
                <div class="text-xs text-gray-500 font-medium">
                  Export includes:
                </div>
                <ul class="text-xs text-gray-600 space-y-1 ml-4">
                  <li>• Hotel settings and configuration</li>
                  <li>• Room types and rooms</li>
                  <li>• Rate plans and pricing</li>
                  <li>• Taxes and policies</li>
                  <li>• Amenities and departments</li>
                  <li>• Users and roles</li>
                </ul>
              </div>
            </mat-card-content>

            <mat-card-actions class="flex-shrink-0 !px-3 !pb-3 !pt-1">
              <button
                mat-raised-button
                color="primary"
                (click)="exportData()"
                class="!text-sm !font-medium !min-h-9 !px-4"
              >
                <mat-icon class="mr-1 !text-base">download</mat-icon>
                Export Data
              </button>
            </mat-card-actions>
          </mat-card>
        </div>

        <!-- Import Card -->
        <div>
          <mat-card class="flex flex-col">
            <mat-card-header class="flex-shrink-0 !pb-2">
              <mat-card-title class="flex items-center text-sm font-medium">
                <mat-icon class="mr-2 text-green-600 !text-lg">upload</mat-icon>
                Import Data
              </mat-card-title>
            </mat-card-header>

            <mat-card-content
              class="flex-1 !pt-0 !pb-2 overflow-y-auto max-h-96"
            >
              <p class="text-sm text-gray-600 mb-3">
                Choose a JSON file. It will be validated before any changes are
                applied.
              </p>

              <input
                #fileInput
                type="file"
                accept="application/json"
                class="hidden"
                (change)="onFileSelected($event)"
              />

              @if (parsed()) {
                <div class="space-y-3">
                  <div class="text-sm font-semibold text-gray-700">
                    Parsed Summary
                  </div>
                  <div class="overflow-x-auto">
                    <table
                      mat-table
                      [dataSource]="summaryRows()"
                      class="w-full !text-sm"
                    >
                      <ng-container matColumnDef="key">
                        <th
                          mat-header-cell
                          *matHeaderCellDef
                          class="font-semibold !text-sm"
                        >
                          Key
                        </th>
                        <td
                          mat-cell
                          *matCellDef="let row"
                          class="!py-1 text-sm"
                        >
                          {{ row.key }}
                        </td>
                      </ng-container>
                      <ng-container matColumnDef="value">
                        <th
                          mat-header-cell
                          *matHeaderCellDef
                          class="font-semibold !text-sm"
                        >
                          Value
                        </th>
                        <td
                          mat-cell
                          *matCellDef="let row"
                          class="!py-1 text-sm"
                        >
                          {{ row.value }}
                        </td>
                      </ng-container>
                      <tr
                        mat-header-row
                        *matHeaderRowDef="['key', 'value']"
                        class="!h-8"
                      ></tr>
                      <tr
                        mat-row
                        *matRowDef="let row; columns: ['key', 'value']"
                        class="!h-8"
                      ></tr>
                    </table>
                  </div>

                  <div
                    class="text-sm p-3 rounded"
                    [ngClass]="{
                      'text-green-700 bg-green-50': validationOk(),
                      'text-red-700 bg-red-50': !validationOk(),
                    }"
                  >
                    @if (validationOk()) {
                      <div class="flex items-center">
                        <mat-icon class="mr-2 !text-base text-green-600"
                          >check_circle</mat-icon
                        >
                        Validation passed. You can proceed with import.
                      </div>
                    } @else {
                      <div class="space-y-2">
                        <div class="flex items-center font-medium">
                          <mat-icon class="mr-2 !text-base text-red-600"
                            >error</mat-icon
                          >
                          Validation failed
                        </div>
                        <div class="text-xs">
                          Fix the following issues before import:
                        </div>
                        <mat-list class="!py-0">
                          @for (err of validationErrors(); track err) {
                            <mat-list-item class="!text-xs !py-1">{{
                              err
                            }}</mat-list-item>
                          }
                        </mat-list>
                      </div>
                    }
                  </div>
                </div>
              } @else {
                <div class="text-center py-6 text-gray-500">
                  <mat-icon class="text-3xl mb-2 opacity-50"
                    >cloud_upload</mat-icon
                  >
                  <p class="text-sm">No file selected</p>
                  <p class="text-xs">Choose a JSON file to import</p>
                </div>
              }
            </mat-card-content>

            <mat-card-actions class="flex-shrink-0 !px-3 !pb-3 !pt-1">
              <button
                mat-raised-button
                color="accent"
                (click)="triggerFileSelect()"
                class="!text-sm !font-medium !min-h-9 !px-4"
              >
                <mat-icon class="mr-1 !text-base">upload</mat-icon>
                Choose File
              </button>

              <div class="flex-1"></div>

              <div class="flex gap-1">
                <button
                  mat-stroked-button
                  color="primary"
                  (click)="applyImport('replace')"
                  [disabled]="!parsed() || !validationOk()"
                  class="!text-xs !min-h-8 !px-2"
                >
                  Replace
                </button>
                <button
                  mat-stroked-button
                  color="primary"
                  (click)="applyImport('merge-keep-existing')"
                  [disabled]="!parsed() || !validationOk()"
                  class="!text-xs !min-h-8 !px-2"
                >
                  Merge (keep)
                </button>
                <button
                  mat-stroked-button
                  color="primary"
                  (click)="applyImport('merge-prefer-import')"
                  [disabled]="!parsed() || !validationOk()"
                  class="!text-xs !min-h-8 !px-2"
                >
                  Merge (prefer)
                </button>
              </div>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
})
export class ImportExportComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  private store = inject(HotelStore);
  private idb = inject(IndexedDbService);
  private snackBar = inject(MatSnackBar);

  // preview state
  parsed = signal<HotelData | null>(null);
  validationOk = signal<boolean>(false);
  validationErrors = signal<string[]>([]);

  summaryRows = computed(() => {
    const p = this.parsed();
    if (!p) return [] as { key: string; value: string }[];
    return [
      { key: 'Version', value: p.version ?? '-' },
      { key: 'Hotel', value: p.hotel?.name || p.hotel?.code || '-' },
      { key: 'Room Types', value: String(p.roomTypes?.length ?? 0) },
      { key: 'Rooms', value: String(p.rooms?.length ?? 0) },
      { key: 'Rate Plans', value: String(p.ratePlans?.length ?? 0) },
      { key: 'Taxes', value: String(p.taxes?.length ?? 0) },
      { key: 'Tax Groups', value: String(p.taxGroups?.length ?? 0) },
      { key: 'Amenities', value: String(p.amenities?.length ?? 0) },
      { key: 'Amenity Groups', value: String(p.amenityGroups?.length ?? 0) },
      { key: 'Policies', value: String(p.policies?.length ?? 0) },
      { key: 'Users', value: String(p.users?.length ?? 0) },
      { key: 'Roles', value: String(p.roles?.length ?? 0) },
      { key: 'Departments', value: String(p.departments?.length ?? 0) },
    ];
  });

  async exportData() {
    try {
      const dataStr = await this.idb.export();
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hotel-admin-data-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.snackBar.open('Exported successfully', 'Close', { duration: 3000 });
    } catch {
      this.snackBar.open('Export failed', 'Close', { duration: 3000 });
    }
  }

  triggerFileSelect() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement | null;
    const file = input?.files?.[0];
    if (!file) return;
    if (file.type !== 'application/json') {
      this.snackBar.open('Please select a JSON file', 'Close', {
        duration: 3000,
      });
      if (input) input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = (e.target?.result ?? '') as string;
        const parsed = JSON.parse(text) as HotelData;
        const res = this.store.validateData(parsed);
        this.parsed.set(parsed);
        this.validationOk.set(res.ok);
        this.validationErrors.set(res.errors ?? []);
        if (!res.ok) {
          this.snackBar.open(
            'Import JSON is invalid. Fix issues before applying.',
            'Close',
            { duration: 5000 },
          );
        } else {
          this.snackBar.open(
            'File parsed and validated. Choose a merge strategy to apply.',
            'Close',
            { duration: 4000 },
          );
        }
      } catch {
        this.parsed.set(null);
        this.validationOk.set(false);
        this.validationErrors.set(['Invalid JSON']);
        this.snackBar.open('Invalid JSON file', 'Close', { duration: 3000 });
      } finally {
        if (input) input.value = '';
      }
    };
    reader.readAsText(file);
  }

  private mergeKeepExisting(
    current: HotelData,
    incoming: HotelData,
  ): HotelData {
    // Keep existing items if duplicate by id/code, add new ones from incoming
    const byId = <T extends { id: EntityId }>(arr: T[]) =>
      new Map(arr.map((x) => [x.id, x] as const));
    const pick = <T extends { id: EntityId }>(cur: T[], inc: T[]) => {
      const map = byId(cur);
      for (const item of inc || [])
        if (!map.has(item.id)) map.set(item.id, item as T);
      return Array.from(map.values());
    };
    return {
      ...current,
      hotel: incoming.hotel || current.hotel,
      roomTypes: pick(current.roomTypes || [], incoming.roomTypes || []),
      rooms: pick(current.rooms || [], incoming.rooms || []),
      ratePlans: pick(current.ratePlans || [], incoming.ratePlans || []),
      taxes: pick(current.taxes || [], incoming.taxes || []),
      taxGroups: pick(current.taxGroups || [], incoming.taxGroups || []),
      amenities: pick(current.amenities || [], incoming.amenities || []),
      amenityGroups: pick(
        current.amenityGroups || [],
        incoming.amenityGroups || [],
      ),
      policies: pick(current.policies || [], incoming.policies || []),
      users: pick(current.users || [], incoming.users || []),
      roles: pick(current.roles || [], incoming.roles || []),
      departments: pick(current.departments || [], incoming.departments || []),
      lastUpdated: new Date(),
    } as HotelData;
  }

  private mergePreferImport(
    current: HotelData,
    incoming: HotelData,
  ): HotelData {
    // Replace duplicates by id with incoming; add new
    const byId = <T extends { id: EntityId }>(arr: T[]) =>
      new Map(arr.map((x) => [x.id, x] as const));
    const pick = <T extends { id: EntityId }>(cur: T[], inc: T[]) => {
      const map = byId(cur);
      for (const item of inc || []) map.set(item.id, item as T);
      return Array.from(map.values());
    };
    return {
      ...current,
      hotel: incoming.hotel || current.hotel,
      roomTypes: pick(current.roomTypes || [], incoming.roomTypes || []),
      rooms: pick(current.rooms || [], incoming.rooms || []),
      ratePlans: pick(current.ratePlans || [], incoming.ratePlans || []),
      taxes: pick(current.taxes || [], incoming.taxes || []),
      taxGroups: pick(current.taxGroups || [], incoming.taxGroups || []),
      amenities: pick(current.amenities || [], incoming.amenities || []),
      amenityGroups: pick(
        current.amenityGroups || [],
        incoming.amenityGroups || [],
      ),
      policies: pick(current.policies || [], incoming.policies || []),
      users: pick(current.users || [], incoming.users || []),
      roles: pick(current.roles || [], incoming.roles || []),
      departments: pick(current.departments || [], incoming.departments || []),
      lastUpdated: new Date(),
    } as HotelData;
  }

  async applyImport(
    strategy: 'replace' | 'merge-keep-existing' | 'merge-prefer-import',
  ) {
    const incoming = this.parsed();
    if (!incoming || !this.validationOk()) return;

    const current = this.store.getSnapshot();
    let finalData: HotelData;
    if (strategy === 'replace') {
      finalData = { ...(incoming as HotelData) };
    } else if (strategy === 'merge-keep-existing') {
      finalData = this.mergeKeepExisting(current, incoming);
    } else {
      finalData = this.mergePreferImport(current, incoming);
    }

    // Validate final data before committing
    const res = this.store.validateData(finalData);
    if (!res.ok) {
      this.snackBar.open('Cannot apply import: merged data invalid.', 'Close', {
        duration: 5000,
      });
      this.validationOk.set(false);
      this.validationErrors.set(res.errors ?? []);
      return;
    }

    // Save via IndexedDbService to persist both store and db
    const saved = await this.idb.saveHotelData(finalData);
    if (!saved.success) {
      this.snackBar.open('Import failed while saving data.', 'Close', {
        duration: 4000,
      });
      return;
    }
    this.snackBar.open('Import applied successfully.', 'Close', {
      duration: 3000,
    });
    // Clear preview
    this.parsed.set(null);
    this.validationOk.set(false);
    this.validationErrors.set([]);
  }
}
