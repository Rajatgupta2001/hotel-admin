/**
 * HotelPhoneExtensions Model Interfaces
 * Database table: hotelPhoneExtensions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelPhoneExtensions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  extensionno?: string;
  roomid?: number;
  deptid?: number;
  title?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateHotelPhoneExtensions {
  hotelid?: number;
  extensionno?: string;
  roomid?: number;
  deptid?: number;
  title?: string;
  description?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelPhoneExtensions {
  hotelid?: number;
  extensionno?: string;
  roomid?: number;
  deptid?: number;
  title?: string;
  description?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
