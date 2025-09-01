/**
 * RptReports Model Interfaces
 * Database table: rpt_reports
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRptReports {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  parentid?: number;  // Default: db.text("'0'"
  reportname?: string;
  reporttype?: string;
  reportdesc?: string;
  servcdate?: Date;  // Service date
  status?: string;
  querystatus?: string;
}

// Create interface - for new entity creation
export interface ICreateRptReports {
  hotelid: number;
  parentid?: number;
  reportname?: string;
  reporttype?: string;
  reportdesc?: string;
  status?: string;
  querystatus?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRptReports {
  hotelid?: number;
  parentid?: number;
  reportname?: string;
  reporttype?: string;
  reportdesc?: string;
  status?: string;
  querystatus?: string;
}
