/**
 * RsvSpecialDisc Model
 * Database table: rsvspecialdisc
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvSpecialDisc {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  discountid?: number;
  discountname?: string;
  discoriginalval?: number;
  discappliedval?: number;
  requirementid?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateRsvSpecialDisc {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  discountid?: number;
  discountname?: string;
  discoriginalval?: number;
  discappliedval?: number;
  requirementid?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateRsvSpecialDisc {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  discountid?: number;
  discountname?: string;
  discoriginalval?: number;
  discappliedval?: number;
  requirementid?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  createdby?: number;
  modifiedby?: number;
}