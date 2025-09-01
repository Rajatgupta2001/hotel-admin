/**
 * FolioMaster Model Interfaces
 * Database table: folioMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFolioMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pospointid?: number;  // Default: 0
  forpos?: number;  // Default: 0
  islocked?: number;  // Default: 0
  foliono: number;  // Required
  tempfoliono?: number;  // Default: 0
  prefix?: string;
  customfoliono?: number;
  cnfoliono?: number;
  cnprefix?: string;
  cncustomfoliono?: number;
  dnfoliono?: number;
  dnprefix?: string;
  dncustomfoliono?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  kotno?: number;  // Default: text("'1'"
  kotprefix?: string;
  orderno?: number;  // Default: text("'1'"
  clfoliono?: number;  // Default: text("'1'"
  clprefix?: string;
  clcustomfoliono?: number;  // Default: text("'1'"
}

// Create interface - for new entity creation
export interface ICreateFolioMaster {
  hotelid: number;
  pospointid?: number;
  forpos?: number;
  islocked?: number;
  foliono: number;
  tempfoliono?: number;
  prefix?: string;
  customfoliono?: number;
  cnfoliono?: number;
  cnprefix?: string;
  cncustomfoliono?: number;
  dnfoliono?: number;
  dnprefix?: string;
  dncustomfoliono?: number;
  kotno?: number;
  kotprefix?: string;
  orderno?: number;
  clfoliono?: number;
  clprefix?: string;
  clcustomfoliono?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFolioMaster {
  hotelid?: number;
  pospointid?: number;
  forpos?: number;
  islocked?: number;
  foliono?: number;
  tempfoliono?: number;
  prefix?: string;
  customfoliono?: number;
  cnfoliono?: number;
  cnprefix?: string;
  cncustomfoliono?: number;
  dnfoliono?: number;
  dnprefix?: string;
  dncustomfoliono?: number;
  kotno?: number;
  kotprefix?: string;
  orderno?: number;
  clfoliono?: number;
  clprefix?: string;
  clcustomfoliono?: number;
}
