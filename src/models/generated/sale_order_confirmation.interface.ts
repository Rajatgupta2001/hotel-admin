/**
 * SaleOrderConfirmation Model Interfaces
 * Database table: saleOrderConfirmation
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISaleOrderConfirmation {
  id?: number;  // Primary key - auto-generated
  orderno: string;  // Required
  hotelid?: number;
  applicablemodules?: string;
  salesdata?: string;
  irfstatus?: string;  // Default: text("'UNTOUCHED'"
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateSaleOrderConfirmation {
  orderno: string;
  hotelid?: number;
  applicablemodules?: string;
  salesdata?: string;
  irfstatus?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSaleOrderConfirmation {
  orderno?: string;
  hotelid?: number;
  applicablemodules?: string;
  salesdata?: string;
  irfstatus?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
