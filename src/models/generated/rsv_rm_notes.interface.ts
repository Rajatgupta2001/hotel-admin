/**
 * RsvRmNotes Model Interfaces
 * Database table: rsvRmNotes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmNotes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;  // Default: 0
  rsvid?: number;  // Default: 0
  rsvrmid?: number;
  noteid?: number;
  notedesc?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
