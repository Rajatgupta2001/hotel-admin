/**
 * GdsContractAllotment Model
 * Database table: gdscontractallotment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsContractAllotment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  refid?: number;
  reftype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGdsContractAllotment {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  refid?: number;
  reftype?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGdsContractAllotment {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  refid?: number;
  reftype?: string;
  createdby?: number;
  modifiedby?: number;
}