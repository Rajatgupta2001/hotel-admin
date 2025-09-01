/**
 * RoomAmenities Model Interfaces
 * Database table: roomAmenities
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomAmenities {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rmtypeid: number;  // Required
  amenityid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  sortorder?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRoomAmenities {
  hotelid: number;
  rmtypeid: number;
  amenityid: number;
  createdby?: number;
  status: string;
  sortorder?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomAmenities {
  hotelid?: number;
  rmtypeid?: number;
  amenityid?: number;
  createdby?: number;
  status?: string;
  sortorder?: number;
  modifiedby?: number;
}
