/**
 * AccountFolioDetails Model Interfaces
 * Database table: accountFolioDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountFolioDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  foliomasterid?: string;
  transid?: string;
  pkgid?: number;  // Default: 0
  transtype?: string;  // Default: text("''"
  foliono?: string;  // Default: text("''''"
  customfoliono?: string;
  viewfoliono?: string;
  effectivedate?: Date;
  title?: string;
  refid?: number;
  discamount?: number;  // Default: text("'0.000000'"
  allowtotcol?: number;  // Default: text("'0.000000'"
  totalprice?: number;  // Default: text("'0.000000'"
  tax?: number;  // Default: text("'0.000000'"
  nettotal?: number;  // Default: text("'0.000000'"
  parentrefid?: number;  // Default: 0
  accountcode?: string;  // Default: text("''''"
  type?: string;  // Default: text("''''"
  ord?: number;  // Default: 0
  issync?: number;  // Default: 0
  ratio?: number;
  ratioeddiscamount?: number;
  ratioedtotalprice?: number;
  ratioedallowtotcol?: number;
  depositrefid?: number;  // Default: 0
  depositreftype?: string;
  hotelinvoiceitemtype?: string;
  hmscustomcharge?: number;  // Default: 0
  othergdsrate?: number;  // Default: text("'0.000000'"
  hmsbillingaftdisctax?: number;  // Default: text("'0.000000'"
  hmsbillingaftdiscexpnettotal?: number;  // Default: text("'0.000000'"
  ishmsreselldiscount?: number;  // Default: 0
  hsncode?: string;
  transidold?: number;
  depositrefidold?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
}

// Create interface - for new entity creation
export interface ICreateAccountFolioDetails {
  foliomasterid?: string;
  transid?: string;
  pkgid?: number;
  transtype?: string;
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  effectivedate?: Date;
  title?: string;
  refid?: number;
  discamount?: number;
  allowtotcol?: number;
  totalprice?: number;
  tax?: number;
  nettotal?: number;
  parentrefid?: number;
  accountcode?: string;
  type?: string;
  ord?: number;
  issync?: number;
  ratio?: number;
  ratioeddiscamount?: number;
  ratioedtotalprice?: number;
  ratioedallowtotcol?: number;
  depositrefid?: number;
  depositreftype?: string;
  hotelinvoiceitemtype?: string;
  hmscustomcharge?: number;
  othergdsrate?: number;
  hmsbillingaftdisctax?: number;
  hmsbillingaftdiscexpnettotal?: number;
  ishmsreselldiscount?: number;
  hsncode?: string;
  transidold?: number;
  depositrefidold?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountFolioDetails {
  foliomasterid?: string;
  transid?: string;
  pkgid?: number;
  transtype?: string;
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  effectivedate?: Date;
  title?: string;
  refid?: number;
  discamount?: number;
  allowtotcol?: number;
  totalprice?: number;
  tax?: number;
  nettotal?: number;
  parentrefid?: number;
  accountcode?: string;
  type?: string;
  ord?: number;
  issync?: number;
  ratio?: number;
  ratioeddiscamount?: number;
  ratioedtotalprice?: number;
  ratioedallowtotcol?: number;
  depositrefid?: number;
  depositreftype?: string;
  hotelinvoiceitemtype?: string;
  hmscustomcharge?: number;
  othergdsrate?: number;
  hmsbillingaftdisctax?: number;
  hmsbillingaftdiscexpnettotal?: number;
  ishmsreselldiscount?: number;
  hsncode?: string;
  transidold?: number;
  depositrefidold?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
}
