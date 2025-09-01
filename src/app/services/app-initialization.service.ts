import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CrossNavigationService } from './cross-navigation.service';

/**
 * App Initialization Service
 * 
 * Ensures all core services are properly initialized when the app starts
 */
@Injectable({
  providedIn: 'root'
})
export class AppInitializationService {
  private crossNavigationService = inject(CrossNavigationService);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  constructor() {
    this.initializeApp();
  }

  private initializeApp(): void {
    console.log('🚀 Initializing Hotel Admin PWA...');
    
    // Force initialization of cross-navigation service
    this.initializeCrossNavigation();
    
    console.log('✅ Hotel Admin PWA initialization complete');
  }

  private initializeCrossNavigation(): void {
    console.log('🧭 Initializing Cross-Navigation System...');
    
    try {
      // Trigger initialization by accessing service data
      this.crossNavigationService.getStorageData();
      const stats = this.crossNavigationService.getStatistics();
      
      console.log('📊 Cross-Navigation Statistics:');
      console.log(`  📁 Total Modules: ${stats.totalModules}`);
      console.log(`  🔗 Total Links: ${stats.totalRelatedLinks}`);
      console.log(`  ⚡ Global Actions: ${stats.globalActions}`);
      console.log(`  📝 Help Entries: ${stats.helpEntries}`);
      
      // Verify localStorage only in browser
      if (this.isBrowser) {
        const stored = localStorage.getItem('hotelAdminCrossNavigation');
        if (stored) {
          console.log('✅ Cross-navigation data found in localStorage');
          console.log(`📐 Data size: ${stored.length} characters`);
        } else {
          console.log('ℹ️ No cross-navigation data found in localStorage (this is normal on first load)');
        }
      } else {
        console.log('ℹ️ Browser localStorage check skipped (SSR environment)');
      }
      
    } catch (error) {
      console.error('❌ Cross-navigation initialization failed:', error);
    }
  }

  public forceReinitialize(): void {
    this.initializeApp();
  }
}
