/**
 * RsvPaymentMstr Model Interfaces
 * Database table: rsvPaymentMstr
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvPaymentMstr {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid: number;  // Required
  parentfoliono: string;  // Required
  foliono: string;  // Required
  paymentdate: Date;  // Required
  paymentfrom: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvPaymentMstr {
  hotelid: number;
  rsvid: number;
  parentfoliono: string;
  foliono: string;
  paymentdate: Date;
  paymentfrom: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
}

// Update interface - for entity updates (all fields optional)
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
