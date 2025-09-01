/**
 * TaxOnTax Model Interfaces
 * Database table: taxOnTax
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITaxOnTax {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  taxmasterid: number;  // Required
  taxid: number;  // Required
  activationdate?: Date;  // Primary key - auto-generated
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateTaxOnTax {
  hotelid: number;
  taxmasterid: number;
  taxid: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTaxOnTax {
  hotelid?: number;
  taxmasterid?: number;
  taxid?: number;
}
