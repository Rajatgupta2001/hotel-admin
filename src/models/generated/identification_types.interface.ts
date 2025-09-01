/**
 * IdentificationTypes Model Interfaces
 * Database table: identificationTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IIdentificationTypes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  shortcode?: string;
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateIdentificationTypes {
  hotelid: number;
  title: string;
  shortcode?: string;
  description: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateIdentificationTypes {
  hotelid?: number;
  title?: string;
  shortcode?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
