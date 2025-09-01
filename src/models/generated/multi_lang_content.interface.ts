/**
 * MultiLangContent Model Interfaces
 * Database table: multiLangContent
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMultiLangContent {
  hotelid?: number;  // Primary key - auto-generated
  languageid?: number;  // Primary key - auto-generated
  refid?: number;  // Primary key - auto-generated
  tablename?: string;  // Primary key - auto-generated
  contentxml?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateMultiLangContent {
  contentxml?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateMultiLangContent {
  contentxml?: string;
  createdby?: number;
  modifiedby?: number;
}
