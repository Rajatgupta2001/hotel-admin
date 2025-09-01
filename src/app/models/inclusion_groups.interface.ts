/**
 * InclusionGroups Model
 * Database table: inclusiongroups
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInclusionGroups {
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateInclusionGroups {
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