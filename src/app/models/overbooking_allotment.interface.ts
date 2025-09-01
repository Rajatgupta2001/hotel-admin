/**
 * OverbookingAllotment Model
 * Database table: overbookingallotment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IOverbookingAllotment {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  forcednoofrooms?: number;
  stopbooking?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateOverbookingAllotment {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  forcednoofrooms?: number;
  stopbooking?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateOverbookingAllotment {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  forcednoofrooms?: number;
  stopbooking?: number;
  createdby?: number;
  modifiedby?: number;
}