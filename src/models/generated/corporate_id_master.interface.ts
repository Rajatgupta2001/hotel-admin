/**
 * CorporateIdMaster Model Interfaces
 * Database table: corporateIdMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorporateIdMaster {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  corpid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateCorporateIdMaster {
  compid?: number;
  hotelid?: number;
  corpid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorporateIdMaster {
  compid?: number;
  hotelid?: number;
  corpid?: number;
}
