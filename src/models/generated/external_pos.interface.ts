/**
 * ExternalPos Model Interfaces
 * Database table: externalPos
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IExternalPos {
  id?: number;  // Primary key - auto-generated
  name: string;  // Required
  code: string;  // Required
  description?: string;
  testurl?: string;
  liveurl?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
  enabledayend?: number;  // Default: 0
  enableunsyncfolio?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateExternalPos {
  name: string;
  code: string;
  description?: string;
  testurl?: string;
  liveurl?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  enabledayend?: number;
  enableunsyncfolio?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateExternalPos {
  name?: string;
  code?: string;
  description?: string;
  testurl?: string;
  liveurl?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  enabledayend?: number;
  enableunsyncfolio?: number;
}
