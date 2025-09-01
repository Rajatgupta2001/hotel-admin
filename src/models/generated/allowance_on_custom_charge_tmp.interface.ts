/**
 * AllowanceOnCustomChargeTmp Model Interfaces
 * Database table: allowanceOnCustomCharge_tmp
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAllowanceOnCustomChargeTmp {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  id?: number;  // Primary key - auto-generated
  transtype?: string;
}

// Create interface - for new entity creation
export interface ICreateAllowanceOnCustomChargeTmp {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transtype?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAllowanceOnCustomChargeTmp {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transtype?: string;
}
