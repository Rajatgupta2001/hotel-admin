/**
 * InclusionGroups Model Interfaces
 * Database table: inclusionGroups
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclusionGroups {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  name: string;  // Required
  shortname: string;  // Required
  description: string;  // Required
  roomdiscount?: number;
  discounttype: string;  // Required
  totalprice?: number;
  autoupdateprice: number;  // Required
  remarks: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateInclusionGroups {
  hotelid: number;
  name: string;
  shortname: string;
  description: string;
  roomdiscount?: number;
  discounttype: string;
  totalprice?: number;
  autoupdateprice: number;
  remarks: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInclusionGroups {
  hotelid?: number;
  name?: string;
  shortname?: string;
  description?: string;
  roomdiscount?: number;
  discounttype?: string;
  totalprice?: number;
  autoupdateprice?: number;
  remarks?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
