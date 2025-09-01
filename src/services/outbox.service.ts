import { Injectable } from '@angular/core';
import { OutboxOperation, OutboxSummary, OutboxData, DEFAULT_OUTBOX_DATA } from '../models/outbox.model';

@Injectable({
  providedIn: 'root'
})
export class OutboxService {
  private readonly OUTBOX_STORAGE_KEY = 'hotel-admin-outbox';

  // Load outbox data from localStorage
  private loadOutbox(): OutboxData {
    const raw = localStorage.getItem(this.OUTBOX_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_OUTBOX_DATA };
    
    try {
      const parsed = JSON.parse(raw) as OutboxData;
      return this.validateOutbox(parsed);
    } catch {
      return { ...DEFAULT_OUTBOX_DATA };
    }
  }

  // Save outbox data to localStorage
  private saveOutbox(outbox: OutboxData): void {
    localStorage.setItem(this.OUTBOX_STORAGE_KEY, JSON.stringify(outbox));
  }

  // Validate outbox structure
  private validateOutbox(data: unknown): OutboxData {
    const d = data as Partial<OutboxData>;
    return {
      operations: Array.isArray(d?.operations) ? d.operations : [],
      lastSyncAttempt: d?.lastSyncAttempt,
      lastSuccessfulSync: d?.lastSuccessfulSync,
      summary: d?.summary || {
        totalOperations: 0,
        pendingOperations: 0,
        failedOperations: 0,
        syncedOperations: 0,
      },
    };
  }

  // Generate unique operation ID
  private generateOperationId(): string {
    return `op_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Update summary counts
  private updateSummary(outbox: OutboxData): void {
    const operations = outbox.operations;
    outbox.summary = {
      totalOperations: operations.length,
      pendingOperations: operations.filter(op => op.status === 'pending').length,
      failedOperations: operations.filter(op => op.status === 'failed').length,
      syncedOperations: operations.filter(op => op.status === 'synced').length,
    };
  }

  // Enqueue a new operation
  enqueueOperation(type: string, entity: string, entityId: string | number, payload: Record<string, unknown>): void {
    const outbox = this.loadOutbox();
    
    const operation: OutboxOperation = {
      id: this.generateOperationId(),
      type,
      entity,
      entityId,
      payload,
      status: 'pending',
      timestamp: new Date().toISOString(),
    };

    outbox.operations.push(operation);
    this.updateSummary(outbox);
    this.saveOutbox(outbox);

    console.log(`📦 Enqueued ${type} operation for ${entity}:${entityId}`, operation);
  }

  // Get outbox summary
  getOutboxSummary(): OutboxSummary {
    const outbox = this.loadOutbox();
    this.updateSummary(outbox);
    this.saveOutbox(outbox);
    return outbox.summary;
  }

  // Get all operations
  getOutboxOperations(): OutboxOperation[] {
    return this.loadOutbox().operations;
  }

  // Clear all operations
  clearOutbox(): void {
    const outbox = this.loadOutbox();
    outbox.operations = [];
    this.updateSummary(outbox);
    this.saveOutbox(outbox);
    console.log('🗑️ Outbox cleared');
  }

  // Clear only synced operations
  clearSyncedOperations(): void {
    const outbox = this.loadOutbox();
    const beforeCount = outbox.operations.length;
    outbox.operations = outbox.operations.filter(op => op.status !== 'synced');
    const afterCount = outbox.operations.length;
    const clearedCount = beforeCount - afterCount;
    
    this.updateSummary(outbox);
    this.saveOutbox(outbox);
    
    if (clearedCount > 0) {
      console.log(`🗑️ Cleared ${clearedCount} synced operations from outbox`);
    }
  }

  // Simulate sync process
  simulateSync(): void {
    const outbox = this.loadOutbox();
    const pendingOps = outbox.operations.filter(op => op.status === 'pending');
    
    console.log('🔄 Starting sync simulation...');
    console.log(`📦 Found ${pendingOps.length} pending operations to sync`);
    
    if (pendingOps.length === 0) {
      console.log('✅ No pending operations to sync');
      return;
    }

    // Simulate sync process with random success/failure
    const syncSummary = {
      total: pendingOps.length,
      successful: 0,
      failed: 0,
      details: [] as { operation: string; entity: string; entityId: string | number; status: 'success' | 'failed'; error?: string }[]
    };

    pendingOps.forEach(operation => {
      // 90% success rate for demo purposes
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        operation.status = 'synced';
        syncSummary.successful++;
        syncSummary.details.push({
          operation: operation.type,
          entity: operation.entity,
          entityId: operation.entityId,
          status: 'success'
        });
      } else {
        operation.status = 'failed';
        operation.error = 'Simulated network error';
        syncSummary.failed++;
        syncSummary.details.push({
          operation: operation.type,
          entity: operation.entity,
          entityId: operation.entityId,
          status: 'failed',
          error: 'Simulated network error'
        });
      }
    });

    // Update timestamps
    outbox.lastSyncAttempt = new Date().toISOString();
    if (syncSummary.successful > 0) {
      outbox.lastSuccessfulSync = new Date().toISOString();
    }

    this.updateSummary(outbox);
    this.saveOutbox(outbox);

    // Log detailed sync summary
    console.log('📊 Sync Summary:');
    console.log(`   Total operations: ${syncSummary.total}`);
    console.log(`   ✅ Successful: ${syncSummary.successful}`);
    console.log(`   ❌ Failed: ${syncSummary.failed}`);
    
    if (syncSummary.details.length > 0) {
      console.log('   📋 Details:');
      syncSummary.details.forEach(detail => {
        const icon = detail.status === 'success' ? '✅' : '❌';
        const errorMsg = detail.error ? ` (${detail.error})` : '';
        console.log(`      ${icon} ${detail.operation} ${detail.entity}:${detail.entityId}${errorMsg}`);
      });
    }

    if (syncSummary.successful > 0) {
      console.log('🗑️ Successfully synced operations can be cleared from outbox');
    }

    console.log('🔄 Sync simulation completed');
  }

  // Create demo operations for testing
  createDemoOperations(): void {
    console.log('📦 Creating demo operations...');
    
    this.enqueueOperation('CREATE', 'roomType', 'demo-1', {
      name: 'Demo Deluxe Room',
      description: 'A luxurious room with city view',
      maxOccupancy: 2,
      basePrice: 150
    });
    
    this.enqueueOperation('UPDATE', 'room', 'demo-2', {
      id: 'demo-2',
      roomNumber: '101',
      status: 'available',
      cleaningStatus: 'clean'
    });
    
    this.enqueueOperation('DELETE', 'user', 'demo-3', {
      id: 'demo-3',
      reason: 'User requested account deletion'
    });

    this.enqueueOperation('CREATE', 'amenity', 'demo-4', {
      name: 'High-Speed WiFi',
      category: 'Technology',
      isComplimentary: true
    });

    this.enqueueOperation('UPDATE', 'ratePlan', 'demo-5', {
      id: 'demo-5',
      name: 'Weekend Special',
      discount: 15,
      validUntil: '2025-12-31'
    });
    
    console.log('✅ Demo operations created successfully');
  }
}
