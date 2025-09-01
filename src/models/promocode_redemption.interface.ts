/**
 * PromocodeRedemption Model
 * Database table: promocoderedemption
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPromocodeRedemption {
  id?: string;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePromocodeRedemption {
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