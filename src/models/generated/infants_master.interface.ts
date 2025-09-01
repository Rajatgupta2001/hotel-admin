/**
 * InfantsMaster Model Interfaces
 * Database table: infantsMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInfantsMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  regnumber?: string;
  salutation?: string;
  fname?: string;
  lname?: string;
  dob?: Date;
  status?: string;  // Default: 'A'
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateInfantsMaster {
  hotelid: number;
  regnumber?: string;
  salutation?: string;
  fname?: string;
  lname?: string;
  dob?: Date;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInfantsMaster {
  hotelid?: number;
  regnumber?: string;
  salutation?: string;
  fname?: string;
  lname?: string;
  dob?: Date;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
