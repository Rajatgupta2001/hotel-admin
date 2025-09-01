import {
  Component,
  inject,
  signal,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BackupService, BackupMetadata } from '../../services/backup.service';
import { PwaService } from '../../services/pwa.service';

@Component({
  selector: 'app-backup-restore',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  template: `
    <div class="backup-container">
      <!-- Header -->
      <div class="header-section">
        <div class="header-content">
          <mat-icon class="header-icon">backup</mat-icon>
          <h1 class="header-title">Backup & Restore</h1>
        </div>
        <p class="header-subtitle">Main / Backup & Restore</p>
      </div>

      <!-- Status Cards -->
      <div class="status-cards">
        <mat-card class="status-card">
          <mat-card-content>
            <div class="status-item">
              <mat-icon
                class="status-icon online"
                [class.offline]="!pwaService.isOnline()"
              >
                {{ pwaService.isOnline() ? 'cloud' : 'cloud_off' }}
              </mat-icon>
              <div class="status-text">
                <span class="status-label">Connection</span>
                <span class="status-value">{{
                  pwaService.isOnline() ? 'Online' : 'Offline'
                }}</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="status-card">
          <mat-card-content>
            <div class="status-item">
              <mat-icon class="status-icon">schedule</mat-icon>
              <div class="status-text">
                <span class="status-label">Last Backup</span>
                <span class="status-value">
                  {{
                    backupService.lastBackupTime()
                      ? formatDate(backupService.lastBackupTime()!)
                      : 'Never'
                  }}
                </span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="status-card">
          <mat-card-content>
            <div class="status-item">
              <mat-icon class="status-icon">storage</mat-icon>
              <div class="status-text">
                <span class="status-label">Total Backups</span>
                <span class="status-value">{{
                  backupService.backupList().length
                }}</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="status-card">
          <mat-card-content>
            <div class="status-item">
              <mat-icon
                class="status-icon"
                [class.installed]="pwaService.isInstalled()"
              >
                {{ pwaService.isInstalled() ? 'phone_android' : 'web' }}
              </mat-icon>
              <div class="status-text">
                <span class="status-label">App Status</span>
                <span class="status-value">{{
                  pwaService.isInstalled() ? 'Installed' : 'Web App'
                }}</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Actions Section -->
      <mat-card class="actions-card">
        <mat-card-header>
          <mat-card-title>Backup Actions</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="actions-grid">
            <button
              mat-raised-button
              color="primary"
              (click)="createBackup()"
              [disabled]="backupService.backupInProgress()"
              class="action-button"
            >
              <mat-icon>backup</mat-icon>
              <span>Create Backup</span>
              @if (backupService.backupInProgress()) {
                <mat-spinner diameter="20"></mat-spinner>
              }
            </button>

            <button
              mat-raised-button
              (click)="triggerFileImport()"
              class="action-button"
            >
              <mat-icon>file_upload</mat-icon>
              <span>Import Backup</span>
            </button>

            <button
              mat-raised-button
              (click)="pwaService.checkForUpdates()"
              class="action-button"
            >
              <mat-icon>system_update</mat-icon>
              <span>Check Updates</span>
            </button>

            <button
              mat-raised-button
              color="warn"
              (click)="pwaService.clearCaches()"
              class="action-button"
            >
              <mat-icon>clear_all</mat-icon>
              <span>Clear Cache</span>
            </button>
          </div>

          <!-- Install PWA Button -->
          @if (pwaService.isInstallable()) {
            <div class="install-section">
              <button
                mat-raised-button
                color="accent"
                (click)="pwaService.installApp()"
                class="install-button"
              >
                <mat-icon>install_mobile</mat-icon>
                <span>Install App</span>
              </button>
              <p class="install-text">
                Install for offline access and better performance
              </p>
            </div>
          }
        </mat-card-content>
      </mat-card>

      <!-- Backup List -->
      <mat-card class="backup-list-card">
        <mat-card-header>
          <mat-card-title>Backup History</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          @if (backupService.backupList().length === 0) {
            <div class="no-backups">
              <mat-icon>backup</mat-icon>
              <p>No backups available</p>
              <p class="no-backups-subtitle">
                Create your first backup to get started
              </p>
            </div>
          } @else {
            <div class="backup-list">
              @for (backup of backupService.backupList(); track backup.id) {
                <div class="backup-item">
                  <div class="backup-info">
                    <div class="backup-header">
                      <span class="backup-description">{{
                        backup.description
                      }}</span>
                      @if (backup.autoBackup) {
                        <mat-chip class="auto-chip">AUTO</mat-chip>
                      }
                    </div>
                    <div class="backup-meta">
                      <span class="backup-date">{{
                        formatDate(getDateFromTimestamp(backup.timestamp))
                      }}</span>
                      <span class="backup-size">{{
                        formatFileSize(backup.size)
                      }}</span>
                    </div>
                  </div>

                  <div class="backup-actions">
                    <button
                      mat-icon-button
                      matTooltip="Restore from this backup"
                      (click)="restoreBackup(backup)"
                      [disabled]="backupService.restoreInProgress()"
                    >
                      <mat-icon>restore</mat-icon>
                    </button>

                    <button
                      mat-icon-button
                      matTooltip="Export backup file"
                      (click)="exportBackup(backup)"
                    >
                      <mat-icon>download</mat-icon>
                    </button>

                    <button
                      mat-icon-button
                      matTooltip="View backup details"
                      (click)="viewBackupDetails(backup)"
                    >
                      <mat-icon>info</mat-icon>
                    </button>

                    <button
                      mat-icon-button
                      color="warn"
                      matTooltip="Delete backup"
                      (click)="deleteBackup(backup)"
                    >
                      <mat-icon>delete</mat-icon>
                    </button>
                  </div>
                </div>
              }
            </div>
          }
        </mat-card-content>
      </mat-card>

      <!-- Hidden file input -->
      <input
        #fileInput
        type="file"
        accept=".json"
        (change)="onFileSelected($event)"
        style="display: none;"
      />
    </div>
  `,
  styles: [
    `
      .backup-container {
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

      .status-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 12px;
        margin-bottom: 20px;
      }

      .status-card {
        padding: 0;
      }

      .status-item {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .status-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
        color: var(--md-sys-color-primary);
      }

      .status-icon.offline {
        color: var(--md-sys-color-error);
      }

      .status-icon.installed {
        color: var(--md-sys-color-success, #4caf50);
      }

      .status-text {
        display: flex;
        flex-direction: column;
      }

      .status-label {
        font-size: 9px;
        color: var(--md-sys-color-on-surface-variant);
        font-weight: 500;
      }

      .status-value {
        font-size: 11px;
        color: var(--md-sys-color-on-surface);
        font-weight: 600;
      }

      .actions-card {
        margin-bottom: 20px;
      }

      .actions-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 12px;
        margin-bottom: 16px;
      }

      .action-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        font-size: 10px;
      }

      .action-button mat-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }

      .install-section {
        text-align: center;
        padding: 16px;
        border: 2px dashed var(--md-sys-color-outline-variant);
        border-radius: 8px;
        margin-top: 16px;
      }

      .install-button {
        margin-bottom: 8px;
      }

      .install-text {
        margin: 0;
        font-size: 9px;
        color: var(--md-sys-color-on-surface-variant);
      }

      .backup-list-card {
        margin-bottom: 20px;
      }

      .no-backups {
        text-align: center;
        padding: 40px 20px;
        color: var(--md-sys-color-on-surface-variant);
      }

      .no-backups mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }

      .no-backups p {
        margin: 8px 0;
        font-size: 11px;
      }

      .no-backups-subtitle {
        font-size: 9px !important;
        opacity: 0.7;
      }

      .backup-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .backup-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: 8px;
        background: var(--md-sys-color-surface-container-lowest);
      }

      .backup-item:hover {
        background: var(--md-sys-color-surface-container-low);
      }

      .backup-info {
        flex: 1;
      }

      .backup-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 4px;
      }

      .backup-description {
        font-size: 11px;
        font-weight: 500;
        color: var(--md-sys-color-on-surface);
      }

      .auto-chip {
        --mdc-chip-container-height: 18px;
        font-size: 8px;
        background: var(--md-sys-color-tertiary-container);
        color: var(--md-sys-color-on-tertiary-container);
      }

      .backup-meta {
        display: flex;
        gap: 16px;
        font-size: 9px;
        color: var(--md-sys-color-on-surface-variant);
      }

      .backup-actions {
        display: flex;
        gap: 4px;
      }

      .backup-actions button {
        width: 32px;
        height: 32px;
      }

      .backup-actions mat-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }

      /* Responsive design */
      @media (max-width: 768px) {
        .status-cards {
          grid-template-columns: 1fr;
        }

        .actions-grid {
          grid-template-columns: 1fr;
        }

        .backup-item {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .backup-actions {
          align-self: stretch;
          justify-content: space-around;
        }
      }

      /* Material Design 3 overrides */
      ::ng-deep .mat-mdc-card-title {
        font-size: 12px;
        font-weight: 600;
      }

      ::ng-deep .mat-mdc-card-content {
        font-size: 10px;
      }

      ::ng-deep .mat-mdc-spinner circle {
        stroke: currentColor;
      }
    `,
  ],
})
export class BackupRestoreComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  backupService = inject(BackupService);
  pwaService = inject(PwaService);
  private dialog = inject(MatDialog);

  backupDescription = signal('');

  async createBackup(): Promise<void> {
    const description = prompt('Enter backup description (optional):');
    await this.backupService.createBackup(description || undefined);
  }

  async restoreBackup(backup: BackupMetadata): Promise<void> {
    const confirmed = confirm(
      `Are you sure you want to restore from this backup?\\n\\n` +
        `"${backup.description}"\\n\\n` +
        `This will replace all current data. This action cannot be undone.`,
    );

    if (confirmed) {
      await this.backupService.restoreFromBackup(backup.id);
    }
  }

  async exportBackup(backup: BackupMetadata): Promise<void> {
    await this.backupService.exportBackup(backup.id);
  }

  deleteBackup(backup: BackupMetadata): void {
    const confirmed = confirm(
      `Are you sure you want to delete this backup?\\n\\n` +
        `"${backup.description}"\\n\\n` +
        `This action cannot be undone.`,
    );

    if (confirmed) {
      this.backupService.deleteBackup(backup.id);
    }
  }

  viewBackupDetails(backup: BackupMetadata): void {
    const details = this.backupService.getBackupDetails(backup.id);
    if (details) {
      const message =
        `Backup Details:\\n\\n` +
        `ID: ${backup.id}\\n` +
        `Description: ${backup.description}\\n` +
        `Date: ${this.formatDate(this.getDateFromTimestamp(backup.timestamp))}\\n` +
        `Size: ${this.formatFileSize(backup.size)}\\n` +
        `Type: ${backup.autoBackup ? 'Automatic' : 'Manual'}\\n` +
        `Version: ${backup.version}`;

      alert(message);
    }
  }

  triggerFileImport(): void {
    this.fileInput.nativeElement.click();
  }

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      await this.backupService.importBackup(file);
      // Clear the input
      input.value = '';
    }
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getDateFromTimestamp(timestamp: number): Date {
    return new Date(timestamp);
  }
}
