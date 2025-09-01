/**
 * AmenitiesMaster Model
 * Database table: amenitiesmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAmenitiesMaster {
  id?: number;  // Primary key - auto-generated
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAmenitiesMaster {
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateAmenitiesMaster {
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}