/**
 * InclGrpDiscounts Model
 * Database table: inclgrpdiscounts
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInclGrpDiscounts {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  inclgrpid?: number;
  pospointid?: number;
  discountper?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

export interface ICreateInclGrpDiscounts {
  hotelid?: number;
  inclgrpid?: number;
  pospointid?: number;
  discountper?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
export interface IUpdateInclGrpDiscounts {
  hotelid?: number;
  inclgrpid?: number;
  pospointid?: number;
  discountper?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}