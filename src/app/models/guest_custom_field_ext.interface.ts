/**
 * GuestCustomFieldExt Model
 * Database table: guestcustomfieldext
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestCustomFieldExt {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  guestid?: number;
  rsvid?: number;
  groupid?: number;
  shortcode?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGuestCustomFieldExt {
  hotelid?: number;
  guestid?: number;
  rsvid?: number;
  groupid?: number;
  shortcode?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGuestCustomFieldExt {
  hotelid?: number;
  guestid?: number;
  rsvid?: number;
  groupid?: number;
  shortcode?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}