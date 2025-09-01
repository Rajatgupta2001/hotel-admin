/**
 * FolioLedgerMaster Model
 * Database table: folioledgermaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFolioLedgerMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  foliono?: string;
  openingdate?: Date;
  closingdate?: Date;
  groupid?: number;
  rsvid?: number;
  refid?: number;
  reftype?: string;
  gsttype?: string;
  creadtedon?: Date;
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  foliostatus?: string;
  isclosed?: number;
  servcdate?: Date;  // Service date - auto-populated
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

export interface ICreateFolioLedgerMaster {
  hotelid?: number;
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
export interface IUpdateFolioLedgerMaster {
  hotelid?: number;
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