/**
 * HotelInvoiceApplicableTaxes Model
 * Database table: hotelinvoiceapplicabletaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelInvoiceApplicableTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxid?: number;
  taxcode?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  accountcodeid?: number;
}

export interface ICreateHotelInvoiceApplicableTaxes {
  hotelid?: number;
  taxid?: number;
  taxcode?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}
export interface IUpdateHotelInvoiceApplicableTaxes {
  hotelid?: number;
  taxid?: number;
  taxcode?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}