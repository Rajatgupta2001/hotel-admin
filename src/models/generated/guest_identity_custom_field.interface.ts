/**
 * GuestIdentityCustomField Model Interfaces
 * Database table: guestIdentityCustomField
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestIdentityCustomField {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  guestid: number;  // Required
  identityid: number;  // Required
  guestidentityid: number;  // Required
  customfieldid: number;  // Required
  customfieldvalue?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestIdentityCustomField {
  hotelid: number;
  guestid: number;
  identityid: number;
  guestidentityid: number;
  customfieldid: number;
  customfieldvalue?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestIdentityCustomField {
  hotelid?: number;
  guestid?: number;
  identityid?: number;
  guestidentityid?: number;
  customfieldid?: number;
  customfieldvalue?: string;
  createdby?: number;
  modifiedby?: number;
}
