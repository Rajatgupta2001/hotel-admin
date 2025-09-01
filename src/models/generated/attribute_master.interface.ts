/**
 * AttributeMaster Model Interfaces
 * Database table: attributeMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAttributeMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;
  isfeatured?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAttributeMaster {
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdby?: number;
  status?: string;
  isfeatured?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAttributeMaster {
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdby?: number;
  status?: string;
  isfeatured?: number;
  modifiedby?: number;
}
