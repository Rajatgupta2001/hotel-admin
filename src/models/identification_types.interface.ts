import type { IGuestIdentityCustomField } from './guest_identity_custom_field.interface';
/**
 * IdentificationTypes Model
 * Database table: identificationtypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IIdentificationTypes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  shortcode?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  guestIdentityCustomFields?: IGuestIdentityCustomField;
}

export interface ICreateIdentificationTypes {
  hotelid?: number;
  title?: string;
  shortcode?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  guestIdentityCustomFields?: IGuestIdentityCustomField;
}
export interface IUpdateIdentificationTypes {
  hotelid?: number;
  title?: string;
  shortcode?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  guestIdentityCustomFields?: IGuestIdentityCustomField;
}