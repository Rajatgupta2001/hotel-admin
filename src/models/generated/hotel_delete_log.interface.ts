/**
 * HotelDeleteLog Model Interfaces
 * Database table: hotelDeleteLog
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelDeleteLog {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  nadate?: Date;
  ischangednadate?: Date;  // Default: 0
  verifycode?: string;
  description?: string;
  ip?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateHotelDeleteLog {
  hotelid?: number;
  nadate?: Date;
  ischangednadate?: Date;
  verifycode?: string;
  description?: string;
  ip?: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelDeleteLog {
  hotelid?: number;
  nadate?: Date;
  ischangednadate?: Date;
  verifycode?: string;
  description?: string;
  ip?: string;
  status?: string;
}
