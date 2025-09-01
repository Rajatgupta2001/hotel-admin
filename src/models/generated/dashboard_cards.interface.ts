/**
 * DashboardCards Model Interfaces
 * Database table: dashboardCards
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDashboardCards {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  dashboardid: number;  // Required
  cardtemplateid: number;  // Required
  title: string;  // Required
  prefquery: string;  // Required
  userparams: string;  // Required
  cardcode: string;  // Required
  sortorder?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateDashboardCards {
  hotelid: number;
  dashboardid: number;
  cardtemplateid: number;
  title: string;
  prefquery: string;
  userparams: string;
  cardcode: string;
  sortorder?: number;
  createdby?: number;
  modifiedby?: number;
  status: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDashboardCards {
  hotelid?: number;
  dashboardid?: number;
  cardtemplateid?: number;
  title?: string;
  prefquery?: string;
  userparams?: string;
  cardcode?: string;
  sortorder?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
