/**
 * AccountCodeMaster Model Interfaces
 * Database table: accountCodeMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountCodeMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  deptid: number;  // Required
  title: string;  // Required
  accountcode: string;  // Required
  accounttype: string;  // Required
  status: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  type?: string;
  isdefault?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateAccountCodeMaster {
  hotelid: number;
  deptid: number;
  title: string;
  accountcode: string;
  accounttype: string;
  status: string;
  createdby?: number;
  modifiedby?: number;
  type?: string;
  isdefault?: number;
}

// Update interface - for entity updates (all fields optional)
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
