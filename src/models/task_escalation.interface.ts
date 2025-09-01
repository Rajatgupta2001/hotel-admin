/**
 * TaskEscalation Model
 * Database table: taskescalation
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITaskEscalation {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taskid?: number;
  escalationlevel?: number;
  userid?: number;
  isacknowledge?: number;
  createdonutc?: Date;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateTaskEscalation {
  hotelid?: number;
  taskid?: number;
  escalationlevel?: number;
  userid?: number;
  isacknowledge?: number;
  createdonutc?: Date;
}
export interface IUpdateTaskEscalation {
  hotelid?: number;
  taskid?: number;
  escalationlevel?: number;
  userid?: number;
  isacknowledge?: number;
  createdonutc?: Date;
}