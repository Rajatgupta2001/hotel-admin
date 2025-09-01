/**
 * RateGridAuditTrail Model
 * Database table: rategridaudittrail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRateGridAuditTrail {
  id?: string;  // Primary key - auto-generated
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
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateRateGridAuditTrail {
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