/**
 * WebResAuthenticationCheck Model Interfaces
 * Database table: webResAuthenticationCheck
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebResAuthenticationCheck {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  sessionid?: string;
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateWebResAuthenticationCheck {
  hotelid?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebResAuthenticationCheck {
  hotelid?: number;
  sessionid?: string;
}
