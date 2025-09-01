/**
 * MaintenancePosJobType Model
 * Database table: maintenanceposjobtype
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IMaintenancePosJobType {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  jobtypeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateMaintenancePosJobType {
  hotelid?: number;
  pospointid?: number;
  jobtypeid?: number;
  createdby?: number;
}
export interface IUpdateMaintenancePosJobType {
  hotelid?: number;
  pospointid?: number;
  jobtypeid?: number;
  createdby?: number;
}