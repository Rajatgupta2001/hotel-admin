/**
 * TaxSlabs Model Interfaces
 * Database table: taxSlabs
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITaxSlabs {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  taxid: number;  // Required
  slabamount?: number;
  tax: number;  // Required
  taxappliedon?: string;
  chargetype?: string;  // Default: text("'PV'"
  activationdate?: Date;
  status?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  accountcodeid?: number;
}

// Create interface - for new entity creation
export interface ICreateTaxSlabs {
  hotelid: number;
  taxid: number;
  slabamount?: number;
  tax: number;
  taxappliedon?: string;
  chargetype?: string;
  activationdate?: Date;
  status?: string;
  createdby?: number;
  accountcodeid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTaxSlabs {
  hotelid?: number;
  taxid?: number;
  slabamount?: number;
  tax?: number;
  taxappliedon?: string;
  chargetype?: string;
  activationdate?: Date;
  status?: string;
  createdby?: number;
  accountcodeid?: number;
}
