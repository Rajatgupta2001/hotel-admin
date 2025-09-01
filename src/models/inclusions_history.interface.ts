/**
 * InclusionsHistory Model
 * Database table: inclusionshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInclusionsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  name?: string;
  description?: string;
  prodid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  image?: string;
  calcrule?: string;
  postingrythm?: string;
  autoupdateprice?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate?: Date;
  status?: string;
  refid?: number;
}

export interface ICreateInclusionsHistory {
  hotelid?: number;
  name?: string;
  description?: string;
  prodid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  image?: string;
  calcrule?: string;
  postingrythm?: string;
  autoupdateprice?: number;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
}
export interface IUpdateInclusionsHistory {
  hotelid?: number;
  name?: string;
  description?: string;
  prodid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  image?: string;
  calcrule?: string;
  postingrythm?: string;
  autoupdateprice?: number;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
}