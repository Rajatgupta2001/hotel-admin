/**
 * CorpAppDiscHistory Model
 * Database table: corpappdischistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpAppDiscHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  corpid?: number;
  validfromday?: number;
  validfrommonth?: number;
  validtoday?: number;
  validtomonth?: number;
  discount?: number;
  discounttype?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  effectivedate?: Date;
}

export interface ICreateCorpAppDiscHistory {
  hotelid?: number;
  corpid?: number;
  validfromday?: number;
  validfrommonth?: number;
  validtoday?: number;
  validtomonth?: number;
  discount?: number;
  discounttype?: string;
  modifiedby?: number;
  status?: string;
  effectivedate?: Date;
}
export interface IUpdateCorpAppDiscHistory {
  hotelid?: number;
  corpid?: number;
  validfromday?: number;
  validfrommonth?: number;
  validtoday?: number;
  validtomonth?: number;
  discount?: number;
  discounttype?: string;
  modifiedby?: number;
  status?: string;
  effectivedate?: Date;
}