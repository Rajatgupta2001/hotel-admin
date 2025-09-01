/**
 * BillMsgs Model Interfaces
 * Database table: billMsgs
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillMsgs {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  message: string;  // Required
  message1?: string;
  body?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  billtype?: string;
  status: string;  // Required
  publishonweb?: number;  // Default: text("'1'"
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  enableattachment?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateBillMsgs {
  hotelid: number;
  title: string;
  message: string;
  message1?: string;
  body?: string;
  createdby?: number;
  billtype?: string;
  status: string;
  publishonweb?: number;
  modifiedby?: number;
  enableattachment?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillMsgs {
  hotelid?: number;
  title?: string;
  message?: string;
  message1?: string;
  body?: string;
  createdby?: number;
  billtype?: string;
  status?: string;
  publishonweb?: number;
  modifiedby?: number;
  enableattachment?: number;
}
