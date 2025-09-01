/**
 * PosTables Model
 * Database table: postables
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosTables {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  tabname?: string;
  tabshape?: string;
  tabsize?: string;
  tabperson?: string;
  xposition?: number;
  yposition?: number;
  angle?: number;
  status?: string;
  description?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosTables {
  hotelid?: number;
  pospointid?: number;
  tabname?: string;
  tabshape?: string;
  tabsize?: string;
  tabperson?: string;
  xposition?: number;
  yposition?: number;
  angle?: number;
  status?: string;
  description?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePosTables {
  hotelid?: number;
  pospointid?: number;
  tabname?: string;
  tabshape?: string;
  tabsize?: string;
  tabperson?: string;
  xposition?: number;
  yposition?: number;
  angle?: number;
  status?: string;
  description?: string;
  createdby?: number;
  modifiedby?: number;
}