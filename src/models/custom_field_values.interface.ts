/**
 * CustomFieldValues Model
 * Database table: customfieldvalues
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICustomFieldValues {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  customfieldid?: string;
  refid?: number;
  reftype?: string;
  value?: string;
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateCustomFieldValues {
  compid?: number;
  hotelid?: number;
  customfieldid?: string;
  refid?: number;
  reftype?: string;
  value?: string;
  modifiedby?: number;
  createdby?: number;
}
export interface IUpdateCustomFieldValues {
  compid?: number;
  hotelid?: number;
  customfieldid?: string;
  refid?: number;
  reftype?: string;
  value?: string;
  modifiedby?: number;
  createdby?: number;
}