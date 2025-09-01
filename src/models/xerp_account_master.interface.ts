/**
 * XerpAccountMaster Model
 * Database table: xerpaccountmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IXerpAccountMaster {
  id?: number;  // Primary key - auto-generated
  acccode?: string;
  type?: string;
  description?: string;
  account?: string;
  perhotel?: number;
}

export interface ICreateXerpAccountMaster {
  acccode?: string;
  type?: string;
  description?: string;
  account?: string;
  perhotel?: number;
}
export interface IUpdateXerpAccountMaster {
  acccode?: string;
  type?: string;
  description?: string;
  account?: string;
  perhotel?: number;
}