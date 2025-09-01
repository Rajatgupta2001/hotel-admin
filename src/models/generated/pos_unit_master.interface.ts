/**
 * PosUnitMaster Model Interfaces
 * Database table: posUnitMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosUnitMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  shorttitle?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosUnitMaster {
  hotelid?: number;
  title?: string;
  shorttitle?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosUnitMaster {
  hotelid?: number;
  title?: string;
  shorttitle?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
