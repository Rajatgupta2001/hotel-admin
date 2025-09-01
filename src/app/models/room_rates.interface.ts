/**
 * RoomRates Model
 * Database table: roomrates
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomRates {
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
  webbookcustpol?: string;
  webbookcust?: string;
  webbookcustdeptype?: string;
  webbookcustdepamt?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
  publishedoncorp?: number;
  publishedonagent?: number;
}

export interface ICreateRoomRates {
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