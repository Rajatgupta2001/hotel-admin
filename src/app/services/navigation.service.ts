import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAVIGATION_MENU, NavigationItem } from '../models/navigation.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private router = inject(Router);

  private currentMainTab = signal<NavigationItem | null>(null);
  private currentSubTabs = signal<NavigationItem[]>([]);
  private activeSubTab = signal<string>('');

  readonly currentMainTab$ = this.currentMainTab.asReadonly();
  readonly currentSubTabs$ = this.currentSubTabs.asReadonly();
  readonly activeSubTab$ = this.activeSubTab.asReadonly();

  constructor() {
    // Listen to route changes to update navigation state
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateNavigationState(event.url);
      });
  }

  private updateNavigationState(url: string): void {
    console.log('Updating navigation state for URL:', url);

    // Find the main tab and subtabs based on current URL
    const mainTab = this.findMainTabByUrl(url);
    console.log('Found main tab:', mainTab);

    if (mainTab) {
      this.currentMainTab.set(mainTab);
      this.currentSubTabs.set(mainTab.children || []);

      // Find active subtab
      const activeSubTab = this.findActiveSubTab(url, mainTab.children || []);
      console.log('Found active subtab:', activeSubTab);
      this.activeSubTab.set(activeSubTab);
    } else {
      // Handle dashboard or direct routes
      console.log('No main tab found, handling as direct route');
      this.currentMainTab.set(null);
      this.currentSubTabs.set([]);
      this.activeSubTab.set('');
    }
  }

  private findMainTabByUrl(url: string): NavigationItem | null {
    console.log('Finding main tab for URL:', url);

    for (const item of NAVIGATION_MENU) {
      // For items with children, check if any child path matches
      if (item.children && item.children.length > 0) {
        const hasMatchingChild = item.children.some((child) => {
          if (child.path) {
            const matches = url.startsWith(child.path);
            console.log(
              `Checking child path ${child.path} against ${url}: ${matches}`,
            );
            return matches;
          }
          return false;
        });

        if (hasMatchingChild) {
          console.log(`Found matching main tab: ${item.label}`);
          return item;
        }
      }
      // For direct items (like Dashboard), check exact match
      else if (item.path) {
        const matches = url === item.path || url.startsWith(item.path + '/');
        console.log(
          `Checking direct path ${item.path} against ${url}: ${matches}`,
        );
        if (matches) {
          console.log(`Found matching direct tab: ${item.label}`);
          return item;
        }
      }
    }

    console.log('No matching main tab found');
    return null;
  }

  private findActiveSubTab(url: string, subTabs: NavigationItem[]): string {
    console.log(
      'Finding active subtab for URL:',
      url,
      'from tabs:',
      subTabs.map((t) => t.path),
    );

    const activeTab = subTabs.find((tab) => {
      if (tab.path) {
        const matches = url === tab.path || url.startsWith(tab.path + '/');
        console.log(`Checking subtab ${tab.path} against ${url}: ${matches}`);
        return matches;
      }
      return false;
    });

    const result = activeTab?.path || '';
    console.log('Active subtab result:', result);
    return result;
  }

  setMainTab(mainTab: NavigationItem): void {
    this.currentMainTab.set(mainTab);
    this.currentSubTabs.set(mainTab.children || []);
    this.activeSubTab.set('');
  }

  getNavigationMenu(): NavigationItem[] {
    return NAVIGATION_MENU;
  }

  navigateToSubTab(path: string): void {
    this.router.navigate([path]);
  }
}
