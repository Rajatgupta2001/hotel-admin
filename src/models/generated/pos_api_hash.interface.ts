/**
 * PosApiHash Model Interfaces
 * Database table: posApiHash
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosApiHash {
  apihash?: string;
  hotelid?: number;
  posid?: number;
  orderid?: string;
  ordertype?: string;
  reqtime?: Date;  // Default: '0000-00-00 00:00:00'
}

// Create interface - for new entity creation
export interface ICreatePosApiHash {
  apihash?: string;
  hotelid?: number;
  posid?: number;
  orderid?: string;
  ordertype?: string;
  reqtime?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosApiHash {
  apihash?: string;
  hotelid?: number;
  posid?: number;
  orderid?: string;
  ordertype?: string;
  reqtime?: Date;
}
