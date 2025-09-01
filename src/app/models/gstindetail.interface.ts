/**
 * Gstindetail Model
 * Database table: gstindetail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGstindetail {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  reftype?: string;
  gstin?: string;
  name?: string;
  address1?: string;
  address2?: string;
  country?: number;
  city?: string;
  state?: number;
  zipcode?: string;
  status?: string;
  isdefault: number;  // Required
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
}

export interface ICreateGstindetail {
  hotelid: number;
  refid: number;
  reftype?: string;
  gstin?: string;
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
export interface IUpdateGstindetail {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  gstin?: string;
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