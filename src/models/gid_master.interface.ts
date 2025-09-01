/**
 * GidMaster Model
 * Database table: gidmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGidMaster {
  id?: number;  // Primary key - auto-generated
  companyid?: number;
  gid?: number;
  tablename?: string;
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateGidMaster {
  companyid?: number;
  gid?: number;
  tablename?: string;
}
export interface IUpdateGidMaster {
  companyid?: number;
  gid?: number;
  tablename?: string;
}