/**
 * DiscountMaster Model Interfaces
 * Database table: discountMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDiscountMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  amount?: number;
  amounttype?: string;
  requirementid?: number;
  publishonweb?: number;  // Default: text("'1'"
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateDiscountMaster {
  hotelid?: number;
  title?: string;
  description?: string;
  amount?: number;
  amounttype?: string;
  requirementid?: number;
  publishonweb?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDiscountMaster {
  hotelid?: number;
  title?: string;
  description?: string;
  amount?: number;
  amounttype?: string;
  requirementid?: number;
  publishonweb?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
