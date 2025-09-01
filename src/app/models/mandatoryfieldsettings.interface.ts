/**
 * Mandatoryfieldsettings Model
 * Database table: mandatoryfieldsettings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IMandatoryfieldsettings {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  event?: string;
  mandatoryfields?: string;
  status?: Date;  // Default: A (backend)
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateMandatoryfieldsettings {
  hotelid: number;
  event?: string;
  mandatoryfields?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateMandatoryfieldsettings {
  hotelid?: number;
  event?: string;
  mandatoryfields?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}