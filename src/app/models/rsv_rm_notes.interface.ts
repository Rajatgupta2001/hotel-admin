/**
 * RsvRmNotes Model
 * Database table: rsvrmnotes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmNotes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noteid?: number;
  notedesc?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateRsvRmNotes {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noteid?: number;
  notedesc?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateRsvRmNotes {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noteid?: number;
  notedesc?: string;
  createdby?: number;
  modifiedby?: number;
}