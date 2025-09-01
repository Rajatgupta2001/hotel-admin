/**
 * RoomTypeGenderDetails Model Interfaces
 * Database table: roomTypeGenderDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomTypeGenderDetails {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rmtypeid: number;  // Required
  gendertype: string;  // Required
  startdate: Date;  // Required
  enddate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateRoomTypeGenderDetails {
  hotelid: number;
  rmtypeid: number;
  gendertype: string;
  startdate: Date;
  enddate: Date;
  createdby?: number;
  status: string;
  modifiedby?: number;
  sessionid: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomTypeGenderDetails {
  hotelid?: number;
  rmtypeid?: number;
  gendertype?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
