/**
 * HotelInvoiceApplicableTaxes Model Interfaces
 * Database table: hotelInvoiceApplicableTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelInvoiceApplicableTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  taxid: number;  // Required
  taxcode?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  accountcodeid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateHotelInvoiceApplicableTaxes {
  hotelid: number;
  taxid: number;
  taxcode?: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
  accountcodeid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelInvoiceApplicableTaxes {
  hotelid?: number;
  taxid?: number;
  taxcode?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}
