import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CrossNavigationService } from '../../services/cross-navigation.service';

@Component({
  selector: 'app-storage-test',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="storage-test-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Cross-Navigation Storage Test</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h3>localStorage Status:</h3>
          <p><strong>Key:</strong> {{ storageKey }}</p>
          <p><strong>Data Exists:</strong> {{ storageDataExists ? '✅ Yes' : '❌ No' }}</p>
          <p><strong>Version:</strong> {{ storageVersion || 'Not found' }}</p>
          <p><strong>Modules Count:</strong> {{ modulesCount }}</p>
          <p><strong>Links Count:</strong> {{ linksCount }}</p>
          
          <h3>Current Route Data:</h3>
          <p><strong>Current Path:</strong> {{ currentPath }}</p>
          <p><strong>Has Navigation Data:</strong> {{ hasCurrentData ? '✅ Yes' : '❌ No' }}</p>
          <p><strong>Related Links:</strong> {{ currentLinksCount }}</p>
          <p><strong>Workflow Suggestions:</strong> {{ currentWorkflowCount }}</p>
          
          <h3>Actions:</h3>
          <button mat-raised-button color="primary" (click)="forceRefresh()">
            <mat-icon>refresh</mat-icon>
            Force Refresh Data
          </button>
          
          <button mat-raised-button color="accent" (click)="clearStorage()">
            <mat-icon>clear</mat-icon>
            Clear Storage
          </button>
          
          <button mat-raised-button (click)="showRawData()">
            <mat-icon>code</mat-icon>
            Show Raw Data
          </button>
          
          <div *ngIf="rawDataVisible" class="raw-data">
            <h4>Raw localStorage Data:</h4>
            <pre>{{ rawData }}</pre>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .storage-test-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .raw-data {
      margin-top: 20px;
      padding: 10px;
      background: #f5f5f5;
      border-radius: 4px;
    }
    
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      max-height: 400px;
      overflow-y: auto;
    }
    
    button {
      margin: 5px;
    }
  `]
})
export class StorageTestComponent implements OnInit {
  private crossNavService = inject(CrossNavigationService);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  storageKey = 'hotelAdminCrossNavigation';
  storageDataExists = false;
  storageVersion = '';
  modulesCount = 0;
  linksCount = 0;
  currentPath = '';
  hasCurrentData = false;
  currentLinksCount = 0;
  currentWorkflowCount = 0;
  rawDataVisible = false;
  rawData = '';

  ngOnInit() {
    if (this.isBrowser) {
      this.updateStorageInfo();
    }
  }

  updateStorageInfo() {
    if (!this.isBrowser) {
      return;
    }
    
    // Check localStorage directly
    const storedData = localStorage.getItem(this.storageKey);
    this.storageDataExists = !!storedData;
    
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        this.storageVersion = parsed.version || 'Unknown';
        this.modulesCount = parsed.metadata?.totalModules || 0;
        this.linksCount = parsed.metadata?.totalRelatedLinks || 0;
      } catch (error) {
        console.error('Error parsing stored data:', error);
      }
    }

    // Get current service data
    const stats = this.crossNavService.getStatistics();
    
    this.currentPath = this.isBrowser ? window.location.pathname : '/';
    this.hasCurrentData = this.crossNavService.hasDataForPath(this.currentPath);
    this.currentLinksCount = stats.currentModuleLinks;
    this.currentWorkflowCount = this.crossNavService.workflowSuggestions().length;
  }

  forceRefresh() {
    this.crossNavService.refreshData();
    this.updateStorageInfo();
    console.log('Cross-navigation data refreshed');
  }

  clearStorage() {
    if (!this.isBrowser) {
      return;
    }
    localStorage.removeItem(this.storageKey);
    this.updateStorageInfo();
    console.log('localStorage cleared');
  }

  showRawData() {
    if (!this.isBrowser) {
      this.rawData = 'Browser environment required for localStorage access';
      this.rawDataVisible = !this.rawDataVisible;
      return;
    }
    
    const storedData = localStorage.getItem(this.storageKey);
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        this.rawData = JSON.stringify(parsed, null, 2);
      } catch {
        this.rawData = storedData;
      }
    } else {
      this.rawData = 'No data found in localStorage';
    }
    this.rawDataVisible = !this.rawDataVisible;
  }
}
