/**
 * PosProductPrices Model
 * Database table: posproductprices
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosProductPrices {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  productid?: number;
  seasonattributeid?: number;
  fromdate?: Date;
  todate?: Date;
  price?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosProductPrices {
  hotelid?: number;
  productid?: number;
  seasonattributeid?: number;
  fromdate?: Date;
  todate?: Date;
  price?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePosProductPrices {
  hotelid?: number;
  productid?: number;
  seasonattributeid?: number;
  fromdate?: Date;
  todate?: Date;
  price?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}