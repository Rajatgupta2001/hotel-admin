/**
 * ExternalReference Model Interfaces
 * Database table: externalReference
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IExternalReference {
  id?: number;  // Primary key - auto-generated
  type?: string;
  typevalue?: string;
  reftype?: string;
  refid?: number;  // Default: 0
  usefor?: string;
  status?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  rawresponse?: string;
  value1?: string;
  value2?: string;
}

// Create interface - for new entity creation
export interface ICreateExternalReference {
  type?: string;
  typevalue?: string;
  reftype?: string;
  refid?: number;
  usefor?: string;
  status?: string;
  createdby?: number;
  rawresponse?: string;
  value1?: string;
  value2?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateExternalReference {
  type?: string;
  typevalue?: string;
  reftype?: string;
  refid?: number;
  usefor?: string;
  status?: string;
  createdby?: number;
  rawresponse?: string;
  value1?: string;
  value2?: string;
}
