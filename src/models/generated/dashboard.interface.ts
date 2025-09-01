/**
 * Dashboard Model Interfaces
 * Database table: dashboard
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDashboard {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  userid: number;  // Required
  title: string;  // Required
  sortorder?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateDashboard {
  hotelid: number;
  userid: number;
  title: string;
  sortorder?: number;
  createdby?: number;
  modifiedby?: number;
  status: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDashboard {
  hotelid?: number;
  userid?: number;
  title?: string;
  sortorder?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
