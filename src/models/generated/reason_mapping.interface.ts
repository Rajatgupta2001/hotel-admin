/**
 * ReasonMapping Model Interfaces
 * Database table: reasonMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReasonMapping {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  module?: string;
  submodule: string;  // Required
  reasonid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateReasonMapping {
  hotelid: number;
  module?: string;
  submodule: string;
  reasonid?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateReasonMapping {
  hotelid?: number;
  module?: string;
  submodule?: string;
  reasonid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
