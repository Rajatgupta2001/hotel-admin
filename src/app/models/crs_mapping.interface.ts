/**
 * CrsMapping Model
 * Database table: crsmapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsMapping {
  id?: string;  // Primary key - auto-generated
  crsid?: number;
  apiid?: number;
  refid?: number;
  reftype?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  status?: Date;
}

export interface ICreateCrsMapping {
  crsid?: number;
  apiid?: number;
  refid?: number;
  reftype?: string;
  status?: Date;
}
export interface IUpdateCrsMapping {
  crsid?: number;
  apiid?: number;
  refid?: number;
  reftype?: string;
  status?: Date;
}