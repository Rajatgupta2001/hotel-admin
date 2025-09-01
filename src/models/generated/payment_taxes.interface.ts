/**
 * PaymentTaxes Model Interfaces
 * Database table: paymentTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPaymentTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  taxid: number;  // Required
  servcdate?: Date;  // Service date
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePaymentTaxes {
  hotelid: number;
  posid: number;
  taxid: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePaymentTaxes {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  createdby?: number;
}
