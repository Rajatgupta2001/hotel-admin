import type { IIdentificationTypes } from './identification_types.interface';
import type { IIdentityTypeCustomFields } from './identity_type_custom_fields.interface';
/**
 * GuestIdentityCustomField Model
 * Database table: guestidentitycustomfield
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestIdentityCustomField {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  guestid?: number;
  identityid?: number;
  guestidentityid?: number;
  customfieldid?: number;
  customfieldvalue?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  identificationType?: IIdentificationTypes;
  customField?: IIdentityTypeCustomFields;
}

export interface ICreateGuestIdentityCustomField {
  hotelid?: number;
  guestid?: number;
  identityid?: number;
  guestidentityid?: number;
  customfieldid?: number;
  customfieldvalue?: string;
  createdby?: number;
  modifiedby?: number;
  identificationType?: IIdentificationTypes;
  customField?: IIdentityTypeCustomFields;
}
export interface IUpdateGuestIdentityCustomField {
  hotelid?: number;
  guestid?: number;
  identityid?: number;
  guestidentityid?: number;
  customfieldid?: number;
  customfieldvalue?: string;
  createdby?: number;
  modifiedby?: number;
  identificationType?: IIdentificationTypes;
  customField?: IIdentityTypeCustomFields;
}