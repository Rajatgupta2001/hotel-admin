/**
 * HotelRoomStatusMaster Model
 * Database table: hotelroomstatusmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelRoomStatusMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  masterid?: number;
  statusname?: string;
  statuscode?: string;
  forecolor?: string;
  backgroundcolor?: string;
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelRoomStatusMaster {
  hotelid?: number;
  masterid?: number;
  statusname?: string;
  statuscode?: string;
  forecolor?: string;
  backgroundcolor?: string;
  status?: string;
  modifiedby?: number;
}
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