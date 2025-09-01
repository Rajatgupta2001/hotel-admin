/**
 * HotelBudget Model
 * Database table: hotelbudget
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelBudget {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  dtmonth?: number;
  dtyear?: number;
  effectivedate?: Date;
  budget?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelBudget {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  dtmonth?: number;
  dtyear?: number;
  effectivedate?: Date;
  budget?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateHotelBudget {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  dtmonth?: number;
  dtyear?: number;
  effectivedate?: Date;
  budget?: number;
  createdby?: number;
  modifiedby?: number;
}