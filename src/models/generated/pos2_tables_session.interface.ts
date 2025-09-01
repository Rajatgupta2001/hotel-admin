/**
 * Pos2TablesSession Model Interfaces
 * Database table: pos2TablesSession
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2TablesSession {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  tableid?: number;
  posorderid?: number;
  tableoccupancy?: number;
  tablestatus?: string;  // Default: text("'AVL'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  shiftstatusid?: number;
  servinguserid?: number;
  cashierid?: number;
  counterid?: number;
  posid?: number;
}

// Create interface - for new entity creation
export interface ICreatePos2TablesSession {
  hotelid?: number;
  tableid?: number;
  posorderid?: number;
  tableoccupancy?: number;
  tablestatus?: string;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servinguserid?: number;
  cashierid?: number;
  counterid?: number;
  posid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2TablesSession {
  hotelid?: number;
  tableid?: number;
  posorderid?: number;
  tableoccupancy?: number;
  tablestatus?: string;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servinguserid?: number;
  cashierid?: number;
  counterid?: number;
  posid?: number;
}
