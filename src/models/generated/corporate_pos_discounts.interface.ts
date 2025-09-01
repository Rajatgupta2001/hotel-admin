/**
 * CorporatePosDiscounts Model Interfaces
 * Database table: corporatePosDiscounts
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorporatePosDiscounts {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  corpid?: number;
  pospointid?: number;
  discountper?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateCorporatePosDiscounts {
  hotelid?: number;
  corpid?: number;
  pospointid?: number;
  discountper?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorporatePosDiscounts {
  hotelid?: number;
  corpid?: number;
  pospointid?: number;
  discountper?: number;
  createdby?: number;
}
