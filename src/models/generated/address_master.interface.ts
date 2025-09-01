/**
 * AddressMaster Model Interfaces
 * Database table: addressMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAddressMaster {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  address1: string;  // Required
  address2: string;  // Required
  city: string;  // Required
  stateid: number;  // Required
  otherstate: string;  // Required
  zipcode: string;  // Required
  countryid: number;  // Required
  phoneno?: string;
  mobileno?: string;
  faxno?: string;
  addresstype: string;  // Required
  status: string;  // Required
  tablename: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAddressMaster {
  hotelid: number;
  refid: number;
  address1: string;
  address2: string;
  city: string;
  stateid: number;
  otherstate: string;
  zipcode: string;
  countryid: number;
  phoneno?: string;
  mobileno?: string;
  faxno?: string;
  addresstype: string;
  status: string;
  tablename: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAddressMaster {
  hotelid?: number;
  refid?: number;
  address1?: string;
  address2?: string;
  city?: string;
  stateid?: number;
  otherstate?: string;
  zipcode?: string;
  countryid?: number;
  phoneno?: string;
  mobileno?: string;
  faxno?: string;
  addresstype?: string;
  status?: string;
  tablename?: string;
  modifiedby?: number;
}
