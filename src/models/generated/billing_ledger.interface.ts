/**
 * BillingLedger Model Interfaces
 * Database table: billingLedger
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingLedger {
  id?: number;  // Primary key - auto-generated
  parentid: number;  // Required
  hotelid: number;  // Required
  grouptype?: string;
  groupid?: number;
  billingdate?: Date;
  billingfromdate?: Date;
  billingtodate?: Date;
  paymentid: number;  // Required
  billingservicemasterid: number;  // Required
  billingserviceid: number;  // Required
  foliono?: string;
  folioof?: string;
  rate?: number;  // Default: text("'0.000000'"
  cycle?: string;
  description?: string;
  price?: number;  // Default: text("'0.000000'"
  unit?: number;
  total?: number;
  transtype?: string;
  islocktrans?: number;  // Default: 0
  ispdfgenerated?: number;  // Default: 0
  ismailsent?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  ischarged?: number;  // Default: 0
  istallysync?: number;  // Default: 0
  value1?: string;
}

// Create interface - for new entity creation
export interface ICreateBillingLedger {
  parentid: number;
  hotelid: number;
  grouptype?: string;
  groupid?: number;
  billingdate?: Date;
  billingfromdate?: Date;
  billingtodate?: Date;
  paymentid: number;
  billingservicemasterid: number;
  billingserviceid: number;
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

// Update interface - for entity updates (all fields optional)
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
