/**
 * TaskEscalation Model Interfaces
 * Database table: taskEscalation
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITaskEscalation {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  taskid: number;  // Required
  escalationlevel: number;  // Required
  userid: number;  // Required
  isacknowledge?: number;  // Default: 0
  createdonutc: Date;  // Required
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateTaskEscalation {
  hotelid: number;
  taskid: number;
  escalationlevel: number;
  userid: number;
  isacknowledge?: number;
  createdonutc: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTaskEscalation {
  hotelid?: number;
  taskid?: number;
  escalationlevel?: number;
  userid?: number;
  isacknowledge?: number;
  createdonutc?: Date;
}
