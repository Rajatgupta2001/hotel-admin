/**
 * RsvRmTasks Model Interfaces
 * Database table: rsvRmTasks
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmTasks {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  roomid?: number;
  guestid?: number;
  workareaid?: number;
  taskdetail?: string;
  duedate?: Date;  // Default: '0000-00-00 00:00:00'
  duedateutc?: Date;
  taskevent?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;  // Default: 0
  isbookingdepositalert?: number;  // Default: 0
  groupid?: number;  // Default: 0
  jobtypeid?: number;
  servicetypeid?: number;
  assigneeid?: number;
  otherhotelareaid?: number;
  remarks?: string;
  remarklog?: string;
  donedate?: Date;
  inprogressdate?: Date;
  statuschangenadate?: Date;
  isescalated?: number;  // Default: 0
  lastescalationlevel?: number;
  lastescutcdate?: Date;
  requesttype?: string;  // Default: 'I'
  rating?: number;  // Default: 0
  feedback?: string;
  incident?: number;  // Default: 0
  ticketno?: string;
  parentid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvRmTasks {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  roomid?: number;
  guestid?: number;
  workareaid?: number;
  taskdetail?: string;
  duedate?: Date;
  duedateutc?: Date;
  taskevent?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  isbookingdepositalert?: number;
  groupid?: number;
  jobtypeid?: number;
  servicetypeid?: number;
  assigneeid?: number;
  otherhotelareaid?: number;
  remarks?: string;
  remarklog?: string;
  donedate?: Date;
  inprogressdate?: Date;
  statuschangenadate?: Date;
  isescalated?: number;
  lastescalationlevel?: number;
  lastescutcdate?: Date;
  requesttype?: string;
  rating?: number;
  feedback?: string;
  incident?: number;
  ticketno?: string;
  parentid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRmTasks {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  roomid?: number;
  guestid?: number;
  workareaid?: number;
  taskdetail?: string;
  duedate?: Date;
  duedateutc?: Date;
  taskevent?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  isbookingdepositalert?: number;
  groupid?: number;
  jobtypeid?: number;
  servicetypeid?: number;
  assigneeid?: number;
  otherhotelareaid?: number;
  remarks?: string;
  remarklog?: string;
  donedate?: Date;
  inprogressdate?: Date;
  statuschangenadate?: Date;
  isescalated?: number;
  lastescalationlevel?: number;
  lastescutcdate?: Date;
  requesttype?: string;
  rating?: number;
  feedback?: string;
  incident?: number;
  ticketno?: string;
  parentid?: number;
}
