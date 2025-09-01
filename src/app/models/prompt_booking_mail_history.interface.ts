/**
 * PromptBookingMailHistory Model
 * Database table: promptbookingmailhistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPromptBookingMailHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  mailingdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePromptBookingMailHistory {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  mailingdate?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePromptBookingMailHistory {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  mailingdate?: Date;
  createdby?: number;
  modifiedby?: number;
}