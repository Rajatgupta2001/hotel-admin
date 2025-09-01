/**
 * OverBookingSettings Model
 * Database table: overbookingsettings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IOverBookingSettings {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  overbookingallowed?: number;
  overbookvalue?: number;
  overbooktype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateOverBookingSettings {
  hotelid?: number;
  rmtypeid?: number;
  overbookingallowed?: number;
  overbookvalue?: number;
  overbooktype?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateOverBookingSettings {
  hotelid?: number;
  rmtypeid?: number;
  overbookingallowed?: number;
  overbookvalue?: number;
  overbooktype?: string;
  createdby?: number;
  modifiedby?: number;
}