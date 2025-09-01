/**
 * FiscalIdentificationTypes Model
 * Database table: fiscalidentificationtypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFiscalIdentificationTypes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  identificationtypeid?: number;
  fiscalidentificationtype?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateFiscalIdentificationTypes {
  hotelid?: number;
  identificationtypeid?: number;
  fiscalidentificationtype?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateFiscalIdentificationTypes {
  hotelid?: number;
  identificationtypeid?: number;
  fiscalidentificationtype?: number;
  createdby?: number;
  modifiedby?: number;
}