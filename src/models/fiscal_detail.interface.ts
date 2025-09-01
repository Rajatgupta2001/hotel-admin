/**
 * FiscalDetail Model
 * Database table: fiscaldetail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFiscalDetail {
  id?: number;  // Primary key - auto-generated
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
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateFiscalDetail {
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