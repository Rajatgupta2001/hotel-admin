/**
 * InfantsMaster Model
 * Database table: infantsmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInfantsMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  regnumber?: string;
  salutation?: string;
  fname?: string;
  lname?: string;
  dob?: Date;
  status?: Date;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateInfantsMaster {
  hotelid?: number;
  regnumber?: string;
  salutation?: string;
  fname?: string;
  lname?: string;
  dob?: Date;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateInfantsMaster {
  hotelid?: number;
  regnumber?: string;
  salutation?: string;
  fname?: string;
  lname?: string;
  dob?: Date;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}