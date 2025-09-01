/**
 * DashboardCards Model
 * Database table: dashboardcards
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDashboardCards {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  dashboardid?: number;
  cardtemplateid?: number;
  title?: string;
  prefquery?: string;
  userparams?: string;
  cardcode?: string;
  sortorder?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

export interface ICreateDashboardCards {
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