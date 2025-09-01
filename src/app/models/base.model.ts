/**
 * Base interfaces for all hotel domain entities
 */

export type EntityId = string; // ULID or UUID

export interface BaseEntity {
  id: EntityId;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'inactive' | 'deleted';
  createdBy?: EntityId;
  modifiedBy?: EntityId;
}

export interface BaseEntityWithCode extends BaseEntity {
  code: string; // Unique identifier
  name: string;
  description?: string;
}

export interface SortableEntity {
  sortOrder: number;
}

export interface AuditableEntity {
  version: number;
  lastModifiedAt: Date;
  modificationHistory?: AuditEntry[];
}

export interface AuditEntry {
  timestamp: Date;
  userId: EntityId;
  action: 'create' | 'update' | 'delete' | 'restore';
  changes: Record<string, { from: any; to: any }>;
}

// Backward-compatible barrel for base/core types
export * from './core/entity-id.model';
export * from './core/base.model';
