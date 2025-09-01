/**
 * PackageMasterRoomDetails Model
 * Database table: packagemasterroomdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPackageMasterRoomDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  priceschanged?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePackageMasterRoomDetails {
  hotelid?: number;
  pkgid?: number;
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
}
export interface IUpdatePackageMasterRoomDetails {
  hotelid?: number;
  pkgid?: number;
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
}