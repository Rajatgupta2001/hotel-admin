/**
 * Floors Model Interfaces
 * Database table: floors
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFloors {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  floorname: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status: string;  // Required
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateFloors {
  hotelid: number;
  floorname: string;
  description: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFloors {
  hotelid?: number;
  floorname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
