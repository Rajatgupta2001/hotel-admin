/**
 * LoginHistory Model Interfaces
 * Database table: loginHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILoginHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  usernameused: string;  // Required
  loginattempedon: Date;  // Required
  issuccessful: number;  // Required
  ipaddress: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateLoginHistory {
  hotelid: number;
  usernameused: string;
  loginattempedon: Date;
  issuccessful: number;
  ipaddress: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLoginHistory {
  hotelid?: number;
  usernameused?: string;
  loginattempedon?: Date;
  issuccessful?: number;
  ipaddress?: string;
  modifiedby?: number;
}
