/**
 * LayoutImage Model Interfaces
 * Database table: layoutImage
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILayoutImage {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  description?: string;
  filename?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  sortorder?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  layoutjson?: any;
}

// Create interface - for new entity creation
export interface ICreateLayoutImage {
  hotelid: number;
  title: string;
  description?: string;
  filename?: string;
  status?: string;
  createdby?: number;
  sortorder?: number;
  modifiedby?: number;
  layoutjson?: any;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLayoutImage {
  hotelid?: number;
  title?: string;
  description?: string;
  filename?: string;
  status?: string;
  createdby?: number;
  sortorder?: number;
  modifiedby?: number;
  layoutjson?: any;
}
