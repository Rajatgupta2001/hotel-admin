/**
 * NotesMaster Model
 * Database table: notesmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface INotesMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: string;
  type?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateNotesMaster {
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateNotesMaster {
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}