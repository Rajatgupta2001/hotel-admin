/**
 * CustomFieldOptionValues Model
 * Database table: customfieldoptionvalues
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICustomFieldOptionValues {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  customfieldtype?: string;
  customfieldid?: string;
  value?: string;
  order?: number;
  isdefault?: number;
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateCustomFieldOptionValues {
  compid?: number;
  hotelid?: number;
  customfieldtype?: string;
  customfieldid?: string;
  value?: string;
  order?: number;
  isdefault?: number;
  modifiedby?: number;
  createdby?: number;
}
export interface IUpdateCustomFieldOptionValues {
  compid?: number;
  hotelid?: number;
  customfieldtype?: string;
  customfieldid?: string;
  value?: string;
  order?: number;
  isdefault?: number;
  modifiedby?: number;
  createdby?: number;
}