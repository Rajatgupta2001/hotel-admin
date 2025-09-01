/**
 * FolioLedgerMaster Model Interfaces
 * Database table: folioLedgerMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFolioLedgerMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  foliono?: string;
  openingdate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  closingdate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  groupid?: number;  // Default: 0
  rsvid?: number;  // Default: 0
  refid?: number;  // Default: 0
  reftype?: string;
  gsttype?: string;
  creadtedon?: Date;
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  foliostatus?: string;
  isclosed?: number;  // Default: 0
  servcdate?: Date;  // Service date
  tempfoliono?: string;
  customfoliono?: string;
  prevpino?: string;
  madevoidinvno?: string;
  gstin?: string;
  paxdetails?: string;
  reason?: string;
  foliotype?: string;  // Default: text("'INV'"
  suppreffoliono?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: number;
  value7?: number;
  folioauthvalue?: string;
  isprint?: number;  // Default: 0
  taxcodetype?: string;
  taxcode?: string;
}

// Create interface - for new entity creation
export interface ICreateFolioLedgerMaster {
  foliono?: string;
  openingdate?: Date;
  closingdate?: Date;
  groupid?: number;
  rsvid?: number;
  refid?: number;
  reftype?: string;
  gsttype?: string;
  creadtedon?: Date;
  createdby?: number;
  modifiedby?: number;
  foliostatus?: string;
  isclosed?: number;
  tempfoliono?: string;
  customfoliono?: string;
  prevpino?: string;
  madevoidinvno?: string;
  gstin?: string;
  paxdetails?: string;
  reason?: string;
  foliotype?: string;
  suppreffoliono?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: number;
  value7?: number;
  folioauthvalue?: string;
  isprint?: number;
  taxcodetype?: string;
  taxcode?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFolioLedgerMaster {
  foliono?: string;
  openingdate?: Date;
  closingdate?: Date;
  groupid?: number;
  rsvid?: number;
  refid?: number;
  reftype?: string;
  gsttype?: string;
  creadtedon?: Date;
  createdby?: number;
  modifiedby?: number;
  foliostatus?: string;
  isclosed?: number;
  tempfoliono?: string;
  customfoliono?: string;
  prevpino?: string;
  madevoidinvno?: string;
  gstin?: string;
  paxdetails?: string;
  reason?: string;
  foliotype?: string;
  suppreffoliono?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: number;
  value7?: number;
  folioauthvalue?: string;
  isprint?: number;
  taxcodetype?: string;
  taxcode?: string;
}
