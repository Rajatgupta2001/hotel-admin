/**
 * Pos2GuestMaster Model
 * Database table: pos2guestmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2GuestMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  fname?: string;
  lname?: string;
  email?: string;
  phoneno?: string;
  taxtype?: string;
  taxvalue?: string;
  address?: string;
  countrycode?: string;
  statecode?: string;
  city?: string;
  zipcode?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  crc32val?: number;
}

export interface ICreatePos2GuestMaster {
  hotelid?: number;
  posid?: number;
  fname?: string;
  lname?: string;
  email?: string;
  phoneno?: string;
  taxtype?: string;
  taxvalue?: string;
  address?: string;
  countrycode?: string;
  statecode?: string;
  city?: string;
  zipcode?: string;
  createdby?: number;
  modifiedby?: number;
  crc32val?: number;
}
export interface IUpdatePos2GuestMaster {
  hotelid?: number;
  posid?: number;
  fname?: string;
  lname?: string;
  email?: string;
  phoneno?: string;
  taxtype?: string;
  taxvalue?: string;
  address?: string;
  countrycode?: string;
  statecode?: string;
  city?: string;
  zipcode?: string;
  createdby?: number;
  modifiedby?: number;
  crc32val?: number;
}