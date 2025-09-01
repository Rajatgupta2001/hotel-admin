/**
 * PkgRoomDetails Model Interfaces
 * Database table: pkgRoomDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgRoomDetails {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgid: number;  // Required
  validityid?: number;
  rmtypeid: number;  // Required
  stdbaseprice?: number;
  stdupchrgprice?: number;
  stdxrabedprice?: number;
  disbaseprice?: number;
  disupchrgprice?: number;
  disxrabedprice?: number;
  adults: number;  // Required
  children: number;  // Required
  pkgprice?: number;
  pkgtax?: number;
  isprorate: number;  // Required
  taxpercent?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  priceschanged: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  ratemodifier?: number;
  ratemodifiertype?: string;  // Default: text("'FV'"
  adultinsentxml?: number;
}

// Create interface - for new entity creation
export interface ICreatePkgRoomDetails {
  hotelid: number;
  pkgid: number;
  validityid?: number;
  rmtypeid: number;
  stdbaseprice?: number;
  stdupchrgprice?: number;
  stdxrabedprice?: number;
  disbaseprice?: number;
  disupchrgprice?: number;
  disxrabedprice?: number;
  adults: number;
  children: number;
  pkgprice?: number;
  pkgtax?: number;
  isprorate: number;
  taxpercent?: string;
  createdby?: number;
  status: string;
  priceschanged: number;
  modifiedby?: number;
  ratemodifier?: number;
  ratemodifiertype?: string;
  adultinsentxml?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgRoomDetails {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  rmtypeid?: number;
  stdbaseprice?: number;
  stdupchrgprice?: number;
  stdxrabedprice?: number;
  disbaseprice?: number;
  disupchrgprice?: number;
  disxrabedprice?: number;
  adults?: number;
  children?: number;
  pkgprice?: number;
  pkgtax?: number;
  isprorate?: number;
  taxpercent?: string;
  createdby?: number;
  status?: string;
  priceschanged?: number;
  modifiedby?: number;
  ratemodifier?: number;
  ratemodifiertype?: string;
  adultinsentxml?: number;
}
