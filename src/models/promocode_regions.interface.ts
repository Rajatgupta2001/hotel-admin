/**
 * PromocodeRegions Model
 * Database table: promocoderegions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPromocodeRegions {
  hotelid?: number;
  couponid?: number;
  countryid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePromocodeRegions {
  hotelid?: number;
  couponid?: number;
  countryid?: number;
  createdby?: number;
}
export interface IUpdatePromocodeRegions {
  hotelid?: number;
  couponid?: number;
  countryid?: number;
  createdby?: number;
}