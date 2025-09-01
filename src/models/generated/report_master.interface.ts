/**
 * ReportMaster Model Interfaces
 * Database table: reportMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReportMaster {
  id?: number;  // Primary key - auto-generated
  parentid?: number;  // Default: 0
  reportname?: string;
  reportfilename?: string;
  reporttype?: string;
  iscustom?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  orderby?: number;  // Default: 0
  module?: string;  // Default: text("'HR'"
  gentype?: string;  // Default: text("'HLX'"
  extdata?: string;
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
