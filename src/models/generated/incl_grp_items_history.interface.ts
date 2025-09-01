/**
 * InclGrpItemsHistory Model Interfaces
 * Database table: inclGrpItemsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclGrpItemsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  inclgrpid: number;  // Required
  inclid: number;  // Required
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  refid: number;  // Required
}

// Create interface - for new entity creation
export interface ICreateInclGrpItemsHistory {
  hotelid: number;
  inclgrpid: number;
  inclid: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  modifiedby?: number;
  status: string;
  refid: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInclGrpItemsHistory {
  hotelid?: number;
  inclgrpid?: number;
  inclid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
}
