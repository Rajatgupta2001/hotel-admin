/**
 * CrsPaymentGateway Model
 * Database table: crspaymentgateway
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsPaymentGateway {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  relatedhotelid?: number;
}

export interface ICreateCrsPaymentGateway {
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