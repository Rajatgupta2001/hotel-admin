/**
 * ChequeDetails Model Interfaces
 * Database table: chequeDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IChequeDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  chequeno?: string;
  dateoncheque?: string;
  draweeonbank?: string;
  telephone?: string;
  bankaddress?: string;
  fromaccount?: number;  // Default: 0
  banktranfer?: number;  // Default: 0
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
