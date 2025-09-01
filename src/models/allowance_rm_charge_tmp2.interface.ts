/**
 * AllowanceRmChargeTmp2 Model
 * Database table: allowancermchargetmp2
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAllowanceRmChargeTmp2 {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  transtype?: string;
  discount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotals?: number;
  fee?: number;
  disctranstype?: string;
  discdiscount?: number;
  discpriceaftdisc?: number;
  disctax?: number;
  discnettotal?: number;
  discfee?: number;
  isfoliogen?: number;
  foliono?: string;
  napostingdate?: Date;
}

export interface ICreateAllowanceRmChargeTmp2 {
  hotelid?: number;
  transtype?: string;
  discount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotals?: number;
  fee?: number;
  disctranstype?: string;
  discdiscount?: number;
  discpriceaftdisc?: number;
  disctax?: number;
  discnettotal?: number;
  discfee?: number;
  isfoliogen?: number;
  foliono?: string;
  napostingdate?: Date;
}
export interface IUpdateAllowanceRmChargeTmp2 {
  hotelid?: number;
  transtype?: string;
  discount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotals?: number;
  fee?: number;
  disctranstype?: string;
  discdiscount?: number;
  discpriceaftdisc?: number;
  disctax?: number;
  discnettotal?: number;
  discfee?: number;
  isfoliogen?: number;
  foliono?: string;
  napostingdate?: Date;
}