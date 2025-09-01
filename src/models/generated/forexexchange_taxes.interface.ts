/**
 * ForexexchangeTaxes Model Interfaces
 * Database table: forexexchangeTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IForexexchangeTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateForexexchangeTaxes {
  hotelid?: number;
  taxid?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateForexexchangeTaxes {
  hotelid?: number;
  taxid?: number;
  createdby?: number;
}
