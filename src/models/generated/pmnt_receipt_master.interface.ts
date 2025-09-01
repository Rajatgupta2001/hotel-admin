/**
 * PmntReceiptMaster Model Interfaces
 * Database table: pmntReceiptMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPmntReceiptMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pospointid?: number;  // Default: 0
  forpos?: number;  // Default: 0
  receiptno: number;  // Required
  prefix?: string;
  customreceiptno?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  clreceiptno?: number;  // Default: text("'1'"
  clprefix?: string;
  clcustomreceiptno?: number;  // Default: text("'1'"
}

// Create interface - for new entity creation
export interface ICreatePmntReceiptMaster {
  hotelid: number;
  pospointid?: number;
  forpos?: number;
  receiptno: number;
  prefix?: string;
  customreceiptno?: number;
  clreceiptno?: number;
  clprefix?: string;
  clcustomreceiptno?: number;
}

// Update interface - for entity updates (all fields optional)
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
