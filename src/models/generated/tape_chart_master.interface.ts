/**
 * TapeChartMaster Model Interfaces
 * Database table: tapeChartMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITapeChartMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvrid: number;  // Required
  roomid: number;  // Required
  roomtypeid: number;  // Required
  fromdate: Date;  // Required
  todate: Date;  // Required
  roomstatus: number;  // Required
  ownername: string;  // Required
  tooltip: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateTapeChartMaster {
  hotelid: number;
  rsvrid: number;
  roomid: number;
  roomtypeid: number;
  fromdate: Date;
  todate: Date;
  roomstatus: number;
  ownername: string;
  tooltip: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
