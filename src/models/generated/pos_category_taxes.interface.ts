/**
 * PosCategoryTaxes Model Interfaces
 * Database table: posCategoryTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosCategoryTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  catid: number;  // Required
  taxid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosCategoryTaxes {
  hotelid: number;
  posid: number;
  catid: number;
  taxid: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosCategoryTaxes {
  hotelid?: number;
  posid?: number;
  catid?: number;
  taxid?: number;
  createdby?: number;
  modifiedby?: number;
}
