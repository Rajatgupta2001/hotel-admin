/**
 * PromptBookingMailHistory Model Interfaces
 * Database table: promptBookingMailHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPromptBookingMailHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  mailingdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePromptBookingMailHistory {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  mailingdate?: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePromptBookingMailHistory {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  mailingdate?: Date;
  createdby?: number;
  modifiedby?: number;
}
