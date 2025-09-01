/**
 * RsvExemptedTaxes Model
 * Database table: rsvexemptedtaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvExemptedTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateRsvExemptedTaxes {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  taxid?: number;
  createdby?: number;
}
export interface IUpdateRsvExemptedTaxes {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  taxid?: number;
  createdby?: number;
}