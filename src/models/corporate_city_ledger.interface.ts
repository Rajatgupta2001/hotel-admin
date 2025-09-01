/**
 * CorporateCityLedger Model
 * Database table: corporatecityledger
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorporateCityLedger {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  corpid?: number;
  rsvid?: number;
  groupid?: number;
  folio?: string;
  posinvoiceid?: number;
  posid?: number;
  amount?: number;
  effectivedate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  ispaid?: number;
}

export interface ICreateCorporateCityLedger {
  hotelid?: number;
  corpid?: number;
  rsvid?: number;
  groupid?: number;
  folio?: string;
  posinvoiceid?: number;
  posid?: number;
  amount?: number;
  effectivedate?: Date;
  createdby?: number;
  modifiedby?: number;
  ispaid?: number;
}
export interface IUpdateCorporateCityLedger {
  hotelid?: number;
  corpid?: number;
  rsvid?: number;
  groupid?: number;
  folio?: string;
  posinvoiceid?: number;
  posid?: number;
  amount?: number;
  effectivedate?: Date;
  createdby?: number;
  modifiedby?: number;
  ispaid?: number;
}