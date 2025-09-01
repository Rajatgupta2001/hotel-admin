/**
 * BillingLedgerMaster Model
 * Database table: billingledgermaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingLedgerMaster {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  ischarged?: number;
  istallysync?: number;
  billingremindermasterid?: number;
  ignorereminder?: number;
}

export interface ICreateBillingLedgerMaster {
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