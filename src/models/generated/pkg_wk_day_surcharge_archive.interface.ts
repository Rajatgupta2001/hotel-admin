/**
 * PkgWkDaySurchargeArchive Model Interfaces
 * Database table: pkgWkDaySurchargeArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgWkDaySurchargeArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  validityid?: number;
  dayno?: number;
  surcharge?: number;  // Default: text("'0.000000'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  sessionid?: string;
}

// Create interface - for new entity creation
export interface ICreatePkgWkDaySurchargeArchive {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  validityid?: number;
  dayno?: number;
  surcharge?: number;
  createdby?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgWkDaySurchargeArchive {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  validityid?: number;
  dayno?: number;
  surcharge?: number;
  createdby?: number;
  sessionid?: string;
}
