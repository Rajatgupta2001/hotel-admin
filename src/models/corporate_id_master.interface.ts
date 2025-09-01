/**
 * CorporateIdMaster Model
 * Database table: corporateidmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorporateIdMaster {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  corpid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateCorporateIdMaster {
  compid?: number;
  hotelid?: number;
  corpid?: number;
}
export interface IUpdateCorporateIdMaster {
  compid?: number;
  hotelid?: number;
  corpid?: number;
}