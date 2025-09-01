/**
 * DbrStaticData Model
 * Database table: dbrstaticdata
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDbrStaticData {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  type?: string;
  refid?: number;
  date?: Date;
  ftd?: number;
  nonres?: number;
  res?: number;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateDbrStaticData {
  hotelid?: number;
  title?: string;
  type?: string;
  refid?: number;
  date?: Date;
  ftd?: number;
  nonres?: number;
  res?: number;
  description?: string;
  createdby?: number;
}
export interface IUpdateDbrStaticData {
  hotelid?: number;
  title?: string;
  type?: string;
  refid?: number;
  date?: Date;
  ftd?: number;
  nonres?: number;
  res?: number;
  description?: string;
  createdby?: number;
}