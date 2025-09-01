/**
 * RsvTaxBreakup Model Interfaces
 * Database table: rsvTaxBreakup
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvTaxBreakup {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid: string;  // Required
  taxid: number;  // Required
  type?: string;  // Default: text("'TAX'"
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateRsvTaxBreakup {
  hotelid?: number;
  rsvid: string;
  taxid: number;
  type?: string;
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
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
