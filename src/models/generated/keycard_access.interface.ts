/**
 * KeycardAccess Model Interfaces
 * Database table: keycardAccess
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IKeycardAccess {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
}

// Create interface - for new entity creation
export interface ICreateKeycardAccess {
  hotelid?: number;
  title?: string;
  value?: string;
  updatedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateKeycardAccess {
  hotelid?: number;
  title?: string;
  value?: string;
  updatedon?: Date;
}
