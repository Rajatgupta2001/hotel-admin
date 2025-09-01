import { Component, inject, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { HotelStore } from '../../services/hotel-store.service';
import { StorageService } from '../../services/storage.service';
import { IndexedDbService } from '../../services/indexeddb.service';

interface DashboardCard {
  title: string;
  count: number;
  icon: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  template: `
    <div class="dashboard-container">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p class="text-gray-600">Overview of your hotel configuration</p>
      </div>

      <!-- Validation Status -->
      <mat-card class="mb-6">
        <mat-card-content class="!p-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-semibold text-gray-900 mb-1">
                Validation Status
              </h2>
              <p
                class="text-sm"
                [ngClass]="lastSuccess ? 'text-green-700' : 'text-red-700'"
              >
                {{
                  validationRan
                    ? lastSuccess
                      ? 'All good. No errors found.'
                      : lastErrors.length + ' error(s) found.'
                    : 'Not validated yet.'
                }}
              </p>
              @if (validationRan && !lastSuccess) {
                <ul class="mt-2 list-disc pl-6 text-sm text-red-700">
                  @for (error of lastErrors; track error) {
                    <li>{{ error }}</li>
                  }
                </ul>
              }
            </div>
            <button mat-raised-button color="primary" (click)="validateNow()">
              Validate Now
            </button>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Hotel Status Card -->
      @if (store.hotel()) {
        <mat-card class="mb-6 !bg-blue-50 !border-blue-200">
          <mat-card-content class="!p-6">
            <div class="flex items-center">
              <mat-icon class="text-blue-600 text-4xl mr-4">hotel</mat-icon>
              <div>
                <h2 class="text-xl font-semibold text-blue-900">
                  {{ store.hotel().name }}
                </h2>
                <p class="text-blue-700">{{ store.hotel().description }}</p>
                <div class="flex items-center mt-2 text-sm text-blue-600">
                  <mat-icon class="text-sm mr-1">bed</mat-icon>
                  <span>{{ store.hotel().totalRooms }} rooms configured</span>
                </div>
              </div>
            </div>
          </mat-card-content>
          <mat-card-actions class="!px-6 !pb-6">
            <button mat-raised-button color="primary" routerLink="/hotel">
              <mat-icon class="mr-2">edit</mat-icon>
              Edit Hotel Details
            </button>
          </mat-card-actions>
        </mat-card>
      } @else {
        <mat-card class="mb-6 !bg-amber-50 !border-amber-200">
          <mat-card-content class="!p-6">
            <div class="flex items-center">
              <mat-icon class="text-amber-600 text-4xl mr-4">warning</mat-icon>
              <div>
                <h2 class="text-xl font-semibold text-amber-900">
                  No Hotel Configured
                </h2>
                <p class="text-amber-700">
                  Start by setting up your hotel information
                </p>
              </div>
            </div>
          </mat-card-content>
          <mat-card-actions class="!px-6 !pb-6">
            <button mat-raised-button color="accent" routerLink="/hotel">
              <mat-icon class="mr-2">add</mat-icon>
              Setup Hotel
            </button>
          </mat-card-actions>
        </mat-card>
      }

      <!-- Statistics Grid -->
      <mat-grid-list
        cols="4"
        rowHeight="200"
        gutterSize="16"
        class="dashboard-grid"
      >
        @for (card of dashboardCards(); track card.route) {
          <mat-grid-tile>
            <mat-card
              class="w-full h-full cursor-pointer hover:shadow-md transition-shadow"
              [routerLink]="card.route"
            >
              <mat-card-content
                class="!p-6 h-full flex flex-col justify-between"
              >
                <div class="flex items-center justify-between mb-4">
                  <mat-icon [class]="'text-4xl ' + card.color">{{
                    card.icon
                  }}</mat-icon>
                  <span [class]="'text-3xl font-bold ' + card.color">{{
                    card.count
                  }}</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    {{ card.title }}
                  </h3>
                  <p class="text-sm text-gray-600">Click to manage</p>
                </div>
              </mat-card-content>
            </mat-card>
          </mat-grid-tile>
        }
      </mat-grid-list>

      <!-- Quick Actions -->
      <div class="mt-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <mat-card
            class="cursor-pointer hover:shadow-md transition-shadow"
            (click)="debugLocalStorage()"
          >
            <mat-card-content class="!p-4 text-center">
              <mat-icon class="text-blue-600 text-3xl mb-2"
                >bug_report</mat-icon
              >
              <h3 class="font-semibold">Debug Storage</h3>
              <p class="text-sm text-gray-600">Check localStorage state</p>
            </mat-card-content>
          </mat-card>

          <mat-card
            class="cursor-pointer hover:shadow-md transition-shadow"
            (click)="testDataStorage()"
          >
            <mat-card-content class="!p-4 text-center">
              <mat-icon class="text-orange-600 text-3xl mb-2">science</mat-icon>
              <h3 class="font-semibold">Test Storage</h3>
              <p class="text-sm text-gray-600">Add test data</p>
            </mat-card-content>
          </mat-card>

          <mat-card
            class="cursor-pointer hover:shadow-md transition-shadow"
            routerLink="/general/backup-restore"
          >
            <mat-card-content class="!p-4 text-center">
              <mat-icon class="text-green-600 text-3xl mb-2">backup</mat-icon>
              <h3 class="font-semibold">Backup & Restore</h3>
              <p class="text-sm text-gray-600">Manage backups</p>
            </mat-card-content>
          </mat-card>

          <mat-card
            class="cursor-pointer hover:shadow-md transition-shadow"
            (click)="clearOfflineData()"
          >
            <mat-card-content class="!p-4 text-center">
              <mat-icon class="text-red-600 text-3xl mb-2">refresh</mat-icon>
              <h3 class="font-semibold">Reset Data</h3>
              <p class="text-sm text-gray-600">Clear all configuration</p>
            </mat-card-content>
          </mat-card>

          <mat-card
            class="cursor-pointer hover:shadow-md transition-shadow"
            (click)="showPWAInfo()"
          >
            <mat-card-content class="!p-4 text-center">
              <mat-icon class="text-purple-600 text-3xl mb-2">{{
                isOnline() ? 'cloud_done' : 'cloud_off'
              }}</mat-icon>
              <h3 class="font-semibold">
                {{ isOnline() ? 'Online' : 'Offline' }}
              </h3>
              <p class="text-sm text-gray-600">Works offline</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .dashboard-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .dashboard-grid {
        margin-bottom: 2rem;
      }

      @media (max-width: 768px) {
        .dashboard-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }

      @media (max-width: 480px) {
        .dashboard-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `,
  ],
})
export class DashboardComponent {
  public store = inject(HotelStore);
  private storage = inject(StorageService);
  private idb = inject(IndexedDbService);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Validation state
  validationRan = false;
  lastSuccess = false;
  lastErrors: string[] = [];

  isOnline = computed(() => (this.isBrowser ? navigator.onLine : true));

  dashboardCards = computed((): DashboardCard[] =>
    this.isBrowser
      ? [
          {
            title: 'Room Types',
            count: this.store.roomTypes().length,
            icon: 'meeting_room',
            route: '/room-types',
            color: 'text-blue-600',
          },
          {
            title: 'Rooms',
            count: this.store.rooms().length,
            icon: 'bed',
            route: '/rooms',
            color: 'text-green-600',
          },
          {
            title: 'Rate Plans',
            count: this.store.ratePlans().length,
            icon: 'attach_money',
            route: '/rate-plans',
            color: 'text-yellow-600',
          },
          {
            title: 'Taxes',
            count: this.store.taxes().length,
            icon: 'receipt',
            route: '/taxes',
            color: 'text-red-600',
          },
          {
            title: 'Policies',
            count: this.store.policies().length,
            icon: 'policy',
            route: '/policies',
            color: 'text-purple-600',
          },
          {
            title: 'Amenities',
            count: this.store.amenities().length,
            icon: 'pool',
            route: '/amenities',
            color: 'text-indigo-600',
          },
          {
            title: 'Users',
            count: this.store.users().length,
            icon: 'people',
            route: '/users',
            color: 'text-pink-600',
          },
          {
            title: 'Total Items',
            count:
              this.store.roomTypes().length +
              this.store.rooms().length +
              this.store.ratePlans().length +
              this.store.taxes().length +
              this.store.policies().length +
              this.store.amenities().length +
              this.store.users().length,
            icon: 'storage',
            route: '/import-export',
            color: 'text-gray-600',
          },
        ]
      : [],
  );

  validateNow(): void {
    const res = this.store.validateCurrent();
    this.validationRan = true;
    this.lastSuccess = res.ok;
    this.lastErrors = res.errors ?? [];
  }

  clearOfflineData(): void {
    if (
      confirm(
        'Are you sure you want to clear all offline data? This cannot be undone.',
      )
    ) {
      this.store.resetAll();
      void this.idb.clearHotelData();
      alert('All data has been cleared successfully.');
    }
  }

  showPWAInfo(): void {
    const online = this.isBrowser ? navigator.onLine : true;
    const status = this.validationRan
      ? this.lastSuccess
        ? 'Validation OK.'
        : `${this.lastErrors.length} error(s) in data.`
      : 'Not validated yet.';
    const message = online
      ? `You are currently online. All features are available. ${status}`
      : `You are offline. The app will continue to work with cached data. ${status}`;
    alert(message);
  }

  debugLocalStorage(): void {
    console.log('🔍 Debug LocalStorage clicked');
    this.storage.debugStorage();

    // Also check if data exists
    const hasData = this.storage.hasPersistedData();
    const snapshot = this.storage.getSnapshot();

    console.log('Storage state:', {
      hasPersistedData: hasData,
      snapshotKeys: Object.keys(snapshot),
      hotel: snapshot.hotel,
      counts: {
        roomTypes: snapshot.roomTypes.length,
        rooms: snapshot.rooms.length,
        amenities: snapshot.amenities.length,
        users: snapshot.users.length,
      },
    });

    alert(`LocalStorage Debug Info logged to console. Has data: ${hasData}`);
  }

  testDataStorage(): void {
    console.log('🧪 Testing data storage...');

    // Add a test hotel
    const testHotel = {
      id: 1,
      compid: 1,
      hotelname: 'Test Hotel',
      description: 'Test hotel for storage verification',
      status: 'active',
      createdby: 1,
      modifiedby: 1,
    };

    this.storage.setHotel(testHotel);
    console.log('✅ Test hotel saved');

    // Add a test amenity
    const testAmenity = {
      id: 1,
      hotelid: 1,
      title: 'WiFi',
      shortname: 'wifi',
      description: 'Free WiFi internet access',
      icon: 'wifi',
      status: 'active',
      createdby: 1,
      modifiedby: 1,
    };

    this.storage.addAmenity(testAmenity);
    console.log('✅ Test amenity saved');

    // Verify data was stored
    setTimeout(() => {
      this.debugLocalStorage();
    }, 500);

    alert('Test data added! Check console for details.');
  }
}
