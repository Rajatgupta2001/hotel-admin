/**
 * FiscalDetail Model Interfaces
 * Database table: fiscalDetail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFiscalDetail {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  reftype: string;  // Required
  cuit: string;  // Required
  name?: string;
  address1?: string;
  address2?: string;
  country?: number;
  city?: string;
  state?: number;
  zipcode?: string;
  status?: string;
  isdefault: number;  // Required
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateFiscalDetail {
  hotelid: number;
  refid: number;
  reftype: string;
  cuit: string;
  name?: string;
  address1?: string;
  address2?: string;
  country?: number;
  city?: string;
  state?: number;
  zipcode?: string;
  status?: string;
  isdefault: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFiscalDetail {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  cuit?: string;
  name?: string;
  address1?: string;
  address2?: string;
  country?: number;
  city?: string;
  state?: number;
  zipcode?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
