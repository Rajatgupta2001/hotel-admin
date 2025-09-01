/**
 * HotelInvoicesNextBillingCustomCharges Model
 * Database table: hotelinvoicesnextbillingcustomcharges
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelInvoicesNextBillingCustomCharges {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  effectivedate?: Date;
  amount?: number;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  isdone?: number;
  status?: string;
}

export interface ICreateHotelInvoicesNextBillingCustomCharges {
  hotelid?: number;
  effectivedate?: Date;
  amount?: number;
  description?: Date;
  isdone?: number;
  status?: string;
}
export interface IUpdateHotelInvoicesNextBillingCustomCharges {
  hotelid?: number;
  effectivedate?: Date;
  amount?: number;
  description?: Date;
  isdone?: number;
  status?: string;
}