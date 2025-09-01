/**
 * PosProductModifier Model Interfaces
 * Database table: posProductModifier
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProductModifier {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  productid?: number;
  modifierid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosProductModifier {
  hotelid?: number;
  posid?: number;
  productid?: number;
  modifierid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProductModifier {
  hotelid?: number;
  posid?: number;
  productid?: number;
  modifierid?: number;
  createdby?: number;
  modifiedby?: number;
}
