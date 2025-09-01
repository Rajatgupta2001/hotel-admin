/**
 * GuestIdentity Model Interfaces
 * Database table: guestIdentity
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestIdentity {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  guestid: number;  // Required
  identityid: string;  // Required
  name?: string;
  issuedon?: Date;
  placeofissue?: string;
  expiredon?: Date;
  address?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestIdentity {
  hotelid: number;
  guestid: number;
  identityid: string;
  name?: string;
  issuedon?: Date;
  placeofissue?: string;
  expiredon?: Date;
  address?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestIdentity {
  hotelid?: number;
  guestid?: number;
  identityid?: string;
  name?: string;
  issuedon?: Date;
  placeofissue?: string;
  expiredon?: Date;
  address?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}
