/**
 * Keycardusers Model Interfaces
 * Database table: keycardusers
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IKeycardusers {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  devicecode: string;  // Required
  deviceuser: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
}

// Create interface - for new entity creation
export interface ICreateKeycardusers {
  hotelid: number;
  devicecode: string;
  deviceuser: number;
  updatedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateKeycardusers {
  hotelid?: number;
  devicecode?: string;
  deviceuser?: number;
  updatedon?: Date;
}
