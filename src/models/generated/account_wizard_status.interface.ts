/**
 * AccountWizardStatus Model Interfaces
 * Database table: accountWizardStatus
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountWizardStatus {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  email?: string;
  stepcompleted?: string;
  isfinished?: number;  // Default: 0
  newssource?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  status?: string;
}

// Create interface - for new entity creation
export interface ICreateAccountWizardStatus {
  compid?: number;
  hotelid?: number;
  email?: string;
  stepcompleted?: string;
  isfinished?: number;
  newssource?: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountWizardStatus {
  compid?: number;
  hotelid?: number;
  email?: string;
  stepcompleted?: string;
  isfinished?: number;
  newssource?: string;
  status?: string;
}
