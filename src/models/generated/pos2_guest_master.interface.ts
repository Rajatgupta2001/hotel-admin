/**
 * Pos2GuestMaster Model Interfaces
 * Database table: pos2GuestMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
  crc32val?: number;
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
