/**
 * ArrivalModesList Model
 * Database table: arrivalmodeslist
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IArrivalModesList {
  id?: number;  // Primary key - auto-generated
  title?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateArrivalModesList {
  title?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateArrivalModesList {
  title?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}