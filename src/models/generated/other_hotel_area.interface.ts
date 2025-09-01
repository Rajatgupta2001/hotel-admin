/**
 * OtherHotelArea Model Interfaces
 * Database table: otherHotelArea
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IOtherHotelArea {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  floorid?: number;  // Default: 0
  blockid?: number;  // Default: 0
  title: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateOtherHotelArea {
  hotelid: number;
  floorid?: number;
  blockid?: number;
  title: string;
  description: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateOtherHotelArea {
  hotelid?: number;
  floorid?: number;
  blockid?: number;
  title?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
