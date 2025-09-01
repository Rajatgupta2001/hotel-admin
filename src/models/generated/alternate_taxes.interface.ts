/**
 * AlternateTaxes Model Interfaces
 * Database table: alternateTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAlternateTaxes {
  hotelid: number;  // Required
  taxmasterid?: number;  // Primary key - auto-generated
  alternatetaxid?: number;  // Primary key - auto-generated
  activationdate?: Date;  // Primary key - auto-generated
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateAlternateTaxes {
  hotelid: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAlternateTaxes {
  hotelid?: number;
}
