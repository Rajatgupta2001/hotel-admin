/**
 * MarketSegment Model Interfaces
 * Database table: marketSegment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMarketSegment {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: string;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateMarketSegment {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  status?: string;
  createdby?: string;
  modifiedby?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateMarketSegment {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  status?: string;
  createdby?: string;
  modifiedby?: string;
}
