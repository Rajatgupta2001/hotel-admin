/**
 * KotMaster Model Interfaces
 * Database table: kotMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IKotMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  code: string;  // Required
  description?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateKotMaster {
  hotelid: number;
  title: string;
  code: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateKotMaster {
  hotelid?: number;
  title?: string;
  code?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
