/**
 * ActivityTimeSlotPrices Model
 * Database table: activitytimeslotprices
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IActivityTimeSlotPrices {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  seasonid?: number;
  timeslotid?: number;
  attributeid?: number;
  adultprice?: number;
  childprice?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateActivityTimeSlotPrices {
  hotelid?: number;
  seasonid?: number;
  timeslotid?: number;
  attributeid?: number;
  adultprice?: number;
  childprice?: number;
  status?: string;
  createdby?: number;
}
export interface IUpdateActivityTimeSlotPrices {
  hotelid?: number;
  seasonid?: number;
  timeslotid?: number;
  attributeid?: number;
  adultprice?: number;
  childprice?: number;
  status?: string;
  createdby?: number;
}