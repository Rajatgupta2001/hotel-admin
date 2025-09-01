/**
 * HotelPhoneExtensions Model
 * Database table: hotelphoneextensions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: Date;
}

export interface ICreateHotelPhoneExtensions {
  hotelid?: number;
  extensionno?: string;
  roomid?: number;
  deptid?: number;
  title?: string;
  description?: string;
  createdby?: number;
  modifiedby?: number;
  status?: Date;
}
export interface IUpdateHotelPhoneExtensions {
  hotelid?: number;
  extensionno?: string;
  roomid?: number;
  deptid?: number;
  title?: string;
  description?: string;
  createdby?: number;
  modifiedby?: number;
  status?: Date;
}