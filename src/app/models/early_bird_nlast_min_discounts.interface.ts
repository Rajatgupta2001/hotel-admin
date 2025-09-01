/**
 * EarlyBirdNlastMinDiscounts Model
 * Database table: earlybirdnlastmindiscounts
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IEarlyBirdNlastMinDiscounts {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  days?: number;
  occupancy?: number;
  seasonattributeid?: number;
  roomtype?: number;
  discount?: number;
  discounttype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateEarlyBirdNlastMinDiscounts {
  hotelid?: number;
  days?: number;
  occupancy?: number;
  seasonattributeid?: number;
  roomtype?: number;
  discount?: number;
  discounttype?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateEarlyBirdNlastMinDiscounts {
  hotelid?: number;
  days?: number;
  occupancy?: number;
  seasonattributeid?: number;
  roomtype?: number;
  discount?: number;
  discounttype?: string;
  createdby?: number;
  modifiedby?: number;
}