/**
 * PkgBookingRestrictions Model Interfaces
 * Database table: pkgBookingRestrictions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgBookingRestrictions {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgid?: number;
  roomtypeid: number;  // Required
  type: string;  // Required
  value?: string;
  startdate: Date;  // Required
  enddate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePkgBookingRestrictions {
  hotelid: number;
  pkgid?: number;
  roomtypeid: number;
  type: string;
  value?: string;
  startdate: Date;
  enddate: Date;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgBookingRestrictions {
  hotelid?: number;
  pkgid?: number;
  roomtypeid?: number;
  type?: string;
  value?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
