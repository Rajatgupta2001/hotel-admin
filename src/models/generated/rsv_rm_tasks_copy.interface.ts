/**
 * RsvRmTasksCopy Model Interfaces
 * Database table: rsvRmTasks_copy
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmTasksCopy {
  id?: string;  // Default: db.text("'0'"
  hotelid?: number;
  rsvid?: string;
  rsvrmid?: number;
  roomid?: number;
  workareaid?: number;
  taskdetail?: string;
  duedate?: Date;  // Default: db.text("'0000-00-00 00:00:00'"
  taskevent?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;  // Default: db.text("'0'"
  isbookingdepositalert?: number;  // Default: db.text("'0'"
  groupid?: number;  // Default: db.text("'0'"
  jobtypeid?: number;
  assigneeid?: number;
  otherhotelareaid?: number;
  remarks?: string;
  remarklog?: string;
  donedate?: Date;
  statuschangenadate?: Date;
}

// Create interface - for new entity creation
export interface ICreateRsvRmTasksCopy {
  id?: string;
  hotelid?: number;
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
  counterid?: number;
  isbookingdepositalert?: number;
  groupid?: number;
  jobtypeid?: number;
  assigneeid?: number;
  otherhotelareaid?: number;
  remarks?: string;
  remarklog?: string;
  donedate?: Date;
  statuschangenadate?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRmTasksCopy {
  id?: string;
  hotelid?: number;
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
  counterid?: number;
  isbookingdepositalert?: number;
  groupid?: number;
  jobtypeid?: number;
  assigneeid?: number;
  otherhotelareaid?: number;
  remarks?: string;
  remarklog?: string;
  donedate?: Date;
  statuschangenadate?: Date;
}
