/**
 * RoomRates Model Interfaces
 * Database table: roomRates
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomRates {
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
  webbookcustpol?: string;
  webbookcust?: string;
  webbookcustdeptype?: string;
  webbookcustdepamt?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
  publishedoncorp?: number;  // Default: 0
  publishedonagent?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRoomRates {
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
  webbookcustpol?: string;
  webbookcust?: string;
  webbookcustdeptype?: string;
  webbookcustdepamt?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  sessionid?: string;
  publishedoncorp?: number;
  publishedonagent?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomRates {
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
  webbookcustpol?: string;
  webbookcust?: string;
  webbookcustdeptype?: string;
  webbookcustdepamt?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
  publishedoncorp?: number;
  publishedonagent?: number;
}
