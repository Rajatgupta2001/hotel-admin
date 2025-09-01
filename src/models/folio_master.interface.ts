/**
 * FolioMaster Model
 * Database table: foliomaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFolioMaster {
  id?: number;  // Primary key - auto-generated
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
  modifiedon?: Date;  // Auto-populated timestamp
  kotno?: number;
  kotprefix?: string;
  orderno?: number;
  clfoliono?: number;
  clprefix?: string;
  clcustomfoliono?: number;
}

export interface ICreateFolioMaster {
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