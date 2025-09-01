/**
 * InclGrpItems Model Interfaces
 * Database table: inclGrpItems
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclGrpItems {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  inclgrpid: number;  // Required
  inclid: number;  // Required
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateInclGrpItems {
  hotelid: number;
  inclgrpid: number;
  inclid: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  sessionid: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInclGrpItems {
  hotelid?: number;
  inclgrpid?: number;
  inclid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
