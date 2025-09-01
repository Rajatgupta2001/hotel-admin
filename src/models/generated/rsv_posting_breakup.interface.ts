/**
 * RsvPostingBreakup Model Interfaces
 * Database table: rsvPostingBreakup
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvPostingBreakup {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid: number;  // Required
  postingdate: Date;  // Required
  rsvrmid?: number;
  rsvrmtariffid?: number;
  rmtypeid?: number;
  pkgid?: number;
  inclid?: number;
  roomtypename?: string;
  pkgname?: string;
  inclname?: string;
  quantity?: number;
  transtype?: string;
  rackrate?: number;
  slabamount?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  tax?: number;
  taxbreakup?: string;
  lastmodifieddate?: Date;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  processtype?: string;
}

// Create interface - for new entity creation
export interface ICreateRsvPostingBreakup {
  hotelid: number;
  rsvid: number;
  postingdate: Date;
  rsvrmid?: number;
  rsvrmtariffid?: number;
  rmtypeid?: number;
  pkgid?: number;
  inclid?: number;
  roomtypename?: string;
  pkgname?: string;
  inclname?: string;
  quantity?: number;
  transtype?: string;
  rackrate?: number;
  slabamount?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  tax?: number;
  taxbreakup?: string;
  lastmodifieddate?: Date;
  modifiedby?: number;
  processtype?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvPostingBreakup {
  hotelid?: number;
  rsvid?: number;
  postingdate?: Date;
  rsvrmid?: number;
  rsvrmtariffid?: number;
  rmtypeid?: number;
  pkgid?: number;
  inclid?: number;
  roomtypename?: string;
  pkgname?: string;
  inclname?: string;
  quantity?: number;
  transtype?: string;
  rackrate?: number;
  slabamount?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  tax?: number;
  taxbreakup?: string;
  lastmodifieddate?: Date;
  modifiedby?: number;
  processtype?: string;
}
