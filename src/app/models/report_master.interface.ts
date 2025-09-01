/**
 * ReportMaster Model
 * Database table: reportmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IReportMaster {
  id?: number;  // Primary key - auto-generated
  parentid?: number;
  reportname?: string;
  reportfilename?: string;
  reporttype?: string;
  iscustom?: number;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  orderby?: number;
  module?: string;
  gentype?: string;
  extdata?: string;
}

export interface ICreateReportMaster {
  parentid?: number;
  reportname?: string;
  reportfilename?: string;
  reporttype?: string;
  iscustom?: number;
  status?: string;
  orderby?: number;
  module?: string;
  gentype?: string;
  extdata?: string;
}
export interface IUpdateReportMaster {
  parentid?: number;
  reportname?: string;
  reportfilename?: string;
  reporttype?: string;
  iscustom?: number;
  status?: string;
  orderby?: number;
  module?: string;
  gentype?: string;
  extdata?: string;
}