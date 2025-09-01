/**
 * UserTypeVsModules Model Interfaces
 * Database table: userTypeVsModules
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserTypeVsModules {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  usertypeid: number;  // Required
  moduleid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status: string;  // Required
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateUserTypeVsModules {
  hotelid?: number;
  usertypeid: number;
  moduleid: number;
  createdby?: number;
  status: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserTypeVsModules {
  hotelid?: number;
  usertypeid?: number;
  moduleid?: number;
  createdby?: number;
  status?: string;
}
