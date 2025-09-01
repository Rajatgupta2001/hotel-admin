import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-sub-tabs',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, MatIconModule],
  template: `
    @if (subTabs().length > 0) {
      <div class="subtabs-container">
        <mat-tab-group
          class="subtabs-group"
          [selectedIndex]="selectedTabIndex()"
          (selectedIndexChange)="onTabChange($event)"
          mat-stretch-tabs
          dynamicHeight
        >
          @for (tab of subTabs(); track trackByPath($index, tab)) {
            <mat-tab [label]="tab.label">
              <ng-template mat-tab-label>
                <div class="tab-label">
                  <mat-icon class="tab-icon">{{ tab.icon }}</mat-icon>
                  <span>{{ tab.label }}</span>
                </div>
              </ng-template>
            </mat-tab>
          }
        </mat-tab-group>
      </div>
    }
  `,
  styles: [
    `
      .subtabs-container {
        background: white;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .subtabs-group {
        --mdc-tab-height: 40px;
      }

      .tab-label {
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: 500;
        font-size: 9px;
      }

      .tab-icon {
        font-size: 14px;
        width: 14px;
        height: 14px;
      }

      ::ng-deep .mat-mdc-tab-group {
        --mdc-tab-text-label-text-color: var(--md-sys-color-on-surface-variant);
        --mdc-tab-text-label-text-size: 9px;
      }

      ::ng-deep .mat-mdc-tab.mdc-tab--active {
        --mdc-tab-text-label-text-color: var(--md-sys-color-primary);
      }

      ::ng-deep .mat-mdc-tab-body-content {
        height: 0;
        overflow: hidden;
      }

      ::ng-deep
        .mdc-tab-indicator--active
        .mdc-tab-indicator__content--underline {
        border-color: var(--md-sys-color-primary);
        border-width: 3px;
      }

      ::ng-deep .mdc-tab {
        min-width: 100px;
        padding: 0 12px;
      }

      ::ng-deep .mdc-tab__content {
        align-items: center;
      }
    `,
  ],
})
export class SubTabsComponent {
  private navigationService = inject(NavigationService);

  subTabs = this.navigationService.currentSubTabs$;
  activeSubTab = this.navigationService.activeSubTab$;

  selectedTabIndex = computed(() => {
    const subTabs = this.subTabs();
    const activeTab = this.activeSubTab();

    if (!activeTab || !subTabs.length) return -1;

    return subTabs.findIndex((tab) => tab.path === activeTab);
  });

  onTabChange(index: number): void {
    const subTabs = this.subTabs();
    if (index >= 0 && index < subTabs.length && subTabs[index].path) {
      this.navigationService.navigateToSubTab(subTabs[index].path!);
    }
  }

  trackByPath(index: number, item: { path?: string }): string {
    return item.path || index.toString();
  }
}
