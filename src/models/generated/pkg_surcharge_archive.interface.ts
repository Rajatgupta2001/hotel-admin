/**
 * PkgSurchargeArchive Model Interfaces
 * Database table: pkgSurchargeArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgSurchargeArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  rmtypeid?: number;
  occupancy?: number;  // Default: 0
  adultsurcharge?: number;
  childsurcharge?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  sessionid?: string;
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
