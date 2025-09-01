/**
 * CapchaCodesAuth Model Interfaces
 * Database table: capchaCodesAuth
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICapchaCodesAuth {
  id?: number;  // Primary key - auto-generated
  sessionid?: string;
  capchacode?: string;
  fieldcode?: string;
  hotelid?: number;
  username?: string;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateCapchaCodesAuth {
  sessionid?: string;
  capchacode?: string;
  fieldcode?: string;
  hotelid?: number;
  username?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCapchaCodesAuth {
  sessionid?: string;
  capchacode?: string;
  fieldcode?: string;
  hotelid?: number;
  username?: string;
}
