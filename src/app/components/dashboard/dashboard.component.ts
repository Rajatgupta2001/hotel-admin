import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { StorageService } from '../../../services/storage.service';
import { OutboxService } from '../../../services/outbox.service';
import { OutboxSummary } from '../../../models/outbox.model';

interface AppData {
  hotel: { hotelname?: string } | null;
  roomTypes: unknown[];
  rooms: unknown[];
  ratePlans: unknown[];
  taxes: unknown[];
  amenities: unknown[];
  users: unknown[];
  policies: {
    cancellation: unknown[];
    booking: unknown[];
  };
  lastModified: string;
}

interface DashboardCard {
  title: string;
  subtitle: string;
  route: string;
  icon: string;
  count: number;
  color: string;
  isConfigured: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatChipsModule,
    MatGridListModule,
  ],
  template: `
    <div class="dashboard-container">
      <!-- Welcome Card -->
      <mat-card class="welcome-card">
        <mat-card-content>
          <div class="section-header">
            <h1 class="mat-headline-4">Hotel Admin Dashboard</h1>
            <p class="mat-body-1 text-on-surface-variant">
              Welcome to your hotel management system. Configure your hotel
              settings below.
            </p>
          </div>

          <div class="progress-container">
            <div class="progress-header">
              <span class="mat-body-2">Configuration Progress</span>
              <span class="mat-headline-6 text-primary"
                >{{ completionPercentage }}%</span
              >
            </div>
            <mat-progress-bar
              mode="determinate"
              [value]="completionPercentage"
              class="progress-bar"
            ></mat-progress-bar>
            <div class="progress-footer">
              <span class="mat-caption">Data Size: {{ dataSize }}</span>
              <span class="mat-caption"
                >Last Modified: {{ lastModified | date: 'short' }}</span
              >
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Dashboard Cards Grid -->
      <div class="cards-grid">
        @for (card of dashboardCards; track card.route) {
          <mat-card class="dashboard-card" [routerLink]="card.route">
            <mat-card-content>
              <div class="card-header">
                <div class="card-info">
                  <h3 class="mat-subtitle-1">
                    {{ card.title }}
                  </h3>
                  <p class="mat-body-2 text-on-surface-variant">
                    {{ card.subtitle }}
                  </p>
                </div>
                <div class="card-icon">
                  <div
                    class="icon-container"
                    [style.background-color]="
                      getIconBackgroundColor(card.color)
                    "
                  >
                    <mat-icon [style.color]="getIconColor(card.color)">
                      {{ card.icon }}
                    </mat-icon>
                  </div>
                </div>
              </div>

              <div class="card-footer">
                <span class="mat-headline-3">{{ card.count }}</span>
                @if (card.isConfigured) {
                  <mat-chip class="status-chip configured">
                    <mat-icon>check_circle</mat-icon>
                    Configured
                  </mat-chip>
                } @else {
                  <mat-chip class="status-chip pending">
                    <mat-icon>pending</mat-icon>
                    Pending
                  </mat-chip>
                }
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <h2 class="mat-headline-5">Quick Actions</h2>
        <div class="actions-grid">
          <button mat-flat-button class="action-button" color="primary" (click)="seedSampleData()">
            <mat-icon>hotel</mat-icon>
            <div class="action-content">
              <div class="mat-subtitle-2">Seed Sample Data</div>
              <div class="mat-caption">Generate complete hotel setup</div>
            </div>
          </button>

          <button mat-stroked-button class="action-button" color="warn" (click)="resetToFactoryDefaults()">
            <mat-icon>restore</mat-icon>
            <div class="action-content">
              <div class="mat-subtitle-2">Reset to Defaults</div>
              <div class="mat-caption">Clear all data</div>
            </div>
          </button>

          <button mat-stroked-button class="action-button">
            <mat-icon>add_business</mat-icon>
            <div class="action-content">
              <div class="mat-subtitle-2">Add Room Type</div>
              <div class="mat-caption">Create new room category</div>
            </div>
          </button>

          <button mat-stroked-button class="action-button">
            <mat-icon>person_add</mat-icon>
            <div class="action-content">
              <div class="mat-subtitle-2">Add User</div>
              <div class="mat-caption">Invite team member</div>
            </div>
          </button>
        </div>
      </div>

      <!-- Sample Data Preview -->
      <div class="sample-data-section" *ngIf="completionPercentage === 0">
        <h2 class="mat-headline-5">Sample Data Preview</h2>
        <mat-card class="sample-data-card">
          <mat-card-content>
            <div class="sample-header">
              <div class="sample-info">
                <h3 class="mat-subtitle-1">Grand Palace Hotel & Resort</h3>
                <p class="mat-body-2 text-on-surface-variant">
                  Complete hotel setup with 250 rooms, 4 room types, and all necessary configurations
                </p>
              </div>
              <div class="sample-stats">
                <div class="stat-grid">
                  <div class="stat-item">
                    <span class="mat-headline-6">4</span>
                    <span class="mat-caption">Room Types</span>
                  </div>
                  <div class="stat-item">
                    <span class="mat-headline-6">250</span>
                    <span class="mat-caption">Rooms</span>
                  </div>
                  <div class="stat-item">
                    <span class="mat-headline-6">5</span>
                    <span class="mat-caption">Rate Plans</span>
                  </div>
                  <div class="stat-item">
                    <span class="mat-headline-6">12</span>
                    <span class="mat-caption">Amenities</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="room-types-preview">
              <h4 class="mat-subtitle-2">Room Types Included:</h4>
              <div class="room-type-chips">
                <mat-chip>Standard Queen - $189/night</mat-chip>
                <mat-chip>Deluxe Ocean View - $289/night</mat-chip>
                <mat-chip>Junior Suite - $459/night</mat-chip>
                <mat-chip>Presidential Suite - $1,299/night</mat-chip>
              </div>
            </div>

            <div class="features-preview">
              <h4 class="mat-subtitle-2">What's Included:</h4>
              <div class="features-grid">
                <div class="feature-item">
                  <mat-icon>check_circle</mat-icon>
                  <span>Complete hotel profile</span>
                </div>
                <div class="feature-item">
                  <mat-icon>check_circle</mat-icon>
                  <span>250 realistic rooms</span>
                </div>
                <div class="feature-item">
                  <mat-icon>check_circle</mat-icon>
                  <span>5 rate plans & packages</span>
                </div>
                <div class="feature-item">
                  <mat-icon>check_circle</mat-icon>
                  <span>User accounts & roles</span>
                </div>
                <div class="feature-item">
                  <mat-icon>check_circle</mat-icon>
                  <span>Taxes & policies</span>
                </div>
                <div class="feature-item">
                  <mat-icon>check_circle</mat-icon>
                  <span>12 premium amenities</span>
                </div>
              </div>
            </div>

            <div class="sample-actions">
              <button mat-flat-button color="primary" (click)="seedSampleData()">
                <mat-icon>download</mat-icon>
                Load Sample Data
              </button>
              <p class="mat-caption">Perfect for testing and getting started quickly</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Outbox Pattern Demo -->
      <div class="outbox-section">
        <h2 class="mat-headline-5">Outbox Pattern for Future Sync</h2>
        <mat-card class="outbox-card">
          <mat-card-content>
            <div class="outbox-header">
              <div class="outbox-info">
                <h3 class="mat-subtitle-1">Sync Operations Queue</h3>
                <p class="mat-body-2 text-on-surface-variant">
                  Operations waiting to be synchronized with the server
                </p>
              </div>
              <div class="outbox-stats">
                <div class="stat-item">
                  <span class="mat-headline-4">{{ outboxSummary.pendingOperations }}</span>
                  <span class="mat-caption">Pending</span>
                </div>
                <div class="stat-item">
                  <span class="mat-headline-4">{{ outboxSummary.totalOperations }}</span>
                  <span class="mat-caption">Total</span>
                </div>
              </div>
            </div>

            <div class="outbox-actions">
              <button mat-flat-button color="primary" (click)="createDemoOperations()">
                <mat-icon>add_circle</mat-icon>
                Create Demo Operations
              </button>
              
              <button mat-stroked-button color="accent" (click)="simulateSync()" 
                      [disabled]="outboxSummary.pendingOperations === 0">
                <mat-icon>sync</mat-icon>
                Simulate Sync
              </button>
            </div>

            <div class="outbox-summary">
              <div class="summary-row">
                <span class="label">✅ Successful:</span>
                <span class="value">{{ outboxSummary.syncedOperations }}</span>
              </div>
              <div class="summary-row">
                <span class="label">❌ Failed:</span>
                <span class="value">{{ outboxSummary.failedOperations }}</span>
              </div>
              <div class="summary-row">
                <span class="label">⏳ Pending:</span>
                <span class="value">{{ outboxSummary.pendingOperations }}</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      .dashboard-container {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .welcome-card {
        margin-bottom: 24px;
        background-color: var(--md-sys-color-surface-container-low);
      }

      .section-header {
        margin-bottom: 24px;
      }

      .section-header h1 {
        margin: 0 0 8px 0;
        color: var(--md-sys-color-on-surface);
      }

      .progress-container {
        background: linear-gradient(
          45deg,
          var(--md-sys-color-primary-container),
          var(--md-sys-color-secondary-container)
        );
        border-radius: 12px;
        padding: 20px;
      }

      .progress-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }

      .progress-bar {
        margin-bottom: 12px;
        height: 8px;
        border-radius: 4px;
      }

      .progress-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-bottom: 32px;
      }

      .dashboard-card {
        cursor: pointer;
        transition: all 0.3s ease;
        background-color: var(--md-sys-color-surface-container);
        border: 1px solid var(--md-sys-color-outline-variant);
      }

      .dashboard-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--md-sys-elevation-shadow-level3);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
      }

      .card-info {
        flex: 1;
      }

      .card-info h3 {
        margin: 0 0 4px 0;
        color: var(--md-sys-color-on-surface);
      }

      .card-icon {
        margin-left: 16px;
      }

      .icon-container {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .card-footer .mat-headline-3 {
        margin: 0;
        color: var(--md-sys-color-on-surface);
      }

      .status-chip {
        font-size: 12px;
        height: 24px;
      }

      .status-chip.configured {
        background-color: var(--md-sys-color-success);
        color: white;
      }

      .status-chip.pending {
        background-color: var(--md-sys-color-warning);
        color: white;
      }

      .status-chip mat-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }

      .quick-actions {
        margin-top: 32px;
      }

      .quick-actions h2 {
        margin: 0 0 20px 0;
        color: var(--md-sys-color-on-surface);
      }

      .actions-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
      }

      .action-button {
        display: flex;
        align-items: center;
        padding: 16px;
        text-align: left;
        height: auto;
        min-height: 72px;
      }

      .action-button mat-icon {
        margin-right: 12px;
        font-size: 24px;
        width: 24px;
        height: 24px;
      }

      .action-content {
        display: flex;
        flex-direction: column;
      }

      .action-content .mat-subtitle-2 {
        margin: 0 0 2px 0;
      }

      .action-content .mat-caption {
        margin: 0;
        opacity: 0.7;
      }

      @media (max-width: 768px) {
        .dashboard-container {
          padding: 16px;
        }

        .cards-grid {
          grid-template-columns: 1fr;
        }

        .actions-grid {
          grid-template-columns: 1fr;
        }
      }

      .outbox-section {
        margin-top: 32px;
      }

      .outbox-section h2 {
        margin: 0 0 20px 0;
        color: var(--md-sys-color-on-surface);
      }

      .outbox-card {
        background-color: var(--md-sys-color-surface-container);
        border: 1px solid var(--md-sys-color-outline-variant);
      }

      .outbox-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 24px;
      }

      .outbox-info h3 {
        margin: 0 0 4px 0;
        color: var(--md-sys-color-on-surface);
      }

      .outbox-stats {
        display: flex;
        gap: 24px;
      }

      .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .stat-item .mat-headline-4 {
        margin: 0;
        color: var(--md-sys-color-primary);
        font-weight: 600;
      }

      .stat-item .mat-caption {
        margin: 4px 0 0 0;
        opacity: 0.7;
      }

      .outbox-actions {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;
        flex-wrap: wrap;
      }

      .outbox-actions button {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .outbox-summary {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 8px;
        padding: 16px;
      }

      .summary-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .summary-row:last-child {
        margin-bottom: 0;
      }

      .summary-row .label {
        color: var(--md-sys-color-on-surface);
        font-weight: 500;
      }

      .summary-row .value {
        color: var(--md-sys-color-primary);
        font-weight: 600;
      }

      @media (max-width: 768px) {
        .dashboard-container {
          padding: 16px;
        }

        .cards-grid {
          grid-template-columns: 1fr;
        }

        .actions-grid {
          grid-template-columns: 1fr;
        }

        .outbox-header {
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }

        .outbox-stats {
          justify-content: space-around;
          width: 100%;
        }
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {
  private storage = inject(StorageService);
  private outboxService = inject(OutboxService);
  private platformId = inject(PLATFORM_ID);

  appData: AppData | null = null;
  dataSize = '0 KB';
  completionPercentage = 0;
  lastModified = new Date();
  outboxSummary: OutboxSummary = {
    totalOperations: 0,
    pendingOperations: 0,
    failedOperations: 0,
    syncedOperations: 0,
  };

  dashboardCards: DashboardCard[] = [];

  ngOnInit(): void {
    this.loadAppData();
    this.updateDashboardData();
    this.loadOutboxSummary();
  }

  private loadOutboxSummary(): void {
    this.outboxSummary = this.outboxService.getOutboxSummary();
  }

  simulateSync(): void {
    this.outboxService.simulateSync();
    this.loadOutboxSummary();
  }

  createDemoOperations(): void {
    this.outboxService.createDemoOperations();
    this.loadOutboxSummary();
  }

  // Quick Actions for Sample Data
  seedSampleData(): void {
    const success = this.storage.seedSampleData();
    if (success) {
      this.loadAppData();
      this.updateDashboardData();
      console.log('🎉 Sample data loaded successfully! Refresh the page to see the changes.');
    }
  }

  resetToFactoryDefaults(): void {
    if (confirm('⚠️ This will delete ALL data and reset to factory defaults. Are you sure?')) {
      const success = this.storage.resetToFactoryDefaults();
      if (success) {
        this.loadAppData();
        this.updateDashboardData();
        this.loadOutboxSummary();
        console.log('🔄 System reset to factory defaults. Refresh the page to see the changes.');
      }
    }
  }

  getSampleDataPreview(): Record<string, unknown> {
    return this.storage.getSampleDataPreview();
  }

  private loadAppData(): void {
    try {
      this.appData = this.storage.getSnapshot() as AppData;
    } catch (error) {
      console.warn('Failed to load app data:', error);
      this.appData = this.getDefaultAppData();
    }
  }

  private getDefaultAppData(): AppData {
    return {
      hotel: null,
      roomTypes: [],
      rooms: [],
      ratePlans: [],
      taxes: [],
      amenities: [],
      users: [],
      policies: {
        cancellation: [],
        booking: [],
      },
      lastModified: new Date().toISOString(),
    };
  }

  private updateDashboardData(): void {
    if (!this.appData) {
      this.appData = this.getDefaultAppData();
    }

    // Calculate data size from localStorage (SSR-safe)
    if (isPlatformBrowser(this.platformId)) {
      try {
        const raw = localStorage.getItem('hotel-admin-data');
        const bytes = raw ? new Blob([raw]).size : 0;
        this.dataSize = this.formatBytes(bytes);
      } catch (error) {
        console.warn('Failed to calculate data size:', error);
        this.dataSize = '0 KB';
      }
    }

    // Update last modified
    this.lastModified = new Date(this.appData.lastModified);

    // Update dashboard cards
    this.dashboardCards = [
      {
        title: 'Hotel Configuration',
        subtitle: this.appData.hotel?.hotelname ?? 'Not configured',
        route: '/company-info/hotel-information',
        icon: 'hotel',
        count: this.appData.hotel ? 1 : 0,
        color: 'blue',
        isConfigured: !!this.appData.hotel,
      },
      {
        title: 'Room Types',
        subtitle: `${this.appData.roomTypes.length} types configured`,
        route: '/rooms-manager/room-types',
        icon: 'meeting_room',
        count: this.appData.roomTypes.length,
        color: 'green',
        isConfigured: this.appData.roomTypes.length > 0,
      },
      {
        title: 'Rooms',
        subtitle: `${this.appData.rooms.length} rooms configured`,
        route: '/rooms-manager/room-types',
        icon: 'bed',
        count: this.appData.rooms.length,
        color: 'purple',
        isConfigured: this.appData.rooms.length > 0,
      },
      {
        title: 'Rate Plans',
        subtitle: `${this.appData.ratePlans.length} plans configured`,
        route: '/price-manager/room-prices',
        icon: 'attach_money',
        count: this.appData.ratePlans.length,
        color: 'yellow',
        isConfigured: this.appData.ratePlans.length > 0,
      },
      {
        title: 'Taxes',
        subtitle: `${this.appData.taxes.length} taxes configured`,
        route: '/rooms-manager/room-taxes',
        icon: 'receipt',
        count: this.appData.taxes.length,
        color: 'red',
        isConfigured: this.appData.taxes.length > 0,
      },
      {
        title: 'Amenities',
        subtitle: `${this.appData.amenities.length} amenities available`,
        route: '/rooms-manager/amenities',
        icon: 'spa',
        count: this.appData.amenities.length,
        color: 'indigo',
        isConfigured: this.appData.amenities.length > 0,
      },
      {
        title: 'Users',
        subtitle: `${this.appData.users.length} users configured`,
        route: '/users-manager/users',
        icon: 'people',
        count: this.appData.users.length,
        color: 'pink',
        isConfigured: this.appData.users.length > 0,
      },
      {
        title: 'Policies',
        subtitle: `${this.appData.policies.cancellation.length + this.appData.policies.booking.length} policies set`,
        route: '/general/booking-policy',
        icon: 'policy',
        count:
          this.appData.policies.cancellation.length +
          this.appData.policies.booking.length,
        color: 'gray',
        isConfigured:
          this.appData.policies.cancellation.length +
            this.appData.policies.booking.length >
          0,
      },
    ];

    // Calculate completion percentage
    const configuredItems = this.dashboardCards.filter(
      (card) => card.isConfigured,
    ).length;
    this.completionPercentage = Math.round(
      (configuredItems / this.dashboardCards.length) * 100,
    );
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getIconBackgroundColor(color: string): string {
    const colorMap: Record<string, string> = {
      blue: '#e3f2fd',
      green: '#e8f5e8',
      purple: '#f3e5f5',
      yellow: '#fff8e1',
      red: '#ffebee',
      indigo: '#e8eaf6',
      pink: '#fce4ec',
      gray: '#f5f5f5',
    };
    return colorMap[color] || colorMap['blue'];
  }

  getIconColor(color: string): string {
    const colorMap: Record<string, string> = {
      blue: '#1976d2',
      green: '#388e3c',
      purple: '#7b1fa2',
      yellow: '#f57c00',
      red: '#d32f2f',
      indigo: '#303f9f',
      pink: '#c2185b',
      gray: '#616161',
    };
    return colorMap[color] || colorMap['blue'];
  }
}
