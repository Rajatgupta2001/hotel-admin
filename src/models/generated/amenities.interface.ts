/**
 * Amenities Model Interfaces
 * Database table: amenities
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAmenities {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  shortname: string;  // Required
  imagename?: string;
  description: string;  // Required
  icon?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  sortorder?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  showonhousekepping?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateAmenities {
  hotelid: number;
  title: string;
  shortname: string;
  imagename?: string;
  description: string;
  icon?: string;
  createdby?: number;
  status: string;
  sortorder?: number;
  modifiedby?: number;
  showonhousekepping?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAmenities {
  hotelid?: number;
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  icon?: string;
  createdby?: number;
  status?: string;
  sortorder?: number;
  modifiedby?: number;
  showonhousekepping?: number;
}
