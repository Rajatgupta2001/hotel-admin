/**
 * ArrivalModesTask Model Interfaces
 * Database table: arrivalModesTask
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IArrivalModesTask {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;  // Default: 0
  rsvid?: string;
  rsvrmid?: number;
  roomid?: number;
  workareaid?: number;
  taskdetail?: string;
  duedate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  taskevent?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  isarrival?: number;
  modeid?: number;
  tasknotifyemail?: string;
  ismailsent?: number;  // Default: 0
  mailcontent?: string;
}

// Create interface - for new entity creation
export interface ICreateArrivalModesTask {
  hotelid?: number;
  groupid?: number;
  rsvid?: string;
  rsvrmid?: number;
  roomid?: number;
  workareaid?: number;
  taskdetail?: string;
  duedate?: Date;
  taskevent?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  isarrival?: number;
  modeid?: number;
  tasknotifyemail?: string;
  ismailsent?: number;
  mailcontent?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateArrivalModesTask {
  hotelid?: number;
  groupid?: number;
  rsvid?: string;
  rsvrmid?: number;
  roomid?: number;
  workareaid?: number;
  taskdetail?: string;
  duedate?: Date;
  taskevent?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  isarrival?: number;
  modeid?: number;
  tasknotifyemail?: string;
  ismailsent?: number;
  mailcontent?: string;
}
