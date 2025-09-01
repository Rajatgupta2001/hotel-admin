/**
 * BillingAlert Model Interfaces
 * Database table: billingAlert
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingAlert {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  alertdate?: Date;
  description?: string;
  emailids?: string;
  status?: string;  // Default: text("'PENDING'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
  updatedby?: number;
}

// Create interface - for new entity creation
export interface ICreateBillingAlert {
  hotelid: number;
  alertdate?: Date;
  description?: string;
  emailids?: string;
  status?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingAlert {
  hotelid?: number;
  alertdate?: Date;
  description?: string;
  emailids?: string;
  status?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
}
