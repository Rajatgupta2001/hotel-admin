/**
 * InfantIdMaster Model Interfaces
 * Database table: infantIdMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInfantIdMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  infantid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateInfantIdMaster {
  hotelid?: number;
  infantid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInfantIdMaster {
  hotelid?: number;
  infantid?: number;
}
