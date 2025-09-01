/**
 * PkgRoomDetailsHistory Model
 * Database table: pkgroomdetailshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgRoomDetailsHistory {
  id?: number;  // Primary key - auto-generated
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
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  priceschanged?: number;
  refid?: number;
}

export interface ICreatePkgRoomDetailsHistory {
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