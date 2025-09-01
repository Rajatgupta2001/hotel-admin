/**
 * HkRmStatus Model Interfaces
 * Database table: hkRmStatus
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHkRmStatus {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  roomid: number;  // Required
  statusid: number;  // Required
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto: number;  // Required
  occupied?: number;  // Default: 0
  otherhotelareaid?: number;
  comments?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHkRmStatus {
  hotelid: number;
  roomid: number;
  statusid: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto: number;
  occupied?: number;
  otherhotelareaid?: number;
  comments?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHkRmStatus {
  hotelid?: number;
  roomid?: number;
  statusid?: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto?: number;
  occupied?: number;
  otherhotelareaid?: number;
  comments?: string;
  modifiedby?: number;
}
