/**
 * BillingLedgerMaster Model Interfaces
 * Database table: billingLedgerMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingLedgerMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  grouptype?: string;
  groupid?: number;
  billingdate?: Date;
  foliono?: string;
  folioof?: string;
  totalprice?: number;  // Default: text("'0.000000'"
  totalroomno?: number;
  islocktrans?: number;  // Default: 0
  ispdfgenerated?: number;  // Default: 0
  ismailsent?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  ischarged?: number;  // Default: 0
  istallysync?: number;  // Default: 0
  billingremindermasterid?: number;  // Default: 0
  ignorereminder?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateBillingLedgerMaster {
  hotelid: number;
  grouptype?: string;
  groupid?: number;
  billingdate?: Date;
  foliono?: string;
  folioof?: string;
  totalprice?: number;
  totalroomno?: number;
  islocktrans?: number;
  ispdfgenerated?: number;
  ismailsent?: number;
  createdby?: number;
  modifiedby?: number;
  ischarged?: number;
  istallysync?: number;
  billingremindermasterid?: number;
  ignorereminder?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingLedgerMaster {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingdate?: Date;
  foliono?: string;
  folioof?: string;
  totalprice?: number;
  totalroomno?: number;
  islocktrans?: number;
  ispdfgenerated?: number;
  ismailsent?: number;
  createdby?: number;
  modifiedby?: number;
  ischarged?: number;
  istallysync?: number;
  billingremindermasterid?: number;
  ignorereminder?: number;
}
