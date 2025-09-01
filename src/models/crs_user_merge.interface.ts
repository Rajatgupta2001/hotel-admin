/**
 * CrsUserMerge Model
 * Database table: crsusermerge
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsUserMerge {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  userid?: number;
  linkedhotelid?: number;
  linkedrefid?: number;
  tablename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateCrsUserMerge {
  compid?: number;
  userid?: number;
  linkedhotelid?: number;
  linkedrefid?: number;
  tablename?: string;
  createdby?: number;
}
export interface IUpdateCrsUserMerge {
  compid?: number;
  userid?: number;
  linkedhotelid?: number;
  linkedrefid?: number;
  tablename?: string;
  createdby?: number;
}