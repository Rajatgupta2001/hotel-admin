/**
 * FrontDeskSavedHtmls Model Interfaces
 * Database table: frontDeskSavedHtmls
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFrontDeskSavedHtmls {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  html: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateFrontDeskSavedHtmls {
  hotelid: number;
  title: string;
  html: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFrontDeskSavedHtmls {
  hotelid?: number;
  title?: string;
  html?: string;
}
