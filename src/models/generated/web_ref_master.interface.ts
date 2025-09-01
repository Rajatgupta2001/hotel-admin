/**
 * WebRefMaster Model Interfaces
 * Database table: webRefMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebRefMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  webrefid: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateWebRefMaster {
  hotelid: number;
  webrefid: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebRefMaster {
  hotelid?: number;
  webrefid?: number;
}
