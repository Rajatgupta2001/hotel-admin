/**
 * SeasonAttributes Model Interfaces
 * Database table: seasonAttributes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISeasonAttributes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  seasonattribute?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateSeasonAttributes {
  hotelid?: number;
  seasonattribute?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSeasonAttributes {
  hotelid?: number;
  seasonattribute?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
