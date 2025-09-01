/**
 * InclGrpDiscountsHistory Model Interfaces
 * Database table: inclGrpDiscountsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclGrpDiscountsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  inclgrpid: number;  // Required
  pospointid: number;  // Required
  discountper?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  refid: number;  // Required
  servmdate?: Date;
}

// Create interface - for new entity creation
export interface ICreateInclGrpDiscountsHistory {
  hotelid: number;
  inclgrpid: number;
  pospointid: number;
  discountper?: number;
  modifiedby?: number;
  status: string;
  refid: number;
  servmdate?: Date;
}

// Update interface - for entity updates (all fields optional)
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
