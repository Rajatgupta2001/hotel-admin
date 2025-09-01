/**
 * BillMsgs Model
 * Database table: billmsgs
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillMsgs {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  message?: string;
  message1?: string;
  body?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  billtype?: string;
  status?: string;
  publishonweb?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  enableattachment?: number;
}

export interface ICreateBillMsgs {
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