/**
 * WebMapper Model Interfaces
 * Database table: webMapper
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebMapper {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  type?: string;
  refid?: number;
  reftype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateWebMapper {
  hotelid: number;
  type?: string;
  refid?: number;
  reftype?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebMapper {
  hotelid?: number;
  type?: string;
  refid?: number;
  reftype?: string;
  createdby?: number;
}
