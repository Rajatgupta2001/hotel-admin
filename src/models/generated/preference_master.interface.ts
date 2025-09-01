/**
 * PreferenceMaster Model Interfaces
 * Database table: preferenceMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPreferenceMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreatePreferenceMaster {
  hotelid?: number;
  title?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePreferenceMaster {
  hotelid?: number;
  title?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
