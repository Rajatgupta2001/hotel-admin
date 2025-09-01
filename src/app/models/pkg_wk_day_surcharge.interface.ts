/**
 * PkgWkDaySurcharge Model
 * Database table: pkgwkdaysurcharge
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgWkDaySurcharge {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  validityid?: number;
  dayno?: number;
  surcharge?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePkgWkDaySurcharge {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  validityid?: number;
  dayno?: number;
  surcharge?: number;
  createdby?: number;
}
export interface IUpdatePkgWkDaySurcharge {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  validityid?: number;
  dayno?: number;
  surcharge?: number;
  createdby?: number;
}