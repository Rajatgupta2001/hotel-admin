/**
 * JobTypeEscalation Model
 * Database table: jobtypeescalation
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IJobTypeEscalation {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  jobtypeid?: number;
  escalationlevel?: number;
  tat?: number;
  userid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateJobTypeEscalation {
  hotelid?: number;
  jobtypeid?: number;
  escalationlevel?: number;
  tat?: number;
  userid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateJobTypeEscalation {
  hotelid?: number;
  jobtypeid?: number;
  escalationlevel?: number;
  tat?: number;
  userid?: number;
  createdby?: number;
  modifiedby?: number;
}