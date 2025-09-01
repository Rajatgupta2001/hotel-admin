/**
 * HotelInvoicesNextBillingCustomCharges Model Interfaces
 * Database table: hotelInvoicesNextBillingCustomCharges
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelInvoicesNextBillingCustomCharges {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  effectivedate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  amount?: number;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  isdone?: number;
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateHotelInvoicesNextBillingCustomCharges {
  hotelid?: number;
  effectivedate?: Date;
  amount?: number;
  description?: Date;
  isdone?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelInvoicesNextBillingCustomCharges {
  hotelid?: number;
  effectivedate?: Date;
  amount?: number;
  description?: Date;
  isdone?: number;
  status?: string;
}
