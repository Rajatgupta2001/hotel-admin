/**
 * PosTransactionDetails Model
 * Database table: postransactiondetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosTransactionDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  invoiceid?: number;
  sessionid?: string;
  foliono?: string;
  transid?: number;
  pospointid?: number;
  productid?: number;
  itemid?: number;
  quantity?: number;
  shiftid?: number;
  itemprice?: number;
  servcdate?: Date;  // Service date - auto-populated
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  activitydate?: Date;
  orderby?: number;
}

export interface ICreatePosTransactionDetails {
  hotelid?: number;
  invoiceid?: number;
  sessionid?: string;
  foliono?: string;
  transid?: number;
  pospointid?: number;
  productid?: number;
  itemid?: number;
  quantity?: number;
  shiftid?: number;
  itemprice?: number;
  nadate?: Date;
  createdby?: number;
  activitydate?: Date;
  orderby?: number;
}
export interface IUpdatePosTransactionDetails {
  hotelid?: number;
  invoiceid?: number;
  sessionid?: string;
  foliono?: string;
  transid?: number;
  pospointid?: number;
  productid?: number;
  itemid?: number;
  quantity?: number;
  shiftid?: number;
  itemprice?: number;
  nadate?: Date;
  createdby?: number;
  activitydate?: Date;
  orderby?: number;
}