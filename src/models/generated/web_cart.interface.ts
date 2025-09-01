/**
 * WebCart Model Interfaces
 * Database table: webCart
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebCart {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  webrefid?: string;
  reftype?: string;
  refid?: number;
  sessionid?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateWebCart {
  hotelid?: number;
  webrefid?: string;
  reftype?: string;
  refid?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebCart {
  hotelid?: number;
  webrefid?: string;
  reftype?: string;
  refid?: number;
  sessionid?: string;
}
