/**
 * Survey Model
 * Database table: survey
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISurvey {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  status?: Date;  // Default: A (backend)
  reftype?: string;
  refid?: number;
  type?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateSurvey {
  hotelid?: number;
  status?: Date;
  reftype?: string;
  refid?: number;
  type?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateSurvey {
  hotelid?: number;
  status?: Date;
  reftype?: string;
  refid?: number;
  type?: string;
  createdby?: number;
  modifiedby?: number;
}