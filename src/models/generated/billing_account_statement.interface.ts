/**
 * BillingAccountStatement Model Interfaces
 * Database table: billingAccountStatement
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingAccountStatement {
  id?: number;  // Primary key - auto-generated
  parentid: number;  // Required
  hotelid: number;  // Required
  grouptype?: string;
  groupid?: number;
  billingservicemasterid: number;  // Required
  billingserviceid: number;  // Required
  billingledgerid?: number;
  billingdate: Date;  // Required
  billingfromdate?: Date;
  billingtodate?: Date;
  refid?: number;  // Default: 0
  reftype?: string;
  rate?: number;  // Default: text("'0.000000'"
  cycle?: string;
  description?: string;
  price?: number;  // Default: text("'0.000000'"
  unit?: number;  // Default: text("'0.000000'"
  total?: number;  // Default: text("'0.000000'"
  transtype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateBillingAccountStatement {
  parentid: number;
  hotelid: number;
  grouptype?: string;
  groupid?: number;
  billingservicemasterid: number;
  billingserviceid: number;
  billingledgerid?: number;
  billingdate: Date;
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

// Update interface - for entity updates (all fields optional)
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
