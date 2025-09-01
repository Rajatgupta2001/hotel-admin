/**
 * InclGrpDiscountsHistory Model
 * Database table: inclgrpdiscountshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInclGrpDiscountsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  inclgrpid?: number;
  pospointid?: number;
  discountper?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  refid?: number;
  servmdate?: Date;
}

export interface ICreateInclGrpDiscountsHistory {
  hotelid?: number;
  inclgrpid?: number;
  pospointid?: number;
  discountper?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
  servmdate?: Date;
}
export interface IUpdateInclGrpDiscountsHistory {
  hotelid?: number;
  inclgrpid?: number;
  pospointid?: number;
  discountper?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
  servmdate?: Date;
}