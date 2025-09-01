/**
 * ExternalPos Model
 * Database table: externalpos
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IExternalPos {
  id?: number;  // Primary key - auto-generated
  name?: string;
  code?: string;
  description?: string;
  testurl?: string;
  liveurl?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  enabledayend?: number;
  enableunsyncfolio?: number;
}

export interface ICreateExternalPos {
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