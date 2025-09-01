/**
 * PosProductAttribute Model Interfaces
 * Database table: posProductAttribute
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProductAttribute {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  productid?: number;
  attributeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosProductAttribute {
  hotelid?: number;
  posid?: number;
  productid?: number;
  attributeid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProductAttribute {
  hotelid?: number;
  posid?: number;
  productid?: number;
  attributeid?: number;
  createdby?: number;
  modifiedby?: number;
}
