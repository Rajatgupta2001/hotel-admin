import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { NavigationService } from '../../services/navigation.service';
import { NavigationItem } from '../../models/navigation.model';
import { SubTabsComponent } from '../sub-tabs/sub-tabs.component';
import { CrossNavigationWidgetComponent } from '../cross-navigation-widget/cross-navigation-widget.component';

@Component({
  selector: 'app-main-layout-enhanced',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    SubTabsComponent,
    CrossNavigationWidgetComponent,
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="'navigation'"
        [mode]="'side'"
        [opened]="true"
      >
        <div class="sidenav-header">
          <h2 class="sidenav-title">Hotel Admin</h2>
          <p class="sidenav-subtitle">Management Panel</p>
        </div>

        <mat-nav-list class="nav-list">
          <ng-container *ngFor="let item of navigationItems">
            <!-- Dashboard - Direct navigation -->
            <a
              mat-list-item
              *ngIf="item.path && !item.children"
              [routerLink]="item.path"
              routerLinkActive="active-link"
              class="main-nav-item"
            >
              <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
              <span matListItemTitle>{{ item.label }}</span>
              <span *ngIf="item.badge" matListItemMeta>
                <span
                  matBadge="{{ item.badge }}"
                  matBadgeColor="primary"
                  matBadgeSize="small"
                ></span>
              </span>
            </a>

            <!-- Main sections with children -->
            <button
              mat-list-item
              *ngIf="item.children && item.children.length > 0"
              (click)="onMainTabClick(item)"
              (keyup.enter)="onMainTabClick(item)"
              (keyup.space)="onMainTabClick(item)"
              class="main-nav-item"
              [class.active-main-tab]="isMainTabActive(item)"
              type="button"
              [attr.aria-label]="'Navigate to ' + item.label"
            >
              <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
              <span matListItemTitle>{{ item.label }}</span>
              <span *ngIf="item.badge" matListItemMeta>
                <span
                  matBadge="{{ item.badge }}"
                  matBadgeColor="primary"
                  matBadgeSize="small"
                ></span>
              </span>
            </button>
          </ng-container>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar color="primary" class="main-toolbar">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            class="menu-button"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <div class="toolbar-content">
            <span class="toolbar-title">{{ getToolbarTitle() }}</span>
          </div>
        </mat-toolbar>

        <!-- Sub-tabs navigation -->
        <app-sub-tabs></app-sub-tabs>

        <div class="main-content">
          <router-outlet></router-outlet>
        </div>

        <!-- Cross-Navigation Widget -->
        <app-cross-navigation-widget></app-cross-navigation-widget>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .sidenav-container {
        height: 100vh;
        background: var(--md-sys-color-surface);
      }

      .sidenav {
        width: 240px;
        background: var(--md-sys-color-surface-container-low);
        border-right: 1px solid var(--md-sys-color-outline-variant);
        font-size: 10px;
      }

      .sidenav-header {
        padding: 16px 16px;
        background: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      .sidenav-title {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--md-sys-color-on-primary-container);
      }

      .sidenav-subtitle {
        margin: 4px 0 0 0;
        font-size: 10px;
        opacity: 0.8;
        color: var(--md-sys-color-on-primary-container);
      }

      .nav-list {
        padding: 6px 0;
      }

      .main-nav-item {
        height: 40px;
        margin: 0 8px 2px 8px;
        border-radius: 8px;
        color: var(--md-sys-color-on-surface);
        transition: all 0.2s ease;
        border: none;
        background: transparent;
        width: calc(100% - 16px);
        text-align: left;
        cursor: pointer;
        font-size: 10px;
      }

      .main-nav-item:hover {
        background: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-secondary-container);
      }

      .main-nav-item.active-link,
      .main-nav-item.active-main-tab {
        background: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
      }

      .main-toolbar {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .toolbar-content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .toolbar-title {
        font-size: 14px;
        font-weight: 500;
        margin-left: 16px;
      }

      .menu-button {
        margin-right: 8px;
      }

      .main-content {
        padding: 16px;
        min-height: calc(100vh - 64px - 56px); /* Account for toolbar and sub-tabs */
        background: var(--md-sys-color-surface);
        position: relative;
      }

      /* Responsive design */
      @media (max-width: 768px) {
        .sidenav {
          width: 100%;
        }
        
        .main-content {
          padding: 8px;
        }
      }
    `,
  ],
})
export class MainLayoutEnhancedComponent implements OnInit {
  private navigationService = inject(NavigationService);

  navigationItems: NavigationItem[] =
    this.navigationService.getNavigationMenu();
  currentMainTab = this.navigationService.currentMainTab$;

  ngOnInit(): void {
    console.log('MainLayoutEnhancedComponent initialized');
    console.log('Navigation items:', this.navigationItems);
  }

  onMainTabClick(mainTab: NavigationItem): void {
    // If the main tab has children, navigate to the first child
    if (mainTab.children && mainTab.children.length > 0) {
      const firstChild = mainTab.children[0];
      if (firstChild.path) {
        this.navigationService.navigateToSubTab(firstChild.path);
      }
    } else if (mainTab.path) {
      // If it's a direct link (like Dashboard), navigate directly
      this.navigationService.navigateToSubTab(mainTab.path);
    }
  }

  isMainTabActive(mainTab: NavigationItem): boolean {
    const currentTab = this.currentMainTab();
    return currentTab?.label === mainTab.label;
  }

  getToolbarTitle(): string {
    const currentTab = this.currentMainTab();
    return currentTab ? currentTab.label : 'Hotel Administration Panel';
  }
}
