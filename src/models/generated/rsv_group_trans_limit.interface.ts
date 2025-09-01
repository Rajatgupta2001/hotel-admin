/**
 * RsvGroupTransLimit Model Interfaces
 * Database table: rsvGroupTransLimit
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvGroupTransLimit {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Default: 0
  groupid?: number;  // Default: 0
  limittype?: string;
  limitamount?: number;
  ispernight?: number;  // Default: 0
  isperperson?: number;
  isperroom?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRsvGroupTransLimit {
  hotelid?: number;
  groupid?: number;
  limittype?: string;
  limitamount?: number;
  ispernight?: number;
  isperperson?: number;
  isperroom?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvGroupTransLimit {
  hotelid?: number;
  groupid?: number;
  limittype?: string;
  limitamount?: number;
  ispernight?: number;
  isperperson?: number;
  isperroom?: number;
  createdby?: number;
}
