/**
 * CCtypes Model
 * Database table: cctypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICCtypes {
  id?: number;  // Primary key - auto-generated
  title?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCCtypes {
  title?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateCCtypes {
  title?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}