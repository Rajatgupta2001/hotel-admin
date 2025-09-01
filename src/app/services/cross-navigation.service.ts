import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { 
  CROSS_NAVIGATION_STORAGE, 
  ModuleCrossNavigation, 
  RelatedLink,
  getCrossNavigationForPath,
  getContextualHelp 
} from '../models/cross-navigation.model';

/**
 * Cross-Navigation Service
 * 
 * Manages contextual navigation suggestions and related links
 * throughout the hotel admin application.
 */
@Injectable({
  providedIn: 'root'
})
export class CrossNavigationService {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'hotelAdminCrossNavigation';
  private isBrowser = isPlatformBrowser(this.platformId);

  // Current route signals
  private currentPath = signal<string>('');
  
  // Cross-navigation data signals
  private crossNavData = signal(this.loadFromStorage());
  
  // Computed signals for current context
  public currentCrossNavigation = computed(() => {
    const path = this.currentPath();
    return getCrossNavigationForPath(path);
  });

  public contextualHelp = computed(() => {
    const path = this.currentPath();
    return getContextualHelp(path);
  });

  public relatedLinks = computed(() => {
    return this.currentCrossNavigation()?.relatedLinks || [];
  });

  public workflowSuggestions = computed(() => {
    return this.currentCrossNavigation()?.workflowSuggestions || [];
  });

  public quickActions = computed(() => {
    return this.currentCrossNavigation()?.quickActions || [];
  });

  public globalQuickActions = computed(() => {
    return this.crossNavData().config.globalQuickActions;
  });

  constructor() {
    this.initializeRouteTracking();
    this.initializeLocalStorage(); // Ensure localStorage is set up
  }

  /**
   * Initialize localStorage with cross-navigation data
   */
  private initializeLocalStorage(): void {
    if (!this.isBrowser) {
      console.log('🔍 SSR environment detected, localStorage initialization deferred');
      return;
    }

    // Always save the latest configuration to localStorage
    this.saveToStorage();
    console.log('Cross-navigation data initialized in localStorage');
    console.log('Storage key:', this.STORAGE_KEY);
    console.log('Data:', this.getStorageData());
  }

  /**
   * Initialize route tracking to update current path
   */
  private initializeRouteTracking(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath.set(event.urlAfterRedirects);
      });

    // Set initial path
    this.currentPath.set(this.router.url);
  }

  /**
   * Load cross-navigation configuration from localStorage
   */
  private loadFromStorage(): typeof CROSS_NAVIGATION_STORAGE {
    // Only try to access localStorage in browser environment
    if (!this.isBrowser) {
      console.log('🔍 SSR environment detected, using default configuration');
      return CROSS_NAVIGATION_STORAGE;
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      console.log('🔍 Checking localStorage for key:', this.STORAGE_KEY);
      console.log('📋 Found data:', stored ? 'Yes' : 'No');
      
      if (stored) {
        const parsed = JSON.parse(stored);
        console.log('✅ Successfully parsed stored data');
        console.log('📊 Version:', parsed.version);
        console.log('📈 Modules:', parsed.metadata?.totalModules || 'Unknown');
        
        // Validate version compatibility
        if (parsed.version === CROSS_NAVIGATION_STORAGE.version) {
          console.log('🔄 Version compatible, using stored data');
          return parsed;
        } else {
          console.log('⚠️ Version mismatch, using default configuration');
        }
      }
    } catch (error) {
      console.warn('⚠️ Failed to load cross-navigation data from storage:', error);
    }
    
    // Return default configuration
    console.log('🆕 Using default cross-navigation configuration');
    return CROSS_NAVIGATION_STORAGE;
  }

  /**
   * Save cross-navigation configuration to localStorage
   */
  private saveToStorage(): void {
    // Only try to access localStorage in browser environment
    if (!this.isBrowser) {
      console.log('🔍 SSR environment detected, skipping localStorage save');
      return;
    }

    try {
      const dataToStore = JSON.stringify(CROSS_NAVIGATION_STORAGE);
      localStorage.setItem(this.STORAGE_KEY, dataToStore);
      console.log('✅ Cross-navigation data saved to localStorage');
      console.log('📁 Storage key:', this.STORAGE_KEY);
      console.log('📊 Data size:', dataToStore.length, 'characters');
      console.log('🔍 Sample data:', JSON.stringify(CROSS_NAVIGATION_STORAGE, null, 2).substring(0, 500) + '...');
    } catch (error) {
      console.error('❌ Failed to save cross-navigation data to storage:', error);
    }
  }

  /**
   * Get cross-navigation data for a specific path
   */
  public getCrossNavigationForPath(path: string): ModuleCrossNavigation | null {
    return getCrossNavigationForPath(path);
  }

  /**
   * Get all related links for current path, categorized
   */
  public getCategorizedLinks(): Record<string, RelatedLink[]> {
    const links = this.relatedLinks();
    const categorized: Record<string, RelatedLink[]> = {};
    
    links.forEach(link => {
      if (!categorized[link.category]) {
        categorized[link.category] = [];
      }
      categorized[link.category].push(link);
    });
    
    return categorized;
  }

  /**
   * Navigate to a related link
   */
  public navigateToRelatedLink(link: RelatedLink): void {
    this.router.navigate([link.path]);
  }

  /**
   * Check if a path has cross-navigation data
   */
  public hasDataForPath(path: string): boolean {
    return getCrossNavigationForPath(path) !== null;
  }

  /**
   * Get the raw storage object (for debugging or export)
   */
  public getStorageData(): typeof CROSS_NAVIGATION_STORAGE {
    return this.crossNavData();
  }

  /**
   * Force refresh of cross-navigation data
   */
  public refreshData(): void {
    this.crossNavData.set(this.loadFromStorage());
  }

  /**
   * Get statistics about cross-navigation coverage
   */
  public getStatistics(): {
    totalModules: number;
    totalRelatedLinks: number;
    globalActions: number;
    helpEntries: number;
    currentModuleLinks: number;
  } {
    const data = this.crossNavData();
    const currentNav = this.currentCrossNavigation();
    
    return {
      totalModules: data.metadata.totalModules,
      totalRelatedLinks: data.metadata.totalRelatedLinks,
      globalActions: data.metadata.globalActions,
      helpEntries: data.metadata.helpEntries,
      currentModuleLinks: currentNav ? currentNav.relatedLinks.length : 0
    };
  }

  /**
   * Search for links containing specific text
   */
  public searchRelatedLinks(searchTerm: string): RelatedLink[] {
    const data = this.crossNavData();
    const allLinks: RelatedLink[] = [];
    
    // Collect all links from all modules
    Object.values(data.config.modules).forEach(module => {
      allLinks.push(...module.relatedLinks);
      allLinks.push(...module.workflowSuggestions);
      allLinks.push(...module.quickActions);
    });
    
    // Add global quick actions
    allLinks.push(...data.config.globalQuickActions);
    
    // Filter by search term
    const term = searchTerm.toLowerCase();
    return allLinks.filter(link => 
      link.label.toLowerCase().includes(term) ||
      link.description.toLowerCase().includes(term)
    );
  }

  /**
   * Get links by category across all modules
   */
  public getLinksByCategory(category: string): RelatedLink[] {
    const data = this.crossNavData();
    const links: RelatedLink[] = [];
    
    Object.values(data.config.modules).forEach(module => {
      links.push(...module.relatedLinks.filter(link => link.category === category));
      links.push(...module.workflowSuggestions.filter(link => link.category === category));
      links.push(...module.quickActions.filter(link => link.category === category));
    });
    
    return links;
  }

  /**
   * Get workflow-focused links for current context
   */
  public getWorkflowGuidance(): {
    setupLinks: RelatedLink[];
    workflowLinks: RelatedLink[];
    relatedLinks: RelatedLink[];
  } {
    const current = this.currentCrossNavigation();
    if (!current) {
      return { setupLinks: [], workflowLinks: [], relatedLinks: [] };
    }

    return {
      setupLinks: current.relatedLinks.filter(link => link.category === 'setup'),
      workflowLinks: [
        ...current.workflowSuggestions,
        ...current.relatedLinks.filter(link => link.category === 'workflow')
      ],
      relatedLinks: current.relatedLinks.filter(link => 
        link.category === 'related' || link.category === 'dependency'
      )
    };
  }
}
