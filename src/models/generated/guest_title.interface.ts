/**
 * GuestTitle Model Interfaces
 * Database table: guestTitle
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestTitle {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  description: string;  // Required
  systemtitle?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestTitle {
  hotelid: number;
  title: string;
  description: string;
  systemtitle?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestTitle {
  hotelid?: number;
  title?: string;
  description?: string;
  systemtitle?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
