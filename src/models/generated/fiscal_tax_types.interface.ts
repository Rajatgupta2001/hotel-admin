/**
 * FiscalTaxTypes Model Interfaces
 * Database table: fiscalTaxTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFiscalTaxTypes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxtypeid?: number;
  fiscaltaxtype?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateFiscalTaxTypes {
  hotelid?: number;
  taxtypeid?: number;
  fiscaltaxtype?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFiscalTaxTypes {
  hotelid?: number;
  taxtypeid?: number;
  fiscaltaxtype?: number;
  createdby?: number;
  modifiedby?: number;
}
