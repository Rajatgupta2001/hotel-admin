/**
 * NotesMaster Model Interfaces
 * Database table: notesMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface INotesMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  shortname: string;  // Required
  description?: string;
  type?: string;  // Default: text("'AN'"
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateNotesMaster {
  hotelid?: number;
  title?: string;
  shortname: string;
  description?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
