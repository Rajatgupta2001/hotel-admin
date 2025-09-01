/**
 * TagMaster Model Interfaces
 * Database table: tagMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITagMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  description: string;  // Required
  reftype: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateTagMaster {
  hotelid: number;
  title: string;
  description: string;
  reftype: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTagMaster {
  hotelid?: number;
  title?: string;
  description?: string;
  reftype?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
