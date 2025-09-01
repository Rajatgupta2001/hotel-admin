/**
 * PosGroups Model Interfaces
 * Database table: posGroups
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosGroups {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pospointid: number;  // Required
  title?: string;
  groupstatus?: string;  // Default: text("'PENDING'"
  shiftid?: number;
  activitydate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosGroups {
  hotelid: number;
  pospointid: number;
  title?: string;
  groupstatus?: string;
  shiftid?: number;
  activitydate?: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosGroups {
  hotelid?: number;
  pospointid?: number;
  title?: string;
  groupstatus?: string;
  shiftid?: number;
  activitydate?: Date;
  createdby?: number;
  modifiedby?: number;
}
