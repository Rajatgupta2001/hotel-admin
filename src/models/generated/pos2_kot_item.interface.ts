/**
 * Pos2KotItem Model Interfaces
 * Database table: pos2KotItem
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2KotItem {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  parentid?: number;  // Default: 0
  parentrefid?: number;  // Default: 0
  kotid?: number;
  kichenid?: number;
  productid?: number;
  productname?: string;
  itemhash?: string;
  description?: string;
  producttype?: number;
  unit?: number;  // Default: text("'0.000000'"
  suggestion?: string;
  choiceid?: number;  // Default: 0
  choiceprice?: number;  // Default: text("'0.000000'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  shiftstatusid?: number;
  servingorder?: number;  // Default: 0
  servinguserid?: number;
  counterid?: number;
  posid: number;  // Required
  newitemid?: number;  // Default: 0
  status?: string;  // Default: 'A'
  oldtransid?: number;
}

// Create interface - for new entity creation
export interface ICreatePos2KotItem {
  parentid?: number;
  parentrefid?: number;
  kotid?: number;
  kichenid?: number;
  productid?: number;
  productname?: string;
  itemhash?: string;
  description?: string;
  producttype?: number;
  unit?: number;
  suggestion?: string;
  choiceid?: number;
  choiceprice?: number;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servingorder?: number;
  servinguserid?: number;
  counterid?: number;
  posid: number;
  newitemid?: number;
  status?: string;
  oldtransid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2KotItem {
  parentid?: number;
  parentrefid?: number;
  kotid?: number;
  kichenid?: number;
  productid?: number;
  productname?: string;
  itemhash?: string;
  description?: string;
  producttype?: number;
  unit?: number;
  suggestion?: string;
  choiceid?: number;
  choiceprice?: number;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servingorder?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  newitemid?: number;
  status?: string;
  oldtransid?: number;
}
