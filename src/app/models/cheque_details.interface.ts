/**
 * ChequeDetails Model
 * Database table: chequedetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IChequeDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  chequeno?: string;
  dateoncheque?: string;
  draweeonbank?: string;
  telephone?: string;
  bankaddress?: string;
  fromaccount?: number;
  banktranfer?: number;
}

export interface ICreateChequeDetails {
  hotelid?: number;
  refid?: number;
  chequeno?: string;
  dateoncheque?: string;
  draweeonbank?: string;
  telephone?: string;
  bankaddress?: string;
  fromaccount?: number;
  banktranfer?: number;
}
export interface IUpdateChequeDetails {
  hotelid?: number;
  refid?: number;
  chequeno?: string;
  dateoncheque?: string;
  draweeonbank?: string;
  telephone?: string;
  bankaddress?: string;
  fromaccount?: number;
  banktranfer?: number;
}