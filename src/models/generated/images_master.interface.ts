/**
 * ImagesMaster Model Interfaces
 * Database table: imagesMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IImagesMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid: number;  // Required
  image: string;  // Required
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  type: string;  // Required
  caption?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  large?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateImagesMaster {
  hotelid?: number;
  refid: number;
  image: string;
  description?: string;
  createdby?: number;
  status: string;
  type: string;
  caption?: string;
  modifiedby?: number;
  large?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateImagesMaster {
  hotelid?: number;
  refid?: number;
  image?: string;
  description?: string;
  createdby?: number;
  status?: string;
  type?: string;
  caption?: string;
  modifiedby?: number;
  large?: number;
}
