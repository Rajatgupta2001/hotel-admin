/**
 * RsvDiscount Model Interfaces
 * Database table: rsvDiscount
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvDiscount {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid: number;  // Required
  groupid?: number;
  rsvrmtariffid?: string;
  rsvrmratetariffid?: string;
  discounttype?: string;  // Default: text("'PV'"
  discountfv?: number;
  discountper: number;  // Required
  discountamount: number;  // Required
  typeofdiscount: string;  // Required
  appliedon?: string;
  fromdate?: Date;
  todate?: Date;
  rmtypeid?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  orderby?: number;  // Default: 0
  breakup?: string;
}

// Create interface - for new entity creation
export interface ICreateRsvDiscount {
  hotelid: number;
  rsvid: number;
  groupid?: number;
  rsvrmtariffid?: string;
  rsvrmratetariffid?: string;
  discounttype?: string;
  discountfv?: number;
  discountper: number;
  discountamount: number;
  typeofdiscount: string;
  appliedon?: string;
  fromdate?: Date;
  todate?: Date;
  rmtypeid?: string;
  createdby?: number;
  modifiedby?: number;
  orderby?: number;
  breakup?: string;
}

// Update interface - for entity updates (all fields optional)
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
