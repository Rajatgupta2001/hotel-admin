import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { CrossNavigationService } from '../../services/cross-navigation.service';
import { RelatedLink } from '../../models/cross-navigation.model';

/**
 * Cross-Navigation Widget
 * 
 * Compact navigation helper that can be embedded in the main layout.
 * Shows related links and suggestions through a menu interface.
 */
@Component({
  selector: 'app-cross-navigation-widget',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  template: `
    <div class="nav-widget" *ngIf="hasNavigationData()">
      <button 
        mat-fab 
        color="accent"
        [matMenuTriggerFor]="navMenu"
        [matBadge]="totalLinksCount()"
        [matBadgeHidden]="totalLinksCount() === 0"
        matBadgeColor="primary"
        matTooltip="Related features and quick actions"
        class="nav-fab">
        <mat-icon>explore</mat-icon>
      </button>

      <mat-menu #navMenu="matMenu" class="nav-menu">
        <!-- Contextual Help -->
        <div class="menu-section" *ngIf="contextualHelp()">
          <div class="menu-header">
            <mat-icon>help_outline</mat-icon>
            <span>Guide</span>
          </div>
          <div class="help-text">{{ contextualHelp() }}</div>
        </div>

        <div mat-menu-item disabled class="divider" *ngIf="contextualHelp()"></div>

        <!-- Quick Actions -->
        <div class="menu-section" *ngIf="quickActions().length > 0">
          <div class="menu-header">
            <mat-icon>flash_on</mat-icon>
            <span>Quick Actions</span>
          </div>
          <button 
            mat-menu-item
            *ngFor="let action of quickActions()"
            (click)="navigateToLink(action)">
            <mat-icon>{{ action.icon }}</mat-icon>
            <span>{{ action.label }}</span>
          </button>
        </div>

        <div mat-menu-item disabled class="divider" *ngIf="quickActions().length > 0 && (workflowSuggestions().length > 0 || relatedLinks().length > 0)"></div>

        <!-- Workflow Suggestions -->
        <div class="menu-section" *ngIf="workflowSuggestions().length > 0">
          <div class="menu-header">
            <mat-icon>timeline</mat-icon>
            <span>Next Steps</span>
          </div>
          <button 
            mat-menu-item
            *ngFor="let suggestion of workflowSuggestions()"
            (click)="navigateToLink(suggestion)">
            <mat-icon>{{ suggestion.icon }}</mat-icon>
            <span>{{ suggestion.label }}</span>
          </button>
        </div>

        <div mat-menu-item disabled class="divider" *ngIf="workflowSuggestions().length > 0 && relatedLinks().length > 0"></div>

        <!-- Top Related Links -->
        <div class="menu-section" *ngIf="topRelatedLinks().length > 0">
          <div class="menu-header">
            <mat-icon>link</mat-icon>
            <span>Related</span>
          </div>
          <button 
            mat-menu-item
            *ngFor="let link of topRelatedLinks()"
            (click)="navigateToLink(link)">
            <mat-icon>{{ link.icon }}</mat-icon>
            <span>{{ link.label }}</span>
          </button>
          <button 
            mat-menu-item
            *ngIf="relatedLinks().length > 3"
            (click)="showAllRelatedLinks()">
            <mat-icon>more_horiz</mat-icon>
            <span>Show {{ relatedLinks().length - 3 }} more...</span>
          </button>
        </div>

        <div mat-menu-item disabled class="divider" *ngIf="hasCurrentModuleLinks()"></div>

        <!-- Global Quick Access -->
        <div class="menu-section">
          <div class="menu-header">
            <mat-icon>apps</mat-icon>
            <span>Quick Access</span>
          </div>
          <button 
            mat-menu-item
            *ngFor="let action of globalQuickActions() | slice:0:4"
            (click)="navigateToLink(action)">
            <mat-icon>{{ action.icon }}</mat-icon>
            <span>{{ action.label }}</span>
          </button>
        </div>
      </mat-menu>
    </div>
  `,
  styles: [`
    .nav-widget {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 1000;
    }

    .nav-fab {
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    .nav-menu {
      max-width: 300px;
    }

    .menu-section {
      padding: 8px 0;
    }

    .menu-header {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-weight: 500;
      color: #666;
      font-size: 0.9em;
      text-transform: uppercase;
    }

    .menu-header mat-icon {
      margin-right: 8px;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .help-text {
      padding: 8px 16px;
      font-size: 0.85em;
      color: #757575;
      line-height: 1.4;
      background-color: #f5f5f5;
      margin: 0 8px;
      border-radius: 4px;
    }

    .divider {
      height: 1px;
      background-color: #e0e0e0;
      margin: 4px 0;
    }

    ::ng-deep .mat-mdc-menu-panel {
      max-height: 80vh;
      overflow-y: auto;
    }

    @media (max-width: 768px) {
      .nav-widget {
        bottom: 16px;
        right: 16px;
      }

      .nav-fab {
        transform: scale(0.8);
      }
    }
  `]
})
export class CrossNavigationWidgetComponent {
  private crossNavService = inject(CrossNavigationService);

  // Expose service computed signals
  public contextualHelp = this.crossNavService.contextualHelp;
  public relatedLinks = this.crossNavService.relatedLinks;
  public workflowSuggestions = this.crossNavService.workflowSuggestions;
  public quickActions = this.crossNavService.quickActions;
  public globalQuickActions = this.crossNavService.globalQuickActions;

  // Get top 3 related links for compact display
  public topRelatedLinks = computed(() => {
    return this.relatedLinks().slice(0, 3);
  });

  // Calculate total available links for badge
  public totalLinksCount = computed(() => {
    return this.quickActions().length + 
           this.workflowSuggestions().length + 
           this.relatedLinks().length;
  });

  /**
   * Check if current route has navigation data
   */
  public hasNavigationData(): boolean {
    return this.crossNavService.hasDataForPath(this.crossNavService['currentPath']());
  }

  /**
   * Check if there are current module links
   */
  public hasCurrentModuleLinks(): boolean {
    return this.totalLinksCount() > 0;
  }

  /**
   * Navigate to a related link
   */
  public navigateToLink(link: RelatedLink): void {
    this.crossNavService.navigateToRelatedLink(link);
  }

  /**
   * Show all related links (could trigger a dialog or navigation)
   */
  public showAllRelatedLinks(): void {
    // For now, just log the action - could be enhanced to show a dialog
    console.log('Show all related links:', this.relatedLinks());
    // Could navigate to a dedicated cross-navigation page or open a dialog
  }
}
