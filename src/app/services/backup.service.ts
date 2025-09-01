import {
  Injectable,
  inject,
  signal,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HotelData } from '../models/hotel-data.model';

export interface BackupMetadata {
  id: string;
  timestamp: number;
  date: string;
  size: number;
  version: string;
  description?: string;
  autoBackup: boolean;
}

export type AppSettings = Record<string, string>;
export type UserPreferences = Record<string, string>;

export interface BackupData {
  metadata: BackupMetadata;
  hotelData: Partial<HotelData>;
  appSettings: AppSettings;
  userPreferences: UserPreferences;
}

@Injectable({
  providedIn: 'root',
})
export class BackupService implements OnDestroy {
  private snackBar = inject(MatSnackBar);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private readonly BACKUP_PREFIX = 'hotel_backup_';
  private readonly BACKUP_LIST_KEY = 'hotel_backup_list';
  private readonly MAX_BACKUPS = 50;
  private readonly AUTO_BACKUP_INTERVAL = 5 * 60 * 1000; // 5 minutes

  backupInProgress = signal(false);
  restoreInProgress = signal(false);
  lastBackupTime = signal<Date | null>(null);
  backupList = signal<BackupMetadata[]>([]);

  private autoBackupTimer?: NodeJS.Timeout;

  // SSR-safe localStorage accessor
  private get browserStorage(): Storage | null {
    try {
      return this.isBrowser && typeof localStorage !== 'undefined'
        ? localStorage
        : null;
    } catch {
      return null;
    }
  }

  constructor() {
    // Only initialize localStorage-dependent features in browser
    if (this.isBrowser) {
      this.loadBackupList();
      this.startAutoBackup();
      this.updateLastBackupTime();
    }
  }

  ngOnDestroy(): void {
    if (this.autoBackupTimer) {
      clearInterval(this.autoBackupTimer);
    }
  }

  /**
   * Create a manual backup of hotel data
   */
  async createBackup(description?: string): Promise<boolean> {
    try {
      this.backupInProgress.set(true);

      const storage = this.browserStorage;
      if (!storage) {
        console.warn('localStorage not available');
        return false;
      }

      const hotelData = this.getHotelDataFromStorage();
      const appSettings = this.getAppSettingsFromStorage();
      const userPreferences = this.getUserPreferencesFromStorage();

      const backupId = this.generateBackupId();
      const timestamp = Date.now();

      const backupData: BackupData = {
        metadata: {
          id: backupId,
          timestamp,
          date: new Date(timestamp).toISOString(),
          size: 0,
          version: '1.0.0',
          description:
            description ||
            `Manual backup - ${new Date(timestamp).toLocaleString()}`,
          autoBackup: false,
        },
        hotelData,
        appSettings,
        userPreferences,
      };

      // Calculate size
      const dataString = JSON.stringify(backupData);
      backupData.metadata.size = new Blob([dataString]).size;

      // Store backup
      const backupKey = this.BACKUP_PREFIX + backupId;
      storage.setItem(backupKey, dataString);

      // Update backup list
      this.addToBackupList(backupData.metadata);

      // Cleanup old backups
      this.cleanupOldBackups();

      this.lastBackupTime.set(new Date(timestamp));

      this.snackBar.open(
        `Backup created successfully: ${this.formatFileSize(backupData.metadata.size)}`,
        'Close',
        { duration: 3000 },
      );

      return true;
    } catch (error) {
      console.error('Error creating backup:', error);
      this.snackBar.open(
        'Failed to create backup. Please try again.',
        'Close',
        {
          duration: 5000,
        },
      );
      return false;
    } finally {
      this.backupInProgress.set(false);
    }
  }

  /**
   * Create automatic backup
   */
  private async createAutoBackup(): Promise<void> {
    try {
      if (!this.isBrowser) {
        return;
      }

      const storage = this.browserStorage;
      if (!storage) {
        return;
      }

      const hotelData = this.getHotelDataFromStorage();
      const appSettings = this.getAppSettingsFromStorage();
      const userPreferences = this.getUserPreferencesFromStorage();

      const backupId = this.generateBackupId();
      const timestamp = Date.now();

      const backupData: BackupData = {
        metadata: {
          id: backupId,
          timestamp,
          date: new Date(timestamp).toISOString(),
          size: 0,
          version: '1.0.0',
          description: `Auto backup - ${new Date(timestamp).toLocaleString()}`,
          autoBackup: true,
        },
        hotelData,
        appSettings,
        userPreferences,
      };

      const dataString = JSON.stringify(backupData);
      backupData.metadata.size = new Blob([dataString]).size;

      const backupKey = this.BACKUP_PREFIX + backupId;
      storage.setItem(backupKey, dataString);

      this.addToBackupList(backupData.metadata);
      this.cleanupOldBackups();
      this.lastBackupTime.set(new Date(timestamp));
    } catch (error) {
      console.error('Error creating auto backup:', error);
    }
  }

  /**
   * Restore data from backup
   */
  async restoreFromBackup(backupId: string): Promise<boolean> {
    try {
      this.restoreInProgress.set(true);

      const storage = this.browserStorage;
      if (!storage) {
        console.warn('localStorage not available');
        return false;
      }

      const backupKey = this.BACKUP_PREFIX + backupId;
      const backupDataString = storage.getItem(backupKey);

      if (!backupDataString) {
        throw new Error('Backup not found');
      }

      const backupData: BackupData = JSON.parse(backupDataString);

      // Restore hotel data
      if (backupData.hotelData) {
        storage.setItem(
          'hotel-admin-data',
          JSON.stringify(backupData.hotelData),
        );
      }

      // Restore app settings
      if (backupData.appSettings) {
        Object.keys(backupData.appSettings).forEach((key) => {
          const value = backupData.appSettings[key];
          if (value !== null && value !== undefined) {
            storage.setItem(key, value);
          }
        });
      }

      // Restore user preferences
      if (backupData.userPreferences) {
        Object.keys(backupData.userPreferences).forEach((key) => {
          const value = backupData.userPreferences[key];
          if (value !== null && value !== undefined) {
            storage.setItem(key, value);
          }
        });
      }

      this.snackBar.open(
        `Data restored successfully from backup: ${backupData.metadata.description}`,
        'Close',
        { duration: 3000 },
      );

      // Trigger page reload to reflect changes
      setTimeout(() => {
        window.location.reload();
      }, 1000);

      return true;
    } catch (error) {
      console.error('Error restoring backup:', error);
      this.snackBar.open(
        'Failed to restore backup. Please try again.',
        'Close',
        {
          duration: 5000,
        },
      );
      return false;
    } finally {
      this.restoreInProgress.set(false);
    }
  }

  /**
   * Delete a specific backup
   */
  deleteBackup(backupId: string): boolean {
    try {
      const storage = this.browserStorage;
      if (!storage) {
        console.warn('localStorage not available');
        return false;
      }

      const backupKey = this.BACKUP_PREFIX + backupId;
      storage.removeItem(backupKey);

      const currentList = this.backupList();
      const updatedList = currentList.filter(
        (backup) => backup.id !== backupId,
      );
      this.backupList.set(updatedList);
      this.saveBackupList();

      this.snackBar.open('Backup deleted successfully', 'Close', {
        duration: 2000,
      });
      return true;
    } catch (error) {
      console.error('Error deleting backup:', error);
      this.snackBar.open('Failed to delete backup', 'Close', {
        duration: 3000,
      });
      return false;
    }
  }

  /**
   * Export backup to file
   */
  async exportBackup(backupId: string): Promise<void> {
    try {
      const storage = this.browserStorage;
      if (!storage) {
        throw new Error('localStorage not available');
      }

      const backupKey = this.BACKUP_PREFIX + backupId;
      const backupDataString = storage.getItem(backupKey);

      if (!backupDataString) {
        throw new Error('Backup not found');
      }

      const backupData: BackupData = JSON.parse(backupDataString);
      const fileName = `hotel-backup-${backupData.metadata.date.split('T')[0]}-${backupId.substring(0, 8)}.json`;

      const blob = new Blob([backupDataString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);

      this.snackBar.open('Backup exported successfully', 'Close', {
        duration: 2000,
      });
    } catch (error) {
      console.error('Error exporting backup:', error);
      this.snackBar.open('Failed to export backup', 'Close', {
        duration: 3000,
      });
    }
  }

  /**
   * Import backup from file
   */
  async importBackup(file: File): Promise<boolean> {
    try {
      const storage = this.browserStorage;
      if (!storage) {
        console.warn('localStorage not available');
        return false;
      }

      const fileContent = await this.readFileAsText(file);
      const backupData: BackupData = JSON.parse(fileContent);

      // Validate backup structure
      if (!backupData.metadata || !backupData.hotelData) {
        throw new Error('Invalid backup file format');
      }

      // Generate new ID to avoid conflicts
      const newBackupId = this.generateBackupId();
      backupData.metadata.id = newBackupId;
      backupData.metadata.description = `Imported: ${backupData.metadata.description}`;

      // Store imported backup
      const backupKey = this.BACKUP_PREFIX + newBackupId;
      storage.setItem(backupKey, JSON.stringify(backupData));

      // Update backup list
      this.addToBackupList(backupData.metadata);

      this.snackBar.open('Backup imported successfully', 'Close', {
        duration: 3000,
      });
      return true;
    } catch (error) {
      console.error('Error importing backup:', error);
      this.snackBar.open(
        'Failed to import backup. Please check the file format.',
        'Close',
        {
          duration: 5000,
        },
      );
      return false;
    }
  }

  /**
   * Get backup details
   */
  getBackupDetails(backupId: string): BackupData | null {
    try {
      const storage = this.browserStorage;
      if (!storage) {
        return null;
      }

      const backupKey = this.BACKUP_PREFIX + backupId;
      const backupDataString = storage.getItem(backupKey);

      if (!backupDataString) {
        return null;
      }

      return JSON.parse(backupDataString);
    } catch (error) {
      console.error('Error getting backup details:', error);
      return null;
    }
  }

  /**
   * Auto-backup after data changes
   */
  triggerAutoBackupOnDataChange(): void {
    // Clear existing timer
    if (this.autoBackupTimer) {
      clearTimeout(this.autoBackupTimer);
    }

    // Set new timer
    this.autoBackupTimer = setTimeout(() => {
      this.createAutoBackup();
    }, 30000); // 30 seconds after last change
  }

  /**
   * Clean up old backups
   */
  private cleanupOldBackups(): void {
    const backups = this.backupList();

    if (backups.length > this.MAX_BACKUPS) {
      const storage = this.browserStorage;
      if (!storage) {
        return;
      }

      // Sort by timestamp and remove oldest
      const sortedBackups = [...backups].sort(
        (a, b) => a.timestamp - b.timestamp,
      );
      const backupsToDelete = sortedBackups.slice(
        0,
        backups.length - this.MAX_BACKUPS,
      );

      backupsToDelete.forEach((backup) => {
        const backupKey = this.BACKUP_PREFIX + backup.id;
        storage.removeItem(backupKey);
      });

      // Update backup list
      const remainingBackups = sortedBackups.slice(
        backups.length - this.MAX_BACKUPS,
      );
      this.backupList.set(remainingBackups);
      this.saveBackupList();
    }
  }

  /**
   * Private helper methods
   */
  private generateBackupId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  private addToBackupList(metadata: BackupMetadata): void {
    const currentList = this.backupList();
    const updatedList = [metadata, ...currentList];
    this.backupList.set(updatedList);
    this.saveBackupList();
  }

  private loadBackupList(): void {
    try {
      const storage = this.browserStorage;
      if (!storage) {
        this.backupList.set([]);
        return;
      }

      const listString = storage.getItem(this.BACKUP_LIST_KEY);
      if (listString) {
        const list: BackupMetadata[] = JSON.parse(listString);
        this.backupList.set(list);
      }
    } catch (error) {
      console.error('Error loading backup list:', error);
      this.backupList.set([]);
    }
  }

  private saveBackupList(): void {
    try {
      const storage = this.browserStorage;
      if (!storage) {
        return;
      }

      storage.setItem(this.BACKUP_LIST_KEY, JSON.stringify(this.backupList()));
    } catch (error) {
      console.error('Error saving backup list:', error);
    }
  }

  private updateLastBackupTime(): void {
    const backups = this.backupList();
    if (backups.length > 0) {
      const latest = backups.reduce((latest, current) =>
        current.timestamp > latest.timestamp ? current : latest,
      );
      this.lastBackupTime.set(new Date(latest.timestamp));
    }
  }

  private startAutoBackup(): void {
    // Only start auto backup if we're in the browser
    if (!this.isBrowser) {
      return;
    }

    // Create initial backup if none exists
    if (this.backupList().length === 0) {
      setTimeout(() => {
        if (this.isBrowser) {
          this.createAutoBackup();
        }
      }, 5000);
    }

    // Set up periodic auto-backup
    this.autoBackupTimer = setInterval(() => {
      if (this.isBrowser) {
        this.createAutoBackup();
      }
    }, this.AUTO_BACKUP_INTERVAL);
  }

  private getHotelDataFromStorage(): Partial<HotelData> {
    try {
      const storage = this.browserStorage;
      if (!storage) {
        return {};
      }

      // Use the same key as StorageService
      const data = storage.getItem('hotel-admin-data');
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Error getting hotel data:', error);
      return {};
    }
  }

  private getAppSettingsFromStorage(): AppSettings {
    const settings: AppSettings = {};
    const storage = this.browserStorage;
    if (!storage) {
      return settings;
    }

    const keys = [
      'defaultSettings',
      'userPreferences',
      'appConfig',
      'themeSettings',
      'languageSettings',
    ];

    keys.forEach((key) => {
      const value = storage.getItem(key);
      if (value) {
        settings[key] = value;
      }
    });

    return settings;
  }

  private getUserPreferencesFromStorage(): UserPreferences {
    const preferences: UserPreferences = {};
    const storage = this.browserStorage;
    if (!storage) {
      return preferences;
    }

    // Get all localStorage keys that look like user preferences
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i);
      if (
        key &&
        (key.startsWith('user_') ||
          key.startsWith('pref_') ||
          key.includes('Settings') ||
          key.includes('Config'))
      ) {
        const value = storage.getItem(key);
        if (value !== null) {
          preferences[key] = value;
        }
      }
    }

    return preferences;
  }

  private readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
