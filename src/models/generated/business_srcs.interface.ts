/**
 * BusinessSrcs Model Interfaces
 * Database table: businessSrcs
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBusinessSrcs {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  description: string;  // Required
  accronym?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateBusinessSrcs {
  hotelid: number;
  title: string;
  description: string;
  accronym?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBusinessSrcs {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
