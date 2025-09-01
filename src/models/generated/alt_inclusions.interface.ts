/**
 * AltInclusions Model Interfaces
 * Database table: altInclusions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAltInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  inclid?: number;
  altinclid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAltInclusions {
  hotelid?: number;
  inclid?: number;
  altinclid?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAltInclusions {
  hotelid?: number;
  inclid?: number;
  altinclid?: number;
  createdby?: number;
}
