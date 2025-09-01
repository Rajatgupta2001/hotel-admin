/**
 * EventReport Model Interfaces
 * Database table: eventReport
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IEventReport {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Default: 0
  compid?: number;  // Primary key - auto-generated
  sqsrefid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  val1?: string;
  val2?: string;
  retrycnt?: number;  // Default: 0
  status?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateEventReport {
  hotelid?: number;
  sqsrefid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  val1?: string;
  val2?: string;
  retrycnt?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateEventReport {
  hotelid?: number;
  sqsrefid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  val1?: string;
  val2?: string;
  retrycnt?: number;
  status?: string;
}
