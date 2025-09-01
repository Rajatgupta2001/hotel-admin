/**
 * RateGridDateRange Model
 * Database table: rategriddaterange
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRateGridDateRange {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: string;
  ratetype?: string;
  rateid?: number;
  type?: string;
  validityid?: number;
  validfrom?: Date;
  validto?: Date;
  weekdayno?: number;
  refcode?: number;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateRateGridDateRange {
  hotelid?: number;
  rmtypeid?: string;
  ratetype?: string;
  rateid?: number;
  type?: string;
  validityid?: number;
  validfrom?: Date;
  validto?: Date;
  weekdayno?: number;
  refcode?: number;
  status?: string;
  createdby?: number;
}
export interface IUpdateRateGridDateRange {
  hotelid?: number;
  rmtypeid?: string;
  ratetype?: string;
  rateid?: number;
  type?: string;
  validityid?: number;
  validfrom?: Date;
  validto?: Date;
  weekdayno?: number;
  refcode?: number;
  status?: string;
  createdby?: number;
}