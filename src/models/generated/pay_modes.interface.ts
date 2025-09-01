/**
 * PayModes Model Interfaces
 * Database table: payModes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPayModes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  titlekey: string;  // Required
  defaulttitle: string;  // Required
  title: string;  // Required
  viewmode?: number;  // Default: text("'1'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePayModes {
  hotelid: number;
  titlekey: string;
  defaulttitle: string;
  title: string;
  viewmode?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePayModes {
  hotelid?: number;
  titlekey?: string;
  defaulttitle?: string;
  title?: string;
  viewmode?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
