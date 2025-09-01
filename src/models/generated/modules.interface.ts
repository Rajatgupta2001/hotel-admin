/**
 * Modules Model Interfaces
 * Database table: modules
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IModules {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title: string;  // Required
  description: string;  // Required
  refid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateModules {
  hotelid?: number;
  title: string;
  description: string;
  refid: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateModules {
  hotelid?: number;
  title?: string;
  description?: string;
  refid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
