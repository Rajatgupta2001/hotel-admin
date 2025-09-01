/**
 * PkgWkDaySurcharge Model Interfaces
 * Database table: pkgWkDaySurcharge
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgWkDaySurcharge {
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
}

// Create interface - for new entity creation
export interface ICreatePkgWkDaySurcharge {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  validityid?: number;
  dayno?: number;
  surcharge?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgWkDaySurcharge {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  validityid?: number;
  dayno?: number;
  surcharge?: number;
  createdby?: number;
}
