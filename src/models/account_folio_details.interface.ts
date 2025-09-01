/**
 * AccountFolioDetails Model
 * Database table: accountfoliodetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountFolioDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
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

export interface ICreateAccountFolioDetails {
  hotelid?: number;
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
export interface IUpdateAccountFolioDetails {
  hotelid?: number;
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