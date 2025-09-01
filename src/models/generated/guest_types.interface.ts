/**
 * GuestTypes Model Interfaces
 * Database table: guestTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestTypes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  type?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestTypes {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestTypes {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
