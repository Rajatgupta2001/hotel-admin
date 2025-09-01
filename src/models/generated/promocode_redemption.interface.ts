/**
 * PromocodeRedemption Model Interfaces
 * Database table: promocodeRedemption
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPromocodeRedemption {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  couponid: number;  // Required
  couponamount?: number;  // Default: text("'0.000000'"
  coupontype?: string;  // Default: text("'FV'"
  discountamount?: number;
  tariffdisc?: number;
  couponapplieddisc?: number;
  maxdiscount?: number;
  minimumorder?: number;
  restricttorate?: string;
  restricttoroomtype?: string;
  noofrooms?: number;  // Default: 0
  noofnights?: number;  // Default: 0
  type?: string;  // Default: text("'DISCVAL'"
  userid?: number;
  usertype?: string;  // Default: text("'GUEST'"
  rsvid: number;  // Required
  groupid?: number;
  tariffid?: number;
  fromdate?: Date;
  todate?: Date;
  promocalcmode?: number;  // Default: 0
  redeemedon?: Date;
  ipaddress?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePromocodeRedemption {
  hotelid: number;
  couponid: number;
  couponamount?: number;
  coupontype?: string;
  discountamount?: number;
  tariffdisc?: number;
  couponapplieddisc?: number;
  maxdiscount?: number;
  minimumorder?: number;
  restricttorate?: string;
  restricttoroomtype?: string;
  noofrooms?: number;
  noofnights?: number;
  type?: string;
  userid?: number;
  usertype?: string;
  rsvid: number;
  groupid?: number;
  tariffid?: number;
  fromdate?: Date;
  todate?: Date;
  promocalcmode?: number;
  redeemedon?: Date;
  ipaddress?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePromocodeRedemption {
  hotelid?: number;
  couponid?: number;
  couponamount?: number;
  coupontype?: string;
  discountamount?: number;
  tariffdisc?: number;
  couponapplieddisc?: number;
  maxdiscount?: number;
  minimumorder?: number;
  restricttorate?: string;
  restricttoroomtype?: string;
  noofrooms?: number;
  noofnights?: number;
  type?: string;
  userid?: number;
  usertype?: string;
  rsvid?: number;
  groupid?: number;
  tariffid?: number;
  fromdate?: Date;
  todate?: Date;
  promocalcmode?: number;
  redeemedon?: Date;
  ipaddress?: string;
  createdby?: number;
}
