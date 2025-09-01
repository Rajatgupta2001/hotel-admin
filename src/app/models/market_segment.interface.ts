/**
 * MarketSegment Model
 * Database table: marketsegment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IMarketSegment {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: string;  // User ID reference
}

export interface ICreateMarketSegment {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  status?: string;
  createdby?: string;
  modifiedby?: string;
}
export interface IUpdateMarketSegment {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  status?: string;
  createdby?: string;
  modifiedby?: string;
}