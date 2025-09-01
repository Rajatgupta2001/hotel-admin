/**
 * AllotDataDecrepancyDev Model Interfaces
 * Database table: allotDataDecrepancyDev
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAllotDataDecrepancyDev {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  avlroom?: number;
}

// Create interface - for new entity creation
export interface ICreateAllotDataDecrepancyDev {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  avlroom?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAllotDataDecrepancyDev {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  avlroom?: number;
}
