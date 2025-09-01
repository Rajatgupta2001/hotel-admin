/**
 * PmntReceiptMaster Model
 * Database table: pmntreceiptmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPmntReceiptMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  forpos?: number;
  receiptno?: number;
  prefix?: string;
  customreceiptno?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  clreceiptno?: number;
  clprefix?: string;
  clcustomreceiptno?: number;
}

export interface ICreatePmntReceiptMaster {
  hotelid?: number;
  pospointid?: number;
  forpos?: number;
  receiptno?: number;
  prefix?: string;
  customreceiptno?: number;
  clreceiptno?: number;
  clprefix?: string;
  clcustomreceiptno?: number;
}
export interface IUpdatePmntReceiptMaster {
  hotelid?: number;
  pospointid?: number;
  forpos?: number;
  receiptno?: number;
  prefix?: string;
  customreceiptno?: number;
  clreceiptno?: number;
  clprefix?: string;
  clcustomreceiptno?: number;
}