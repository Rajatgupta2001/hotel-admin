/**
 * CorpAppDiscHistory Model Interfaces
 * Database table: corpAppDiscHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpAppDiscHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  corpid: number;  // Required
  validfromday: number;  // Required
  validfrommonth: number;  // Required
  validtoday: number;  // Required
  validtomonth: number;  // Required
  discount: number;  // Required
  discounttype: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  effectivedate: Date;  // Required
}

// Create interface - for new entity creation
export interface ICreateCorpAppDiscHistory {
  hotelid: number;
  corpid: number;
  validfromday: number;
  validfrommonth: number;
  validtoday: number;
  validtomonth: number;
  discount: number;
  discounttype: string;
  modifiedby?: number;
  status: string;
  effectivedate: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorpAppDiscHistory {
  hotelid?: number;
  corpid?: number;
  validfromday?: number;
  validfrommonth?: number;
  validtoday?: number;
  validtomonth?: number;
  discount?: number;
  discounttype?: string;
  modifiedby?: number;
  status?: string;
  effectivedate?: Date;
}
