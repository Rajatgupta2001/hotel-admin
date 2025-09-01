/**
 * RptReports Model
 * Database table: rptreports
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRptReports {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  parentid?: number;
  reportname?: string;
  reporttype?: string;
  reportdesc?: string;
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  querystatus?: string;
}

export interface ICreateRptReports {
  hotelid?: number;
  parentid?: number;
  reportname?: string;
  reporttype?: string;
  reportdesc?: string;
  status?: string;
  querystatus?: string;
}
export interface IUpdateRptReports {
  hotelid?: number;
  parentid?: number;
  reportname?: string;
  reporttype?: string;
  reportdesc?: string;
  status?: string;
  querystatus?: string;
}