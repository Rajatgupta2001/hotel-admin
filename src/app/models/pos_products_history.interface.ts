/**
 * PosProductsHistory Model
 * Database table: posproductshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosProductsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  featuredproduct?: number;
  pospointid?: number;
  poscatid?: number;
  prodcode?: string;
  prodname?: string;
  prodimage?: string;
  description?: string;
  unit?: string;
  price?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  refid?: number;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePosProductsHistory {
  hotelid?: number;
  featuredproduct?: number;
  pospointid?: number;
  poscatid?: number;
  prodcode?: string;
  prodname?: string;
  prodimage?: string;
  description?: string;
  unit?: string;
  price?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
}
export interface IUpdatePosProductsHistory {
  hotelid?: number;
  featuredproduct?: number;
  pospointid?: number;
  poscatid?: number;
  prodcode?: string;
  prodname?: string;
  prodimage?: string;
  description?: string;
  unit?: string;
  price?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
}