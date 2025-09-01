/**
 * GuestIdentity Model
 * Database table: guestidentity
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestIdentity {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  guestid?: number;
  identityid?: string;
  name?: string;
  issuedon?: Date;
  placeofissue?: string;
  expiredon?: Date;
  address?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGuestIdentity {
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