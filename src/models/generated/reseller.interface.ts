/**
 * Reseller Model Interfaces
 * Database table: reseller
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReseller {
  id?: number;  // Primary key - auto-generated
  regnumber?: string;
  codeno: string;  // Required
  businessname: string;  // Required
  billingcompname: string;  // Required
  gstin?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateReseller {
  regnumber?: string;
  codeno: string;
  businessname: string;
  billingcompname: string;
  gstin?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateReseller {
  regnumber?: string;
  codeno?: string;
  businessname?: string;
  billingcompname?: string;
  gstin?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
