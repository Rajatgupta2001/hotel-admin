/**
 * RoomRatesHistory Model Interfaces
 * Database table: roomRatesHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomRatesHistory {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  rmtypeid: number;  // Required
  seasonid: number;  // Required
  higherstdprice?: number;
  higherupchrgprice?: number;
  higherxrabedprice?: number;
  lowerstdprice?: number;
  lowerupchrgprice?: number;
  lowerxrabedprice?: number;
  publishedonweb?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  refid: string;  // Required
  sessionid?: string;
  updatedprices?: string;
  lastchanged?: Date;
}

// Create interface - for new entity creation
export interface ICreateRoomRatesHistory {
  hotelid: number;
  rmtypeid: number;
  seasonid: number;
  higherstdprice?: number;
  higherupchrgprice?: number;
  higherxrabedprice?: number;
  lowerstdprice?: number;
  lowerupchrgprice?: number;
  lowerxrabedprice?: number;
  publishedonweb?: number;
  modifiedby?: number;
  status: string;
  refid: string;
  sessionid?: string;
  updatedprices?: string;
  lastchanged?: Date;
}

// Update interface - for entity updates (all fields optional)
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
