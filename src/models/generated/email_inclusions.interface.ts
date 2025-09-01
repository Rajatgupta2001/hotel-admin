/**
 * EmailInclusions Model Interfaces
 * Database table: emailInclusions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IEmailInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  emailid: number;  // Required
  inclid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateEmailInclusions {
  hotelid: number;
  emailid: number;
  inclid: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateEmailInclusions {
  hotelid?: number;
  emailid?: number;
  inclid?: number;
  modifiedby?: number;
}
