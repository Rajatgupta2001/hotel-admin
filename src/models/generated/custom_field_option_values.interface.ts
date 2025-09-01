/**
 * CustomFieldOptionValues Model Interfaces
 * Database table: customFieldOptionValues
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICustomFieldOptionValues {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  customfieldtype?: string;  // Default: text("'CF'"
  customfieldid: string;  // Required
  value?: string;
  order?: number;  // Default: 0
  isdefault?: number;  // Default: 0
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCustomFieldOptionValues {
  compid?: number;
  hotelid?: number;
  customfieldtype?: string;
  customfieldid: string;
  value?: string;
  order?: number;
  isdefault?: number;
  modifiedby?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
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
