/**
 * BillingCustomer Model Interfaces
 * Database table: billingCustomer
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingCustomer {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  extrefid: number;  // Required
  refid: number;  // Required
  reftype?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
  updatedby?: number;
  isgroupbillingcard?: number;
}

// Create interface - for new entity creation
export interface ICreateBillingCustomer {
  hotelid: number;
  extrefid: number;
  refid: number;
  reftype?: string;
  status?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
  isgroupbillingcard?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingCustomer {
  hotelid?: number;
  extrefid?: number;
  refid?: number;
  reftype?: string;
  status?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
  isgroupbillingcard?: number;
}
