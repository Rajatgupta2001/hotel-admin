/**
 * PosProducts Model
 * Database table: posproducts
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosProducts {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  featuredproduct?: number;
  pospointid?: number;
  poscatid?: number;
  kotid?: number;
  prodcode?: string;
  prodname?: string;
  prodimage?: string;
  description?: string;
  unit?: string;
  price?: number;
  ncprice?: number;
  shiftsused?: number;
  createdon?: Date;  // Auto-populated timestamp
  producttype?: number;
  stopsell?: number;
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  accountcodeid?: number;
}

export interface ICreatePosProducts {
  hotelid?: number;
  featuredproduct?: number;
  pospointid?: number;
  poscatid?: number;
  kotid?: number;
  prodcode?: string;
  prodname?: string;
  prodimage?: string;
  description?: string;
  unit?: string;
  price?: number;
  ncprice?: number;
  shiftsused?: number;
  producttype?: number;
  stopsell?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}
export interface IUpdatePosProducts {
  hotelid?: number;
  featuredproduct?: number;
  pospointid?: number;
  poscatid?: number;
  kotid?: number;
  prodcode?: string;
  prodname?: string;
  prodimage?: string;
  description?: string;
  unit?: string;
  price?: number;
  ncprice?: number;
  shiftsused?: number;
  producttype?: number;
  stopsell?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}