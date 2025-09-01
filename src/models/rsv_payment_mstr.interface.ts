/**
 * RsvPaymentMstr Model
 * Database table: rsvpaymentmstr
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvPaymentMstr {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  parentfoliono?: string;
  foliono?: string;
  paymentdate?: Date;
  paymentfrom?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;
}

export interface ICreateRsvPaymentMstr {
  hotelid?: number;
  rsvid?: number;
  parentfoliono?: string;
  foliono?: string;
  paymentdate?: Date;
  paymentfrom?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
}
export interface IUpdateRsvPaymentMstr {
  hotelid?: number;
  rsvid?: number;
  parentfoliono?: string;
  foliono?: string;
  paymentdate?: Date;
  paymentfrom?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
}