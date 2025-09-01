/**
 * PosCategory Model Interfaces
 * Database table: posCategory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosCategory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pospointid: number;  // Required
  catname: string;  // Required
  shortname?: string;
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  poscatparentid?: number;  // Default: 0
  accountcodeid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreatePosCategory {
  hotelid: number;
  pospointid: number;
  catname: string;
  shortname?: string;
  description: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  poscatparentid?: number;
  accountcodeid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosCategory {
  hotelid?: number;
  pospointid?: number;
  catname?: string;
  shortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  poscatparentid?: number;
  accountcodeid?: number;
}
