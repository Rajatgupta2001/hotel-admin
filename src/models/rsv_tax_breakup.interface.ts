/**
 * RsvTaxBreakup Model
 * Database table: rsvtaxbreakup
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvTaxBreakup {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: string;
  taxid?: number;
  type?: string;
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateRsvTaxBreakup {
  hotelid?: number;
  rsvid?: string;
  taxid?: number;
  type?: string;
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  createdby?: number;
}
export interface IUpdateRsvTaxBreakup {
  hotelid?: number;
  rsvid?: string;
  taxid?: number;
  type?: string;
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  createdby?: number;
}