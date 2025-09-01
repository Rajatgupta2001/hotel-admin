/**
 * TapeChartMaster Model
 * Database table: tapechartmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITapeChartMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvrid?: number;
  roomid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  roomstatus?: number;
  ownername?: string;
  tooltip?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateTapeChartMaster {
  hotelid?: number;
  rsvrid?: number;
  roomid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  roomstatus?: number;
  ownername?: string;
  tooltip?: string;
  modifiedby?: number;
}
export interface IUpdateTapeChartMaster {
  hotelid?: number;
  rsvrid?: number;
  roomid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  roomstatus?: number;
  ownername?: string;
  tooltip?: string;
  modifiedby?: number;
}