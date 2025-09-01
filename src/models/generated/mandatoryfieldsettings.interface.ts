/**
 * Mandatoryfieldsettings Model Interfaces
 * Database table: mandatoryfieldsettings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMandatoryfieldsettings {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  event?: string;  // Default: text("'CHECKIN'"
  mandatoryfields?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateMandatoryfieldsettings {
  hotelid: number;
  event?: string;
  mandatoryfields?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateMandatoryfieldsettings {
  hotelid?: number;
  event?: string;
  mandatoryfields?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
