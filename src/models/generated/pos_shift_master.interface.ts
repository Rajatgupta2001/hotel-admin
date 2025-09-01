/**
 * PosShiftMaster Model Interfaces
 * Database table: posShiftMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosShiftMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pospointid?: number;
  title: string;  // Required
  description: string;  // Required
  fromtime?: string;
  totime?: string;  // Default: text("'00:00:00'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  orderby?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreatePosShiftMaster {
  hotelid: number;
  pospointid?: number;
  title: string;
  description: string;
  fromtime?: string;
  totime?: string;
  createdby?: number;
  modifiedby?: number;
  status: string;
  orderby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosShiftMaster {
  hotelid?: number;
  pospointid?: number;
  title?: string;
  description?: string;
  fromtime?: string;
  totime?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  orderby?: number;
}
