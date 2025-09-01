/**
 * RsvPostingBreakup Model
 * Database table: rsvpostingbreakup
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvPostingBreakup {
  id?: number;  // Primary key - auto-generated
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
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  processtype?: string;
}

export interface ICreateRsvPostingBreakup {
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