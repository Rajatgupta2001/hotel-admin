/**
 * FilesMaster Model Interfaces
 * Database table: filesMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFilesMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid: number;  // Required
  tablename: string;  // Required
  subrefid?: number;
  subreftype?: string;
  file: string;  // Required
  filetype: string;  // Required
  description?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  status: string;  // Required
  colname?: string;  // Default: ''
  caption?: string;  // Default: ''
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateFilesMaster {
  hotelid?: number;
  refid: number;
  tablename: string;
  subrefid?: number;
  subreftype?: string;
  file: string;
  filetype: string;
  description?: string;
  createdby?: number;
  status: string;
  colname?: string;
  caption?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFilesMaster {
  hotelid?: number;
  refid?: number;
  tablename?: string;
  subrefid?: number;
  subreftype?: string;
  file?: string;
  filetype?: string;
  description?: string;
  createdby?: number;
  status?: string;
  colname?: string;
  caption?: string;
  modifiedby?: number;
}
