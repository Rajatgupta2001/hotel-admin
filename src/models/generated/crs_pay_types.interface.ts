/**
 * CrsPayTypes Model Interfaces
 * Database table: crsPayTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsPayTypes {
  id?: number;  // Primary key - auto-generated
  apiid: number;  // Required
  paymentmode?: string;  // Default: text("'cash'"
  title: string;  // Required
  payshortname?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  readonly?: number;  // Default: 0
  ispaypal?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateCrsPayTypes {
  apiid: number;
  paymentmode?: string;
  title: string;
  payshortname?: string;
  description?: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
  readonly?: number;
  ispaypal?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsPayTypes {
  apiid?: number;
  paymentmode?: string;
  title?: string;
  payshortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  readonly?: number;
  ispaypal?: number;
}
