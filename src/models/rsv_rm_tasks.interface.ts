import type { IReservation } from './reservations.interface';
/**
 * RsvRmTasks Model
 * Database table: rsvrmtasks
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmTasks {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
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
  reservation?: IReservation;
}

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
  reservation?: IReservation;
}
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
  reservation?: IReservation;
}