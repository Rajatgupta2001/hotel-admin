/**
 * TaxExemptReason Model Interfaces
 * Database table: taxExemptReason
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITaxExemptReason {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateTaxExemptReason {
  hotelid?: number;
  title?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTaxExemptReason {
  hotelid?: number;
  title?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
