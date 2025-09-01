/**
 * GuestCustomFieldExt Model Interfaces
 * Database table: guestCustomFieldExt
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestCustomFieldExt {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  guestid?: number;  // Default: 0
  rsvid?: number;  // Default: 0
  groupid?: number;  // Default: 0
  shortcode?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestCustomFieldExt {
  guestid?: number;
  rsvid?: number;
  groupid?: number;
  shortcode?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestCustomFieldExt {
  guestid?: number;
  rsvid?: number;
  groupid?: number;
  shortcode?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}
