/**
 * LogDeletedHotel Model Interfaces
 * Database table: logDeletedHotel
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILogDeletedHotel {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  nadate?: Date;
  changenadate?: Date;
  verifycode?: string;
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateLogDeletedHotel {
  hotelid?: number;
  nadate?: Date;
  changenadate?: Date;
  verifycode?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLogDeletedHotel {
  hotelid?: number;
  nadate?: Date;
  changenadate?: Date;
  verifycode?: string;
}
