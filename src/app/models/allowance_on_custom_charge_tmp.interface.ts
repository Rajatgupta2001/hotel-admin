/**
 * AllowanceOnCustomChargeTmp Model
 * Database table: allowanceoncustomchargetmp
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAllowanceOnCustomChargeTmp {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  id?: number;  // Primary key - auto-generated
  transtype?: string;
}

export interface ICreateAllowanceOnCustomChargeTmp {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transtype?: string;
}
export interface IUpdateAllowanceOnCustomChargeTmp {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transtype?: string;
}