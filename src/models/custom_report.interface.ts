/**
 * CustomReport Model
 * Database table: customreport
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICustomReport {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  customreportid?: number;
  extdata?: string;
  status?: string;
}

export interface ICreateCustomReport {
  hotelid?: number;
  compid?: number;
  customreportid?: number;
  extdata?: string;
  status?: string;
}
export interface IUpdateCustomReport {
  hotelid?: number;
  compid?: number;
  customreportid?: number;
  extdata?: string;
  status?: string;
}