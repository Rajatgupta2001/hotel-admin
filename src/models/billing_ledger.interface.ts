/**
 * BillingLedger Model
 * Database table: billingledger
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingLedger {
  id?: number;  // Primary key - auto-generated
  parentid?: number;
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingdate?: Date;
  billingfromdate?: Date;
  billingtodate?: Date;
  paymentid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  foliono?: string;
  folioof?: string;
  rate?: number;
  cycle?: string;
  description?: string;
  price?: number;
  unit?: number;
  total?: number;
  transtype?: string;
  islocktrans?: number;
  ispdfgenerated?: number;
  ismailsent?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  ischarged?: number;
  istallysync?: number;
  value1?: string;
}

export interface ICreateBillingLedger {
  parentid?: number;
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingdate?: Date;
  billingfromdate?: Date;
  billingtodate?: Date;
  paymentid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  foliono?: string;
  folioof?: string;
  rate?: number;
  cycle?: string;
  description?: string;
  price?: number;
  unit?: number;
  total?: number;
  transtype?: string;
  islocktrans?: number;
  ispdfgenerated?: number;
  ismailsent?: number;
  createdby?: number;
  modifiedby?: number;
  ischarged?: number;
  istallysync?: number;
  value1?: string;
}
export interface IUpdateBillingLedger {
  parentid?: number;
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingdate?: Date;
  billingfromdate?: Date;
  billingtodate?: Date;
  paymentid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  foliono?: string;
  folioof?: string;
  rate?: number;
  cycle?: string;
  description?: string;
  price?: number;
  unit?: number;
  total?: number;
  transtype?: string;
  islocktrans?: number;
  ispdfgenerated?: number;
  ismailsent?: number;
  createdby?: number;
  modifiedby?: number;
  ischarged?: number;
  istallysync?: number;
  value1?: string;
}