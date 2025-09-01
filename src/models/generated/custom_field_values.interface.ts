/**
 * CustomFieldValues Model Interfaces
 * Database table: customFieldValues
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICustomFieldValues {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  customfieldid: string;  // Required
  refid: number;  // Required
  reftype: string;  // Required
  value?: string;
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCustomFieldValues {
  compid?: number;
  hotelid?: number;
  customfieldid: string;
  refid: number;
  reftype: string;
  value?: string;
  modifiedby?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
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
