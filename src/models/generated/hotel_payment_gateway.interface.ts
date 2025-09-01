/**
 * HotelPaymentGateway Model Interfaces
 * Database table: hotelPaymentGateway
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelPaymentGateway {
  id?: number;  // Primary key - auto-generated
  integrationtype: number;  // Required
  hotelid?: number;
  paymentgatewayid?: number;
  status?: string;  // Default: text("'I'"
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  value7?: string;
  value8?: string;
  value9?: string;
  value10?: string;
  value11?: string;
  value12?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelPaymentGateway {
  integrationtype: number;
  hotelid?: number;
  paymentgatewayid?: number;
  status?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  value7?: string;
  value8?: string;
  value9?: string;
  value10?: string;
  value11?: string;
  value12?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelPaymentGateway {
  integrationtype?: number;
  hotelid?: number;
  paymentgatewayid?: number;
  status?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  value7?: string;
  value8?: string;
  value9?: string;
  value10?: string;
  value11?: string;
  value12?: string;
  createdby?: number;
  modifiedby?: number;
}
