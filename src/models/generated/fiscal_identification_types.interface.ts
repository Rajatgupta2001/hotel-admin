/**
 * FiscalIdentificationTypes Model Interfaces
 * Database table: fiscalIdentificationTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFiscalIdentificationTypes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  identificationtypeid?: number;
  fiscalidentificationtype?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateFiscalIdentificationTypes {
  hotelid?: number;
  identificationtypeid?: number;
  fiscalidentificationtype?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFiscalIdentificationTypes {
  hotelid?: number;
  identificationtypeid?: number;
  fiscalidentificationtype?: number;
  createdby?: number;
  modifiedby?: number;
}
