/**
 * InclusionGroupsHistory Model
 * Database table: inclusiongroupshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInclusionGroupsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  name?: string;
  shortname?: string;
  description?: string;
  roomdiscount?: number;
  discounttype?: string;
  totalprice?: number;
  autoupdateprice?: number;
  remarks?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate?: Date;
  status?: string;
  refid?: number;
}

export interface ICreateInclusionGroupsHistory {
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