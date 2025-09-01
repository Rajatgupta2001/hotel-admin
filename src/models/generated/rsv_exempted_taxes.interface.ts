/**
 * RsvExemptedTaxes Model Interfaces
 * Database table: rsvExemptedTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvExemptedTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;  // Default: 0
  groupid?: number;  // Default: 0
  taxid?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRsvExemptedTaxes {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  taxid?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvExemptedTaxes {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  taxid?: number;
  createdby?: number;
}
