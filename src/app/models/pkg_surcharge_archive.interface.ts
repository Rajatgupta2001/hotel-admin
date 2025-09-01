/**
 * PkgSurchargeArchive Model
 * Database table: pkgsurchargearchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgSurchargeArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  rmtypeid?: number;
  occupancy?: number;
  adultsurcharge?: number;
  childsurcharge?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  sessionid?: string;
}

export interface ICreatePkgSurchargeArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  rmtypeid?: number;
  occupancy?: number;
  adultsurcharge?: number;
  childsurcharge?: number;
  createdby?: number;
  sessionid?: string;
}
export interface IUpdatePkgSurchargeArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  rmtypeid?: number;
  occupancy?: number;
  adultsurcharge?: number;
  childsurcharge?: number;
  createdby?: number;
  sessionid?: string;
}