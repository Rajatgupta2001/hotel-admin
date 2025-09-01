/**
 * Common utility types used throughout the application
 */

export type EntityId = string | number;

export interface OutboxSummary {
  totalOperations: number;
  pendingOperations: number;
  failedOperations: number;
  syncedOperations: number;
}

export interface OutboxOperation {
  id: string;
  type: string;
  entity: string;
  entityId: EntityId;
  payload: Record<string, unknown>;
  status: 'pending' | 'synced' | 'failed';
  timestamp: string;
  error?: string;
}

export interface OutboxData {
  operations: OutboxOperation[];
  lastSyncAttempt?: string;
  lastSuccessfulSync?: string;
  summary: OutboxSummary;
}

export const DEFAULT_OUTBOX_DATA: OutboxData = {
  operations: [],
  lastSyncAttempt: undefined,
  lastSuccessfulSync: undefined,
  summary: {
    totalOperations: 0,
    pendingOperations: 0,
    failedOperations: 0,
    syncedOperations: 0,
  },
};
