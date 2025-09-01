/**
 * PosProdTaxes Model Interfaces
 * Database table: posProdTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProdTaxes {
  id?: number;  // Primary key - auto-generated
  prodid: number;  // Required
  taxid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  hotelid: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePosProdTaxes {
  prodid: number;
  taxid: number;
  createdby?: number;
  hotelid: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProdTaxes {
  prodid?: number;
  taxid?: number;
  createdby?: number;
  hotelid?: number;
  modifiedby?: number;
}
