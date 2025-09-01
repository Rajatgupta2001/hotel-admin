/**
 * IdentityTypeCustomFields Model
 * Database table: identitytypecustomfields
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IIdentityTypeCustomFields {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  identityid?: number;
  customfield?: string;
  code?: string;
  customfieldtype?: string;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateIdentityTypeCustomFields {
  hotelid?: number;
  identityid?: number;
  customfield?: string;
  code?: string;
  customfieldtype?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateIdentityTypeCustomFields {
  hotelid?: number;
  identityid?: number;
  customfield?: string;
  code?: string;
  customfieldtype?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}