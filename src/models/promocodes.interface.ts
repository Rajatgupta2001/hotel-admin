/**
 * Promocodes Model
 * Database table: promocodes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPromocodes {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  title?: string;
  couponcode?: string;
  description?: string;
  coupontype?: string;
  couponamount?: number;
  maxdiscount?: number;
  minimumorder?: number;
  startdate?: Date;
  enddate?: Date;
  usespercoupon?: number;  // Default: 0 (backend)
  usesperuser?: number;  // Default: 0 (backend)
  restricttosource?: string;
  restricttoregion?: number;  // Default: 0 (backend)
  restricttocustomer?: number;  // Default: 0 (backend)
  restricttorate?: string;
  restricttoroomtype?: string;
  noofnights?: number;  // Default: 0 (backend)
  noofrooms?: number;
  isdefault?: number;  // Default: 0 (backend)
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  type?: string;
}

export interface ICreatePromocodes {
  hotelid: number;
  title?: string;
  couponcode?: string;
  description?: string;
  coupontype?: string;
  couponamount?: number;
  maxdiscount?: number;
  minimumorder?: number;
  startdate?: Date;
  enddate?: Date;
  usespercoupon?: number;
  usesperuser?: number;
  restricttosource?: string;
  restricttoregion?: number;
  restricttocustomer?: number;
  restricttorate?: string;
  restricttoroomtype?: string;
  noofnights?: number;
  noofrooms?: number;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  type?: string;
}
export interface IUpdatePromocodes {
  hotelid?: number;
  title?: string;
  couponcode?: string;
  description?: string;
  coupontype?: string;
  couponamount?: number;
  maxdiscount?: number;
  minimumorder?: number;
  startdate?: Date;
  enddate?: Date;
  usespercoupon?: number;
  usesperuser?: number;
  restricttosource?: string;
  restricttoregion?: number;
  restricttocustomer?: number;
  restricttorate?: string;
  restricttoroomtype?: string;
  noofnights?: number;
  noofrooms?: number;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  type?: string;
}