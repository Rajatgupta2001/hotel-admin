/**
 * PackageMasterSurcharge Model
 * Database table: packagemastersurcharge
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPackageMasterSurcharge {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  occupancy?: number;
  adultsurcharge?: number;
  childsurcharge?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePackageMasterSurcharge {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  occupancy?: number;
  adultsurcharge?: number;
  childsurcharge?: number;
  createdby?: number;
}
export interface IUpdatePackageMasterSurcharge {
  hotelid?: number;
  pkgid?: number;
  rmtypeid?: number;
  occupancy?: number;
  adultsurcharge?: number;
  childsurcharge?: number;
  createdby?: number;
}