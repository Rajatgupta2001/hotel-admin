/**
 * SelectDefaultTax Model Interfaces
 * Database table: selectDefaultTax
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISelectDefaultTax {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  taxid: number;  // Required
  type: number;  // Required
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateSelectDefaultTax {
  hotelid: number;
  posid: number;
  taxid: number;
  type: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSelectDefaultTax {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  type?: number;
  createdby?: number;
}
