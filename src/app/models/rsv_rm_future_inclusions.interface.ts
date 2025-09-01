/**
 * RsvRmFutureInclusions Model
 * Database table: rsvrmfutureinclusions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmFutureInclusions {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  rsvid?: string;
  groupid?: string;
  rsvrmtarrifid?: string;
  rsvrmid?: string;
  pkgid?: string;
  inclid?: string;
  adult?: number;
  child?: number;
  posid?: number;
  productid?: number;
  title?: string;
  price?: number;
  quantity?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  priceafterdiscount?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  nadate?: Date;
  effectivedate?: Date;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateRsvRmFutureInclusions {
  hotelid?: string;
  rsvid?: string;
  groupid?: string;
  rsvrmtarrifid?: string;
  rsvrmid?: string;
  pkgid?: string;
  inclid?: string;
  adult?: number;
  child?: number;
  posid?: number;
  productid?: number;
  title?: string;
  price?: number;
  quantity?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  priceafterdiscount?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  nadate?: Date;
  effectivedate?: Date;
}
export interface IUpdateRsvRmFutureInclusions {
  hotelid?: string;
  rsvid?: string;
  groupid?: string;
  rsvrmtarrifid?: string;
  rsvrmid?: string;
  pkgid?: string;
  inclid?: string;
  adult?: number;
  child?: number;
  posid?: number;
  productid?: number;
  title?: string;
  price?: number;
  quantity?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  priceafterdiscount?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  nadate?: Date;
  effectivedate?: Date;
}