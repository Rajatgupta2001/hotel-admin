import { Injectable, signal, inject, computed, effect } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppData } from '../../models';
import { StorageService } from './storage.service';
import { BackupService } from './backup.service';

export interface HistoryState {
  id: string;
  timestamp: number;
  description: string;
  data: AppData;
}

/**
 * Service for managing undo/redo functionality across the application
 * Handles saving and restoring application state
 */
@Injectable({
  providedIn: 'root',
})
export class UndoService {
  private storageService = inject(StorageService);
  private backupService = inject(BackupService);
  private snackBar = inject(MatSnackBar);

  // Configuration constants
  private readonly APP_DATA_KEY = 'hotel-admin-data';
  private readonly HISTORY_KEY = 'hotel_history_stack';
  private maxHistorySize = 30; // Increased from 20 to 30
  
  // Signals for reactive state management
  history = signal<HistoryState[]>([]);
  currentIndex = signal(-1);
  canUndo = computed(() => this.currentIndex() > 0 && this.history().length > 0);
  canRedo = computed(() => this.currentIndex() < this.history().length - 1 && this.history().length > 0);
  
  // Track last action for UI feedback
  lastAction = signal<{type: 'undo' | 'redo' | 'new' | null, description: string | null}>({
    type: null,
    description: null
  });

  constructor() {
    this.loadHistory();
    
    // Set up effect to automatically save history when it changes
    effect(() => {
      // This effect will run whenever history changes
      const historyValue = this.history();
      
      if (historyValue && historyValue.length > 0) {
        this.saveHistory();
      }
    });
  }

  /**
   * Push a new state to the history stack
   * @param description Human-readable description of the change
   * @param data Optional data to use instead of current snapshot
   */
  pushState(description: string, data?: AppData): void {
    try {
      const currentData = data || this.storageService.getSnapshot();
      const currentIndex = this.currentIndex();
      const history = this.history();

      // Create a new history state with deep clone of data
      const newState: HistoryState = {
        id: this.generateStateId(),
        timestamp: Date.now(),
        description,
        data: JSON.parse(JSON.stringify(currentData)), // Deep clone to prevent reference issues
      };

      // If we're not at the end of the history, remove everything after current index
      const newHistory = history.slice(0, currentIndex + 1);
      
      // Add the new state and update the index
      newHistory.push(newState);
      
      // Trim history if it exceeds the maximum
      if (newHistory.length > this.maxHistorySize) {
        newHistory.shift();
      }
      
      // Update signals
      this.history.set(newHistory);
      this.currentIndex.set(newHistory.length - 1);
      
      // Update last action
      this.lastAction.set({
        type: 'new',
        description
      });
      
      // Notify the backup service about data change
      this.backupService.triggerAutoBackupOnDataChange();
    } catch (error) {
      console.error('Error pushing state to history:', error);
      this.showErrorSnackbar('Failed to save state for undo');
    }
  }

  /**
   * Undo the last action
   * @returns boolean indicating success
   */
  undo(): boolean {
    if (!this.canUndo()) {
      return false;
    }

    try {
      const currentIndex = this.currentIndex();
      const history = this.history();
      const prevState = history[currentIndex - 1];
      
      // Restore the previous state
      this.restoreState(prevState);
      
      // Update index
      this.currentIndex.set(currentIndex - 1);
      
      // Update last action
      this.lastAction.set({
        type: 'undo',
        description: prevState.description
      });
      
      // Show notification
      this.showUndoSnackbar(prevState.description);
      
      return true;
    } catch (error) {
      console.error('Error during undo operation:', error);
      this.showErrorSnackbar('Failed to undo action');
      return false;
    }
  }

  /**
   * Redo the previously undone action
   * @returns boolean indicating success
   */
  redo(): boolean {
    if (!this.canRedo()) {
      return false;
    }

    try {
      const currentIndex = this.currentIndex();
      const history = this.history();
      const nextState = history[currentIndex + 1];
      
      // Restore the next state
      this.restoreState(nextState);
      
      // Update index
      this.currentIndex.set(currentIndex + 1);
      
      // Update last action
      this.lastAction.set({
        type: 'redo',
        description: nextState.description
      });
      
      // Show notification
      this.showRedoSnackbar(nextState.description);
      
      return true;
    } catch (error) {
      console.error('Error during redo operation:', error);
      this.showErrorSnackbar('Failed to redo action');
      return false;
    }
  }

  /**
   * Clear the history stack
   */
  clearHistory(): void {
    this.history.set([]);
    this.currentIndex.set(-1);
    this.lastAction.set({
      type: null,
      description: null
    });
    this.saveHistory();
  }

  /**
   * Get history states for display in UI
   * Excludes the actual data to save memory
   */
  getHistoryStates(): Omit<HistoryState, 'data'>[] {
    return this.history().map(state => ({
      id: state.id,
      timestamp: state.timestamp,
      description: state.description
    }));
  }

  /**
   * Get the current state timestamp
   * @returns timestamp of current state or null if no history
   */
  getCurrentStateTimestamp(): number | null {
    const index = this.currentIndex();
    const history = this.history();
    
    if (index >= 0 && index < history.length) {
      return history[index].timestamp;
    }
    
    return null;
  }

  /**
   * Jump to a specific point in history by index
   * @param index The history index to jump to
   * @returns boolean indicating success
   */
  jumpToState(index: number): boolean {
    const history = this.history();
    
    if (index < 0 || index >= history.length) {
      return false;
    }
    
    try {
      const targetState = history[index];
      const currentIndex = this.currentIndex();
      
      // Restore the state
      this.restoreState(targetState);
      
      // Update index
      this.currentIndex.set(index);
      
      // Update last action
      this.lastAction.set({
        type: index > currentIndex ? 'redo' : 'undo',
        description: targetState.description
      });
      
      // Show notification
      this.showJumpSnackbar(targetState.description);
      
      return true;
    } catch (error) {
      console.error('Error jumping to state:', error);
      this.showErrorSnackbar('Failed to jump to selected state');
      return false;
    }
  }

  /**
   * Set maximum history size and trim if necessary
   * @param size New maximum history size
   */
  setMaxHistorySize(size: number): void {
    if (size < 1) return;
    
    this.maxHistorySize = size;
    
    // Trim history if needed
    const history = this.history();
    if (history.length > size) {
      const newHistory = history.slice(history.length - size);
      this.history.set(newHistory);
      
      // Adjust current index if needed
      const currentIndex = this.currentIndex();
      const newIndex = Math.min(currentIndex, newHistory.length - 1);
      this.currentIndex.set(newIndex);
    }
  }

  /**
   * Get the maximum history size
   */
  getMaxHistorySize(): number {
    return this.maxHistorySize;
  }

  /**
   * Private helper methods
   */
  private restoreState(state: HistoryState): void {
    // Apply the state to localStorage
    localStorage.setItem(this.APP_DATA_KEY, JSON.stringify(state.data));
    
    // If StorageService has a direct import method, use it
    if (typeof this.storageService.importData === 'function') {
      this.storageService.importData(JSON.stringify(state.data));
    }
  }

  private showUndoSnackbar(description: string): void {
    const message = `Undone: ${description}`;
    
    const snackBarRef = this.snackBar.open(message, 'Redo', {
      duration: 4000,
      panelClass: ['undo-snackbar'],
    });

    snackBarRef.onAction().subscribe(() => {
      this.redo();
    });
  }

  private showRedoSnackbar(description: string): void {
    const message = `Redone: ${description}`;
    
    const snackBarRef = this.snackBar.open(message, 'Undo', {
      duration: 4000,
      panelClass: ['redo-snackbar'],
    });

    snackBarRef.onAction().subscribe(() => {
      this.undo();
    });
  }

  private showJumpSnackbar(description: string): void {
    const message = `Jumped to: ${description}`;
    
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['jump-snackbar'],
    });
  }

  private showErrorSnackbar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 5000,
      panelClass: ['error-snackbar'],
    });
  }

  private generateStateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  private loadHistory(): void {
    try {
      const historyJson = localStorage.getItem(this.HISTORY_KEY);
      if (historyJson) {
        const parsedHistory = JSON.parse(historyJson) as HistoryState[];
        
        // Validate the history before setting it
        if (Array.isArray(parsedHistory) && parsedHistory.every(item => 
          item && typeof item.id === 'string' && 
          typeof item.timestamp === 'number' && 
          typeof item.description === 'string' && 
          item.data !== undefined
        )) {
          this.history.set(parsedHistory);
          this.currentIndex.set(parsedHistory.length - 1);
        } else {
          throw new Error('Invalid history format');
        }
      }
    } catch (error) {
      console.error('Error loading history:', error);
      // Reset history in case of error
      this.history.set([]);
      this.currentIndex.set(-1);
      // Clear corrupted history
      localStorage.removeItem(this.HISTORY_KEY);
    }
  }

  private saveHistory(): void {
    try {
      // Only save the most recent maxHistorySize states
      const history = this.history();
      const historyToSave = history.length > this.maxHistorySize 
        ? history.slice(history.length - this.maxHistorySize) 
        : history;
      
      localStorage.setItem(this.HISTORY_KEY, JSON.stringify(historyToSave));
    } catch (error) {
      console.error('Error saving history:', error);
      this.showErrorSnackbar('Failed to save undo history');
    }
  }
}