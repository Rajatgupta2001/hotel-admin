/**
 * CrsMaster Model
 * Database table: crsmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsMaster {
  id?: string;  // Primary key - auto-generated
  name?: string;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  type?: string;
  username?: string;
  password?: string;
  refcrsid?: number;
}

export interface ICreateCrsMaster {
  name?: string;
  status?: Date;
  type?: string;
  username?: string;
  password?: string;
  refcrsid?: number;
}
export interface IUpdateCrsMaster {
  name?: string;
  status?: Date;
  type?: string;
  username?: string;
  password?: string;
  refcrsid?: number;
}