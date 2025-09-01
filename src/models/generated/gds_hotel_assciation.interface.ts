/**
 * GdsHotelAssciation Model Interfaces
 * Database table: gdsHotelAssciation
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsHotelAssciation {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdsid?: number;
  gdshotelid?: number;
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateGdsHotelAssciation {
  hotelid?: number;
  gdsid?: number;
  gdshotelid?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsHotelAssciation {
  hotelid?: number;
  gdsid?: number;
  gdshotelid?: number;
  status?: string;
}
