/**
 * RateGridAuditTrail Model Interfaces
 * Database table: rateGridAuditTrail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRateGridAuditTrail {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  rateid: number;  // Required
  rmtypeid?: number;
  ratetype?: string;
  type?: string;
  validityid?: number;
  validfrom?: Date;
  validto?: Date;
  weekdayno?: number;
  refcode?: number;
  tstamp?: number;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRateGridAuditTrail {
  hotelid: number;
  rateid: number;
  rmtypeid?: number;
  ratetype?: string;
  type?: string;
  validityid?: number;
  validfrom?: Date;
  validto?: Date;
  weekdayno?: number;
  refcode?: number;
  tstamp?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRateGridAuditTrail {
  hotelid?: number;
  rateid?: number;
  rmtypeid?: number;
  ratetype?: string;
  type?: string;
  validityid?: number;
  validfrom?: Date;
  validto?: Date;
  weekdayno?: number;
  refcode?: number;
  tstamp?: number;
  createdby?: number;
}
