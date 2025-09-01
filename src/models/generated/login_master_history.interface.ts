/**
 * LoginMasterHistory Model Interfaces
 * Database table: loginMasterHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILoginMasterHistory {
  id?: number;  // Primary key - auto-generated
  loginid: number;  // Required
  password: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateLoginMasterHistory {
  loginid: number;
  password: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLoginMasterHistory {
  loginid?: number;
  password?: string;
  createdby?: number;
}
