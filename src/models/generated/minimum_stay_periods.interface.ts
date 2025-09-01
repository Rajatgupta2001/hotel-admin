/**
 * MinimumStayPeriods Model Interfaces
 * Database table: minimumStayPeriods
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMinimumStayPeriods {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  type: string;  // Required
  startdate: Date;  // Required
  enddate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  closedon?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateMinimumStayPeriods {
  hotelid: number;
  title: string;
  type: string;
  startdate: Date;
  enddate: Date;
  createdby?: number;
  status: string;
  closedon?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateMinimumStayPeriods {
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  closedon?: number;
  modifiedby?: number;
}
