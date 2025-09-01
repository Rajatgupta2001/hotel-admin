/**
 * PkgRoomDetailsHistory Model Interfaces
 * Database table: pkgRoomDetailsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgRoomDetailsHistory {
  id?: number;  // Primary key - auto-generated
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
  isprorate: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  priceschanged: number;  // Required
  refid?: number;
}

// Create interface - for new entity creation
export interface ICreatePkgRoomDetailsHistory {
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
  isprorate: number;
  modifiedby?: number;
  status: string;
  priceschanged: number;
  refid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgRoomDetailsHistory {
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
  isprorate?: number;
  modifiedby?: number;
  status?: string;
  priceschanged?: number;
  refid?: number;
}
