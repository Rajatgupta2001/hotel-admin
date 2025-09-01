/**
 * InclusionGroupsHistory Model Interfaces
 * Database table: inclusionGroupsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclusionGroupsHistory {
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
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate?: Date;
  status: string;  // Required
  refid: number;  // Required
}

// Create interface - for new entity creation
export interface ICreateInclusionGroupsHistory {
  hotelid: number;
  name: string;
  shortname: string;
  description: string;
  roomdiscount?: number;
  discounttype: string;
  totalprice?: number;
  autoupdateprice: number;
  remarks: string;
  modifiedby?: number;
  servmdate?: Date;
  status: string;
  refid: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInclusionGroupsHistory {
  hotelid?: number;
  name?: string;
  shortname?: string;
  description?: string;
  roomdiscount?: number;
  discounttype?: string;
  totalprice?: number;
  autoupdateprice?: number;
  remarks?: string;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
}
