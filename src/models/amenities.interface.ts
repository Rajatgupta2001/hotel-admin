/**
 * Amenities Model
 * Database table: amenities
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAmenities {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  icon?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  sortorder?: number;  // Default: 0 (backend)
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
  showonhousekepping?: number;  // Default: 0 (backend)
}

export interface ICreateAmenities {
  hotelid: number;
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