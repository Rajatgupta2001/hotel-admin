/**
 * RsvDiscount Model
 * Database table: rsvdiscount
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvDiscount {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  rsvrmtariffid?: string;
  rsvrmratetariffid?: string;
  discounttype?: string;
  discountfv?: number;
  discountper?: number;
  discountamount?: number;
  typeofdiscount?: string;
  appliedon?: string;
  fromdate?: Date;
  todate?: Date;
  rmtypeid?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  orderby?: number;
  breakup?: string;
}

export interface ICreateRsvDiscount {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  rsvrmtariffid?: string;
  rsvrmratetariffid?: string;
  discounttype?: string;
  discountfv?: number;
  discountper?: number;
  discountamount?: number;
  typeofdiscount?: string;
  appliedon?: string;
  fromdate?: Date;
  todate?: Date;
  rmtypeid?: string;
  createdby?: number;
  modifiedby?: number;
  orderby?: number;
  breakup?: string;
}
export interface IUpdateRsvDiscount {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  rsvrmtariffid?: string;
  rsvrmratetariffid?: string;
  discounttype?: string;
  discountfv?: number;
  discountper?: number;
  discountamount?: number;
  typeofdiscount?: string;
  appliedon?: string;
  fromdate?: Date;
  todate?: Date;
  rmtypeid?: string;
  createdby?: number;
  modifiedby?: number;
  orderby?: number;
  breakup?: string;
}