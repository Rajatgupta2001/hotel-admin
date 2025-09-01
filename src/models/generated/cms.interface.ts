/**
 * Cms Model Interfaces
 * Database table: cms
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICms {
  id?: number;  // Primary key - auto-generated
  key: string;  // Required
  title?: string;
  content?: string;
  value1?: string;
  value2?: string;
  status?: string;  // Default: 'A'
  countryids?: string;
  hoteltype?: string;
  hotelcustomertype?: string;
  knowmore?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCms {
  key: string;
  title?: string;
  content?: string;
  value1?: string;
  value2?: string;
  status?: string;
  countryids?: string;
  hoteltype?: string;
  hotelcustomertype?: string;
  knowmore?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCms {
  key?: string;
  title?: string;
  content?: string;
  value1?: string;
  value2?: string;
  status?: string;
  countryids?: string;
  hoteltype?: string;
  hotelcustomertype?: string;
  knowmore?: string;
  createdby?: number;
  modifiedby?: number;
}
