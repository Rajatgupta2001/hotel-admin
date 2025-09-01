/**
 * FrontDeskSavedHtmls Model
 * Database table: frontdesksavedhtmls
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFrontDeskSavedHtmls {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  html?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateFrontDeskSavedHtmls {
  hotelid?: number;
  title?: string;
  html?: string;
}
export interface IUpdateFrontDeskSavedHtmls {
  hotelid?: number;
  title?: string;
  html?: string;
}