/**
 * CorporateCityLedger Model Interfaces
 * Database table: corporateCityLedger
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
  ispaid?: number;  // Default: 0
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
