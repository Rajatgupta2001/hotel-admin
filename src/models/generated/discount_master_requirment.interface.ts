/**
 * DiscountMasterRequirment Model Interfaces
 * Database table: discountMasterRequirment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDiscountMasterRequirment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  discountmasterid?: number;
  discountrequirmentid?: number;
  status?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateDiscountMasterRequirment {
  hotelid?: number;
  discountmasterid?: number;
  discountrequirmentid?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDiscountMasterRequirment {
  hotelid?: number;
  discountmasterid?: number;
  discountrequirmentid?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
