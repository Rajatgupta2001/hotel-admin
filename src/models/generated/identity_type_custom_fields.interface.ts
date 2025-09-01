/**
 * IdentityTypeCustomFields Model Interfaces
 * Database table: identityTypeCustomFields
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IIdentityTypeCustomFields {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  identityid: number;  // Required
  customfield?: string;
  code?: string;
  customfieldtype: string;  // Required
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateIdentityTypeCustomFields {
  hotelid: number;
  identityid: number;
  customfield?: string;
  code?: string;
  customfieldtype: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateIdentityTypeCustomFields {
  hotelid?: number;
  identityid?: number;
  customfield?: string;
  code?: string;
  customfieldtype?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
