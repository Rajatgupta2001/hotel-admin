/**
 * HotelCategory Model Interfaces
 * Database table: hotelCategory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelCategory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  catname: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  hotelcatparentid?: number;  // Default: 0
  shortname?: string;
}

// Create interface - for new entity creation
export interface ICreateHotelCategory {
  hotelid: number;
  catname: string;
  description: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  hotelcatparentid?: number;
  shortname?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelCategory {
  hotelid?: number;
  catname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  hotelcatparentid?: number;
  shortname?: string;
}
