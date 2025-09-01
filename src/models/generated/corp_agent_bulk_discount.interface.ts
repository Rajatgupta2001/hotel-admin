/**
 * CorpAgentBulkDiscount Model Interfaces
 * Database table: corpAgentBulkDiscount
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpAgentBulkDiscount {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  enddate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  roomnightfrom?: number;  // Default: 0
  roomnightto?: number;  // Default: 0
  discount?: number;  // Default: text("'0.000000'"
  disctype?: string;  // Default: text("'FV'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: Date;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateCorpAgentBulkDiscount {
  hotelid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;
  enddate?: Date;
  roomnightfrom?: number;
  roomnightto?: number;
  discount?: number;
  disctype?: string;
  createdby?: Date;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorpAgentBulkDiscount {
  hotelid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;
  enddate?: Date;
  roomnightfrom?: number;
  roomnightto?: number;
  discount?: number;
  disctype?: string;
  createdby?: Date;
  status?: string;
}
