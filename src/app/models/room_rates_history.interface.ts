/**
 * RoomRatesHistory Model
 * Database table: roomrateshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomRatesHistory {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  seasonid?: number;
  higherstdprice?: number;
  higherupchrgprice?: number;
  higherxrabedprice?: number;
  lowerstdprice?: number;
  lowerupchrgprice?: number;
  lowerxrabedprice?: number;
  publishedonweb?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  refid?: string;
  sessionid?: string;
  updatedprices?: string;
  lastchanged?: Date;
}

export interface ICreateRoomRatesHistory {
  hotelid?: number;
  rmtypeid?: number;
  seasonid?: number;
  higherstdprice?: number;
  higherupchrgprice?: number;
  higherxrabedprice?: number;
  lowerstdprice?: number;
  lowerupchrgprice?: number;
  lowerxrabedprice?: number;
  publishedonweb?: number;
  modifiedby?: number;
  status?: string;
  refid?: string;
  sessionid?: string;
  updatedprices?: string;
  lastchanged?: Date;
}
export interface IUpdateRoomRatesHistory {
  hotelid?: number;
  rmtypeid?: number;
  seasonid?: number;
  higherstdprice?: number;
  higherupchrgprice?: number;
  higherxrabedprice?: number;
  lowerstdprice?: number;
  lowerupchrgprice?: number;
  lowerxrabedprice?: number;
  publishedonweb?: number;
  modifiedby?: number;
  status?: string;
  refid?: string;
  sessionid?: string;
  updatedprices?: string;
  lastchanged?: Date;
}