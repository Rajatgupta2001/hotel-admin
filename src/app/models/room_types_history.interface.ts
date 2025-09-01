/**
 * RoomTypesHistory Model
 * Database table: roomtypeshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomTypesHistory {
  id?: number;  // Primary key - auto-generated
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
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  refid?: number;
  servmdate?: Date;
}

export interface ICreateRoomTypesHistory {
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