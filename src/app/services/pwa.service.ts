import { Injectable, signal, inject } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter } from 'rxjs/operators';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface ExtendedNavigator extends Navigator {
  standalone?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private swUpdate = inject(SwUpdate);
  private snackBar = inject(MatSnackBar);

  isOnline = signal(navigator.onLine);
  isInstallable = signal(false);
  hasUpdate = signal(false);
  isInstalled = signal(false);

  private deferredPrompt: BeforeInstallPromptEvent | null = null;

  constructor() {
    this.initializeOnlineStatus();
    this.initializeServiceWorker();
    this.initializeInstallPrompt();
    this.checkIfInstalled();
  }

  /**
   * Initialize online/offline status monitoring
   */
  private initializeOnlineStatus(): void {
    window.addEventListener('online', () => {
      this.isOnline.set(true);
      this.snackBar.open(
        '🟢 Back online! Data will sync automatically.',
        'Close',
        {
          duration: 3000,
          panelClass: ['success-snackbar'],
        },
      );
    });

    window.addEventListener('offline', () => {
      this.isOnline.set(false);
      this.snackBar.open(
        '🔴 You are offline. Changes will be saved locally.',
        'Close',
        {
          duration: 5000,
          panelClass: ['warning-snackbar'],
        },
      );
    });
  }

  /**
   * Initialize service worker for app updates
   */
  private initializeServiceWorker(): void {
    if (this.swUpdate.isEnabled) {
      // Check for updates
      this.swUpdate.versionUpdates
        .pipe(
          filter((evt): evt is VersionEvent => evt.type === 'VERSION_READY'),
        )
        .subscribe(() => {
          this.hasUpdate.set(true);
          this.showUpdateAvailableSnackbar();
        });

      // Check for updates periodically
      this.swUpdate.checkForUpdate().then(() => {
        console.log('Checked for app updates');
      });

      // Check for updates every 6 hours
      setInterval(
        () => {
          this.swUpdate.checkForUpdate();
        },
        6 * 60 * 60 * 1000,
      );
    }
  }

  /**
   * Handle beforeinstallprompt event
   */
  private initializeInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      this.deferredPrompt = e as BeforeInstallPromptEvent;
      this.isInstallable.set(true);
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null;
      this.isInstallable.set(false);
      console.log('PWA was installed');
    });
  }

  /**
   * Check if app is installed
   */
  private checkIfInstalled(): void {
    // Check if running in standalone mode (iOS)
    if ((window.navigator as ExtendedNavigator).standalone === true) {
      this.isInstalled.set(true);
      return;
    }

    // Check if running in standalone mode (Android)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled.set(true);
      return;
    }

    // Check if running as TWA (Trusted Web Activity)
    if (document.referrer.includes('android-app://')) {
      this.isInstalled.set(true);
      return;
    }

    this.isInstalled.set(false);
  }

  /**
   * Show update available notification
   */
  private showUpdateAvailableSnackbar(): void {
    const snackBarRef = this.snackBar.open(
      '🆕 New version available! Update now for the latest features.',
      'Update',
      {
        duration: 0, // Don't auto-dismiss
        panelClass: ['update-snackbar'],
      },
    );

    snackBarRef.onAction().subscribe(() => {
      this.updateApp();
    });
  }

  /**
   * Show install prompt
   */
  private showInstallPrompt(): void {
    if (!this.isInstallable()) return;

    const snackBarRef = this.snackBar.open(
      '📱 Install Hotel Admin for quick access and offline use!',
      'Install',
      {
        duration: 15000,
        panelClass: ['install-snackbar'],
      },
    );

    snackBarRef.onAction().subscribe(() => {
      this.installApp();
    });
  }

  /**
   * Install the PWA
   */
  async installApp(): Promise<void> {
    if (!this.deferredPrompt) {
      this.snackBar.open('Install prompt not available', 'Close', {
        duration: 3000,
      });
      return;
    }

    try {
      // Show the install prompt
      this.deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const { outcome } = await this.deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        this.snackBar.open('Installing app...', 'Close', { duration: 3000 });
      } else {
        console.log('User dismissed the install prompt');
      }

      // Clear the deferredPrompt
      this.deferredPrompt = null;
      this.isInstallable.set(false);
    } catch (error) {
      console.error('Error during app installation:', error);
      this.snackBar.open('Failed to install app. Please try again.', 'Close', {
        duration: 5000,
      });
    }
  }

  /**
   * Update the app
   */
  updateApp(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate
        .activateUpdate()
        .then(() => {
          this.snackBar.open('✅ App updated! Reloading...', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          });

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((error) => {
          console.error('Failed to update app:', error);
          this.snackBar.open(
            'Failed to update app. Please try again.',
            'Close',
            {
              duration: 5000,
            },
          );
        });
    }
  }

  /**
   * Clear all caches (for troubleshooting)
   */
  async clearCaches(): Promise<void> {
    try {
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName)),
        );
      }

      this.snackBar.open('✅ Caches cleared successfully', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar'],
      });
    } catch (error) {
      console.error('Error clearing caches:', error);
      this.snackBar.open('Failed to clear caches', 'Close', { duration: 3000 });
    }
  }

  /**
   * Get app info
   */
  getAppInfo(): {
    isOnline: boolean;
    isInstalled: boolean;
    isInstallable: boolean;
    hasUpdate: boolean;
    swSupported: boolean;
  } {
    return {
      isOnline: this.isOnline(),
      isInstalled: this.isInstalled(),
      isInstallable: this.isInstallable(),
      hasUpdate: this.hasUpdate(),
      swSupported: this.swUpdate.isEnabled,
    };
  }

  /**
   * Force check for updates
   */
  async checkForUpdates(): Promise<void> {
    if (this.swUpdate.isEnabled) {
      try {
        const updateAvailable = await this.swUpdate.checkForUpdate();
        if (!updateAvailable) {
          this.snackBar.open('✅ You have the latest version', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          });
        }
      } catch (error) {
        console.error('Error checking for updates:', error);
        this.snackBar.open('Failed to check for updates', 'Close', {
          duration: 3000,
        });
      }
    } else {
      this.snackBar.open('Service Worker not supported', 'Close', {
        duration: 3000,
      });
    }
  }
}
