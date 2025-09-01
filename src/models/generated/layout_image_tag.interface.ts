/**
 * LayoutImageTag Model Interfaces
 * Database table: layoutImageTag
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILayoutImageTag {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  imageid: number;  // Required
  refid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  reftype: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateLayoutImageTag {
  hotelid: number;
  imageid: number;
  refid: number;
  createdby?: number;
  modifiedby?: number;
  reftype: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLayoutImageTag {
  hotelid?: number;
  imageid?: number;
  refid?: number;
  createdby?: number;
  modifiedby?: number;
  reftype?: string;
}
