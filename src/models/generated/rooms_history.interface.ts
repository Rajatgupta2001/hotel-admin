/**
 * RoomsHistory Model Interfaces
 * Database table: roomsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  floorid?: number;  // Default: 0
  blockid?: number;  // Default: 0
  pmtypeid: number;  // Required
  rmnameorno: string;  // Required
  description: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate: Date;  // Required
  status: string;  // Required
  refid: number;  // Required
}

// Create interface - for new entity creation
export interface ICreateRoomsHistory {
  hotelid: number;
  floorid?: number;
  blockid?: number;
  pmtypeid: number;
  rmnameorno: string;
  description: string;
  modifiedby?: number;
  servmdate: Date;
  status: string;
  refid: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomsHistory {
  hotelid?: number;
  floorid?: number;
  blockid?: number;
  pmtypeid?: number;
  rmnameorno?: string;
  description?: string;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
}
