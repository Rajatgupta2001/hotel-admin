/**
 * PkgRoomDetails Model
 * Database table: pkgroomdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgRoomDetails {
  id?: string;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  priceschanged?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  ratemodifier?: number;
  ratemodifiertype?: string;
  adultinsentxml?: number;
}

export interface ICreatePkgRoomDetails {
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