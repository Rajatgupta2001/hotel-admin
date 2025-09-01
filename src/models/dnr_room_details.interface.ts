/**
 * DnrRoomDetails Model
 * Database table: dnrroomdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDnrRoomDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  roomid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  comments?: string;
  type?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  extradetailxml?: string;
}

export interface ICreateDnrRoomDetails {
  hotelid?: number;
  rmtypeid?: number;
  roomid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  comments?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  extradetailxml?: string;
}
export interface IUpdateDnrRoomDetails {
  hotelid?: number;
  rmtypeid?: number;
  roomid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  comments?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  extradetailxml?: string;
}