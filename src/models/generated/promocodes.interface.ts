/**
 * Promocodes Model Interfaces
 * Database table: promocodes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPromocodes {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  couponcode: string;  // Required
  description?: string;
  coupontype?: string;  // Default: text("'FV'"
  couponamount: number;  // Required
  maxdiscount?: number;  // Default: text("'0.000000'"
  minimumorder?: number;  // Default: text("'0.000000'"
  startdate?: Date;
  enddate?: Date;
  usespercoupon?: number;  // Default: 0
  usesperuser?: number;  // Default: 0
  restricttosource?: string;
  restricttoregion?: number;  // Default: 0
  restricttocustomer?: number;  // Default: 0
  restricttorate?: string;
  restricttoroomtype?: string;
  noofnights?: number;  // Default: 0
  noofrooms?: number;
  isdefault?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
  type?: string;  // Default: text("'DISCVAL'"
}

// Create interface - for new entity creation
export interface ICreatePromocodes {
  hotelid: number;
  title: string;
  couponcode: string;
  description?: string;
  coupontype?: string;
  couponamount: number;
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

// Update interface - for entity updates (all fields optional)
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
