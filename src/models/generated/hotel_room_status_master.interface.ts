/**
 * HotelRoomStatusMaster Model Interfaces
 * Database table: hotelRoomStatusMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelRoomStatusMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  masterid: number;  // Required
  statusname: string;  // Required
  statuscode: string;  // Required
  forecolor?: string;
  backgroundcolor?: string;
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelRoomStatusMaster {
  hotelid: number;
  masterid: number;
  statusname: string;
  statuscode: string;
  forecolor?: string;
  backgroundcolor?: string;
  status?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelRoomStatusMaster {
  hotelid?: number;
  masterid?: number;
  statusname?: string;
  statuscode?: string;
  forecolor?: string;
  backgroundcolor?: string;
  status?: string;
  modifiedby?: number;
}
