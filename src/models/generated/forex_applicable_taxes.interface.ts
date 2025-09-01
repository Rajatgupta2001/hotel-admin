/**
 * ForexApplicableTaxes Model Interfaces
 * Database table: forexApplicableTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IForexApplicableTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxid?: number;
  placeofsupply?: number;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateForexApplicableTaxes {
  hotelid?: number;
  taxid?: number;
  placeofsupply?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateForexApplicableTaxes {
  hotelid?: number;
  taxid?: number;
  placeofsupply?: number;
  createdby?: number;
}
