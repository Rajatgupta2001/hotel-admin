/**
 * CustomFieldMaster Model
 * Database table: customfieldmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICustomFieldMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  type?: string;
  shortcode?: string;
  name?: string;
  description?: string;
  module?: number;
  visibilityarea?: string;
  validationrules?: string;
  order?: number;
  status?: string;
  gid?: number;
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateCustomFieldMaster {
  hotelid?: number;
  type?: string;
  shortcode?: string;
  name?: string;
  description?: string;
  module?: number;
  visibilityarea?: string;
  validationrules?: string;
  order?: number;
  status?: string;
  gid?: number;
  modifiedby?: number;
  createdby?: number;
}
export interface IUpdateCustomFieldMaster {
  hotelid?: number;
  type?: string;
  shortcode?: string;
  name?: string;
  description?: string;
  module?: number;
  visibilityarea?: string;
  validationrules?: string;
  order?: number;
  status?: string;
  gid?: number;
  modifiedby?: number;
  createdby?: number;
}