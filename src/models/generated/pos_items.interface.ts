/**
 * PosItems Model Interfaces
 * Database table: posItems
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosItems {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  itemid: number;  // Required
  quantity?: number;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosItems {
  hotelid: number;
  posid: number;
  itemid: number;
  quantity?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosItems {
  hotelid?: number;
  posid?: number;
  itemid?: number;
  quantity?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
