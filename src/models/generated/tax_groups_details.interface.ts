/**
 * TaxGroupsDetails Model Interfaces
 * Database table: taxGroupsDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITaxGroupsDetails {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  groupid: number;  // Required
  taxid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateTaxGroupsDetails {
  hotelid: number;
  groupid: number;
  taxid: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTaxGroupsDetails {
  hotelid?: number;
  groupid?: number;
  taxid?: number;
  createdby?: number;
}
