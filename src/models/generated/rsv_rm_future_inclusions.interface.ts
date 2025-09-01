/**
 * RsvRmFutureInclusions Model Interfaces
 * Database table: rsvRmFutureInclusions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmFutureInclusions {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  rsvid?: string;
  groupid?: string;
  rsvrmtarrifid?: string;
  rsvrmid?: string;
  pkgid?: string;
  inclid?: string;
  adult?: number;  // Default: 0
  child?: number;  // Default: 0
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
  fee?: number;  // Default: text("'0.000000'"
  nadate?: Date;
  effectivedate?: Date;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
