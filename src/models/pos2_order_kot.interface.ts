/**
 * Pos2OrderKot Model
 * Database table: pos2orderkot
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2OrderKot {
  id?: number;  // Primary key - auto-generated
  isrefund?: number;
  parentid?: number;
  hotelid?: number;
  orderid?: number;
  kotnumber?: string;
  suggestion?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  counterid?: number;
  posid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  servinguserid?: number;
  shiftstatusid?: number;
  status?: string;
  oldinvoiceid?: string;
  stewarduserid?: number;
}

export interface ICreatePos2OrderKot {
  isrefund?: number;
  parentid?: number;
  hotelid?: number;
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
export interface IUpdatePos2OrderKot {
  isrefund?: number;
  parentid?: number;
  hotelid?: number;
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