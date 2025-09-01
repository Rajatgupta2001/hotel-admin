/**
 * HotelCategory Model
 * Database table: hotelcategory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelCategory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  catname?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  hotelcatparentid?: number;
  shortname?: string;
}

export interface ICreateHotelCategory {
  hotelid?: number;
  catname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  hotelcatparentid?: number;
  shortname?: string;
}
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