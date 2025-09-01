/**
 * InclGrpDiscounts Model Interfaces
 * Database table: inclGrpDiscounts
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclGrpDiscounts {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  inclgrpid: number;  // Required
  pospointid: number;  // Required
  discountper?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

// Create interface - for new entity creation
export interface ICreateInclGrpDiscounts {
  hotelid: number;
  inclgrpid: number;
  pospointid: number;
  discountper?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
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
