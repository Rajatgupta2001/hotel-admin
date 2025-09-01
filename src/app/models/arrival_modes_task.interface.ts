/**
 * ArrivalModesTask Model
 * Database table: arrivalmodestask
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IArrivalModesTask {
  id?: string;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  isarrival?: number;
  modeid?: number;
  tasknotifyemail?: string;
  ismailsent?: number;
  mailcontent?: string;
}

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