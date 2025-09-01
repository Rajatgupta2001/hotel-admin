/**
 * RsvSpecialDisc Model Interfaces
 * Database table: rsvSpecialDisc
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvSpecialDisc {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;  // Default: 0
  discountid?: number;  // Default: 0
  discountname?: string;
  discoriginalval?: number;  // Default: text("'0.000000'"
  discappliedval?: number;  // Default: text("'0.000000'"
  requirementid?: number;  // Default: 0
  value1?: string;
  value2?: string;
  value3?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
