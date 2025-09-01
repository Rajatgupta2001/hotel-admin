/**
 * AccountManagerUserIds Model Interfaces
 * Database table: accountManagerUserIds
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountManagerUserIds {
  userid?: string;  // Primary key - auto-generated
  manageuserid?: number;  // Primary key - auto-generated
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAccountManagerUserIds {
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountManagerUserIds {
}
