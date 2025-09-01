/**
 * PosShiftRecords Model Interfaces
 * Database table: posShiftRecords
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosShiftRecords {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pospointid?: number;
  shiftmasterid?: number;
  title: string;  // Required
  shiftstatus: number;  // Required
  description: string;  // Required
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreatePosShiftRecords {
  hotelid: number;
  pospointid?: number;
  shiftmasterid?: number;
  title: string;
  shiftstatus: number;
  description: string;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosShiftRecords {
  hotelid?: number;
  pospointid?: number;
  shiftmasterid?: number;
  title?: string;
  shiftstatus?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
