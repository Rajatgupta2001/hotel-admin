/**
 * Pos2OrderKot Model Interfaces
 * Database table: pos2OrderKot
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2OrderKot {
  id?: number;  // Primary key - auto-generated
  isrefund?: number;  // Default: 0
  parentid?: number;  // Default: 0
  hotelid?: number;  // Primary key - auto-generated
  orderid?: number;
  kotnumber?: string;
  suggestion?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  counterid?: number;
  posid: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  servinguserid?: number;
  shiftstatusid?: number;
  status?: string;  // Default: 'A'
  oldinvoiceid?: string;
  stewarduserid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreatePos2OrderKot {
  isrefund?: number;
  parentid?: number;
  orderid?: number;
  kotnumber?: string;
  suggestion?: string;
  createdby?: number;
  counterid?: number;
  posid: number;
  modifiedby?: number;
  servinguserid?: number;
  shiftstatusid?: number;
  status?: string;
  oldinvoiceid?: string;
  stewarduserid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2OrderKot {
  isrefund?: number;
  parentid?: number;
  orderid?: number;
  kotnumber?: string;
  suggestion?: string;
  createdby?: number;
  counterid?: number;
  posid?: number;
  modifiedby?: number;
  servinguserid?: number;
  shiftstatusid?: number;
  status?: string;
  oldinvoiceid?: string;
  stewarduserid?: number;
}
