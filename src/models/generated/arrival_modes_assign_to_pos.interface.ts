/**
 * ArrivalModesAssignToPos Model Interfaces
 * Database table: arrivalModesAssignToPos
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IArrivalModesAssignToPos {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  posid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateArrivalModesAssignToPos {
  hotelid?: number;
  refid?: number;
  posid?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateArrivalModesAssignToPos {
  hotelid?: number;
  refid?: number;
  posid?: number;
  createdby?: number;
}
