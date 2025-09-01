import type { IRsvRmTasks } from './rsv_rm_tasks.interface';
/**
 * RsvRmTasksCopy Model
 * Database table: rsvrmtaskscopy
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmTasksCopy {
  id?: Date;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: string;
  rsvrmid?: number;
  roomid?: number;
  workareaid?: number;
  taskdetail?: string;
  duedate?: Date;
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
  assigneeid?: number;
  otherhotelareaid?: number;
  remarks?: string;
  remarklog?: string;
  donedate?: Date;
  statuschangenadate?: Date;
}

export interface ICreateRsvRmTasksCopy {
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
export interface IUpdateRsvRmTasksCopy {
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