/**
 * CrsPaymentGateway Model Interfaces
 * Database table: crsPaymentGateway
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsPaymentGateway {
  id?: number;  // Primary key - auto-generated
  integrationtype: number;  // Required
  apiid?: number;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  relatedhotelid?: number;
}

// Create interface - for new entity creation
export interface ICreateCrsPaymentGateway {
  integrationtype: number;
  apiid?: number;
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
  createdby?: number;
  modifiedby?: number;
  relatedhotelid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsPaymentGateway {
  integrationtype?: number;
  apiid?: number;
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
  createdby?: number;
  modifiedby?: number;
  relatedhotelid?: number;
}
