/**
 * PaymentTaxes Model
 * Database table: paymenttaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPaymentTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  taxid?: number;
  servcdate?: Date;  // Service date - auto-populated
  createdby?: number;  // User ID reference
}

export interface ICreatePaymentTaxes {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  createdby?: number;
}
export interface IUpdatePaymentTaxes {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  createdby?: number;
}