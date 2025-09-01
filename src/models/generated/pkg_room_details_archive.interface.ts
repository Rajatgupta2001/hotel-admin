/**
 * PkgRoomDetailsArchive Model Interfaces
 * Database table: pkgRoomDetailsArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgRoomDetailsArchive {
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
  isprorate: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  priceschanged: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

// Create interface - for new entity creation
export interface ICreatePkgRoomDetailsArchive {
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
  createdby?: number;
  status: string;
  priceschanged: number;
  modifiedby?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgRoomDetailsArchive {
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
  createdby?: number;
  status?: string;
  priceschanged?: number;
  modifiedby?: number;
  sessionid?: string;
}
