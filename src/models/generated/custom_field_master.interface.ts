/**
 * CustomFieldMaster Model Interfaces
 * Database table: customFieldMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICustomFieldMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  type: string;  // Required
  shortcode: string;  // Required
  name: string;  // Required
  description?: string;
  module: number;  // Required
  visibilityarea: string;  // Required
  validationrules?: string;
  order?: number;  // Default: 0
  status: string;  // Required
  gid?: number;
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCustomFieldMaster {
  hotelid?: number;
  type: string;
  shortcode: string;
  name: string;
  description?: string;
  module: number;
  visibilityarea: string;
  validationrules?: string;
  order?: number;
  status: string;
  gid?: number;
  modifiedby?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
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
