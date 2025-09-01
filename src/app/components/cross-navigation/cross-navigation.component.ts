import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CrossNavigationService } from '../../services/cross-navigation.service';
import { RelatedLink } from '../../models/cross-navigation.model';

/**
 * Cross-Navigation Component
 * 
 * Displays contextual navigation suggestions, related links,
 * and workflow guidance based on the current route.
 */
@Component({
  selector: 'app-cross-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule
  ],
  template: `
    <div class="cross-navigation-container" *ngIf="hasNavigationData()">
      <!-- Contextual Help -->
      <mat-card class="help-card" *ngIf="contextualHelp()">
        <mat-card-header>
          <mat-icon mat-card-avatar>help_outline</mat-icon>
          <mat-card-title>Navigation Guide</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p class="help-text">{{ contextualHelp() }}</p>
        </mat-card-content>
      </mat-card>

      <!-- Quick Actions -->
      <mat-card class="actions-card" *ngIf="quickActions().length > 0">
        <mat-card-header>
          <mat-icon mat-card-avatar>flash_on</mat-icon>
          <mat-card-title>Quick Actions</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="action-buttons">
            <button 
              mat-raised-button 
              color="primary"
              *ngFor="let action of quickActions()"
              [matTooltip]="action.description"
              (click)="navigateToLink(action)">
              <mat-icon>{{ action.icon }}</mat-icon>
              {{ action.label }}
            </button>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Workflow Suggestions -->
      <mat-card class="workflow-card" *ngIf="workflowSuggestions().length > 0">
        <mat-card-header>
          <mat-icon mat-card-avatar>timeline</mat-icon>
          <mat-card-title>Next Steps</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="workflow-list">
            <div 
              class="workflow-item"
              *ngFor="let suggestion of workflowSuggestions()">
              <button 
                mat-stroked-button
                color="accent"
                (click)="navigateToLink(suggestion)"
                [matTooltip]="suggestion.description">
                <mat-icon>{{ suggestion.icon }}</mat-icon>
                {{ suggestion.label }}
              </button>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Related Links by Category -->
      <mat-card class="related-card" *ngIf="categorizedLinks() && Object.keys(categorizedLinks()).length > 0">
        <mat-card-header>
          <mat-icon mat-card-avatar>link</mat-icon>
          <mat-card-title>Related Features</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div *ngFor="let category of Object.keys(categorizedLinks())" class="category-section">
            <div class="category-header">
              <mat-chip [class]="'category-' + category">
                {{ getCategoryLabel(category) }}
              </mat-chip>
            </div>
            <div class="category-links">
              <button 
                mat-button
                *ngFor="let link of categorizedLinks()[category]"
                (click)="navigateToLink(link)"
                [matTooltip]="link.description"
                class="related-link">
                <mat-icon>{{ link.icon }}</mat-icon>
                {{ link.label }}
              </button>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Global Quick Actions -->
      <mat-card class="global-actions-card">
        <mat-card-header>
          <mat-icon mat-card-avatar>apps</mat-icon>
          <mat-card-title>Global Navigation</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="global-actions">
            <button 
              mat-button
              *ngFor="let action of globalQuickActions()"
              (click)="navigateToLink(action)"
              [matTooltip]="action.description"
              class="global-action">
              <mat-icon>{{ action.icon }}</mat-icon>
              {{ action.label }}
            </button>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .cross-navigation-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
      max-width: 400px;
    }

    .help-card {
      background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
    }

    .help-text {
      margin: 0;
      color: #424242;
      line-height: 1.5;
    }

    .actions-card {
      background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
    }

    .action-buttons {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .action-buttons button {
      justify-content: flex-start;
    }

    .workflow-card {
      background: linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%);
    }

    .workflow-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .workflow-item button {
      width: 100%;
      justify-content: flex-start;
    }

    .related-card {
      background: linear-gradient(135deg, #f9fbe7 0%, #f3e5f5 100%);
    }

    .category-section {
      margin-bottom: 16px;
    }

    .category-section:last-child {
      margin-bottom: 0;
    }

    .category-header {
      margin-bottom: 8px;
    }

    .category-links {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .related-link {
      justify-content: flex-start;
      padding-left: 16px;
    }

    .category-setup {
      background-color: #2196f3;
      color: white;
    }

    .category-workflow {
      background-color: #4caf50;
      color: white;
    }

    .category-related {
      background-color: #ff9800;
      color: white;
    }

    .category-dependency {
      background-color: #9c27b0;
      color: white;
    }

    .global-actions-card {
      background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    }

    .global-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .global-action {
      flex: 1;
      min-width: calc(50% - 4px);
      justify-content: flex-start;
    }

    mat-icon {
      margin-right: 8px;
    }

    mat-card-header mat-icon {
      margin-right: 0;
    }

    mat-card-title {
      color: #424242;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .cross-navigation-container {
        max-width: 100%;
        padding: 8px;
      }

      .global-action {
        min-width: 100%;
      }
    }
  `]
})
export class CrossNavigationComponent {
  private crossNavService = inject(CrossNavigationService);

  // Expose service computed signals
  public contextualHelp = this.crossNavService.contextualHelp;
  public relatedLinks = this.crossNavService.relatedLinks;
  public workflowSuggestions = this.crossNavService.workflowSuggestions;
  public quickActions = this.crossNavService.quickActions;
  public globalQuickActions = this.crossNavService.globalQuickActions;

  // Get categorized links
  public categorizedLinks = computed(() => {
    return this.crossNavService.getCategorizedLinks();
  });

  /**
   * Check if current route has navigation data
   */
  public hasNavigationData(): boolean {
    return this.crossNavService.hasDataForPath(this.crossNavService['currentPath']());
  }

  /**
   * Navigate to a related link
   */
  public navigateToLink(link: RelatedLink): void {
    this.crossNavService.navigateToRelatedLink(link);
  }

  /**
   * Get user-friendly category labels
   */
  public getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'setup': 'Setup Required',
      'workflow': 'Workflow',
      'related': 'Related Features',
      'dependency': 'Dependencies'
    };
    return labels[category] || category;
  }

  /**
   * Get Object.keys for template use
   */
  public Object = Object;
}
