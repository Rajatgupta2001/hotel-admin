/**
 * RoomTypesHistory Model Interfaces
 * Database table: roomTypesHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomTypesHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  accronym: string;  // Required
  noofrooms: number;  // Required
  image: string;  // Required
  description: string;  // Required
  overbookingvalue: number;  // Required
  overbookingtype: string;  // Required
  isgenderbase: number;  // Required
  stdoccupancy: number;  // Required
  higheroccupancy: number;  // Required
  isbedalwd: number;  // Required
  xtralwdbeds: number;  // Required
  taxapplicableon: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  refid: number;  // Required
  servmdate: Date;  // Required
}

// Create interface - for new entity creation
export interface ICreateRoomTypesHistory {
  hotelid: number;
  title: string;
  accronym: string;
  noofrooms: number;
  image: string;
  description: string;
  overbookingvalue: number;
  overbookingtype: string;
  isgenderbase: number;
  stdoccupancy: number;
  higheroccupancy: number;
  isbedalwd: number;
  xtralwdbeds: number;
  taxapplicableon: string;
  modifiedby?: number;
  status: string;
  refid: number;
  servmdate: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomTypesHistory {
  hotelid?: number;
  title?: string;
  accronym?: string;
  noofrooms?: number;
  image?: string;
  description?: string;
  overbookingvalue?: number;
  overbookingtype?: string;
  isgenderbase?: number;
  stdoccupancy?: number;
  higheroccupancy?: number;
  isbedalwd?: number;
  xtralwdbeds?: number;
  taxapplicableon?: string;
  modifiedby?: number;
  status?: string;
  refid?: number;
  servmdate?: Date;
}
