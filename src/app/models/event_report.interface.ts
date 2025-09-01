/**
 * EventReport Model
 * Database table: eventreport
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IEventReport {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  sqsrefid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  val1?: string;
  val2?: string;
  retrycnt?: number;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateEventReport {
  hotelid?: number;
  compid?: number;
  sqsrefid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  val1?: string;
  val2?: string;
  retrycnt?: number;
  status?: string;
}
export interface IUpdateEventReport {
  hotelid?: number;
  compid?: number;
  sqsrefid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  val1?: string;
  val2?: string;
  retrycnt?: number;
  status?: string;
}