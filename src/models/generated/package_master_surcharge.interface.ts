/**
 * PackageMasterSurcharge Model Interfaces
 * Database table: packageMasterSurcharge
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPackageMasterSurcharge {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  occupancy?: number;  // Default: 0
  adultsurcharge?: number;
  childsurcharge?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePackageMasterSurcharge {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  occupancy?: number;
  adultsurcharge?: number;
  childsurcharge?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePackageMasterSurcharge {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  occupancy?: number;
  adultsurcharge?: number;
  childsurcharge?: number;
  createdby?: number;
}
