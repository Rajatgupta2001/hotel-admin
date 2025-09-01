/**
 * HkRmStatusHistory Model Interfaces
 * Database table: hkRmStatusHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHkRmStatusHistory {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  roomid: number;  // Required
  statusid: number;  // Required
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHkRmStatusHistory {
  hotelid: number;
  roomid: number;
  statusid: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHkRmStatusHistory {
  hotelid?: number;
  roomid?: number;
  statusid?: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto?: number;
  modifiedby?: number;
}
