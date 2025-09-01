/**
 * AccountCodeMaster Model
 * Database table: accountcodemaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountCodeMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  deptid?: number;
  title?: string;
  accountcode?: string;
  accounttype?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  type?: string;
  isdefault?: number;
}

export interface ICreateAccountCodeMaster {
  hotelid?: number;
  deptid?: number;
  title?: string;
  accountcode?: string;
  accounttype?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  type?: string;
  isdefault?: number;
}
export interface IUpdateAccountCodeMaster {
  hotelid?: number;
  deptid?: number;
  title?: string;
  accountcode?: string;
  accounttype?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  type?: string;
  isdefault?: number;
}