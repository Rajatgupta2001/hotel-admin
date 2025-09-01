/**
 * HotelBillinglead Model Interfaces
 * Database table: hotelBillinglead
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelBillinglead {
  id?: string;  // Primary key - auto-generated
  hotelid: string;  // Required
  servicemasterid: string;  // Required
  leadid?: string;
  remarks?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateHotelBillinglead {
  hotelid: string;
  servicemasterid: string;
  leadid?: string;
  remarks?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelBillinglead {
  hotelid?: string;
  servicemasterid?: string;
  leadid?: string;
  remarks?: string;
}
