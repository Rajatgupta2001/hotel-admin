/**
 * PosProductItems Model Interfaces
 * Database table: posProductItems
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProductItems {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  productid: number;  // Required
  itemid: number;  // Required
  quantity?: number;  // Default: text("'0.000000'"
  unitid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosProductItems {
  hotelid: number;
  posid: number;
  productid: number;
  itemid: number;
  quantity?: number;
  unitid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProductItems {
  hotelid?: number;
  posid?: number;
  productid?: number;
  itemid?: number;
  quantity?: number;
  unitid?: number;
  createdby?: number;
  modifiedby?: number;
}
