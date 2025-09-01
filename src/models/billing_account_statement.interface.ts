/**
 * BillingAccountStatement Model
 * Database table: billingaccountstatement
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingAccountStatement {
  id?: number;  // Primary key - auto-generated
  parentid?: number;
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  billingledgerid?: number;
  billingdate?: Date;
  billingfromdate?: Date;
  billingtodate?: Date;
  refid?: number;
  reftype?: string;
  rate?: number;
  cycle?: string;
  description?: string;
  price?: number;
  unit?: number;
  total?: number;
  transtype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateBillingAccountStatement {
  parentid?: number;
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  billingledgerid?: number;
  billingdate?: Date;
  billingfromdate?: Date;
  billingtodate?: Date;
  refid?: number;
  reftype?: string;
  rate?: number;
  cycle?: string;
  description?: string;
  price?: number;
  unit?: number;
  total?: number;
  transtype?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateBillingAccountStatement {
  parentid?: number;
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  billingledgerid?: number;
  billingdate?: Date;
  billingfromdate?: Date;
  billingtodate?: Date;
  refid?: number;
  reftype?: string;
  rate?: number;
  cycle?: string;
  description?: string;
  price?: number;
  unit?: number;
  total?: number;
  transtype?: string;
  createdby?: number;
  modifiedby?: number;
}