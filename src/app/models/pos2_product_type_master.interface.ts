/**
 * Pos2ProductTypeMaster Model
 * Database table: pos2producttypemaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2ProductTypeMaster {
  id?: number;  // Primary key - auto-generated
  producttype?: number;
  desc?: string;
  type?: string;
}

export interface ICreatePos2ProductTypeMaster {
  producttype?: number;
  desc?: string;
  type?: string;
}
export interface IUpdatePos2ProductTypeMaster {
  producttype?: number;
  desc?: string;
  type?: string;
}