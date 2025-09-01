/**
 * GuestCompanies Model Interfaces
 * Database table: guestCompanies
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestCompanies {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  compname: string;  // Required
  addressid: number;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestCompanies {
  hotelid: number;
  compname: string;
  addressid: number;
  description: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestCompanies {
  hotelid?: number;
  compname?: string;
  addressid?: number;
  description?: string;
  createdby?: number;
  modifiedby?: number;
}
