/**
 * MaintenancePosJobType Model Interfaces
 * Database table: maintenancePosJobType
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMaintenancePosJobType {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pospointid: number;  // Required
  jobtypeid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateMaintenancePosJobType {
  hotelid: number;
  pospointid: number;
  jobtypeid: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateMaintenancePosJobType {
  hotelid?: number;
  pospointid?: number;
  jobtypeid?: number;
  createdby?: number;
}
