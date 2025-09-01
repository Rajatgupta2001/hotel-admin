/**
 * RsvGrpTariff Model
 * Database table: rsvgrptariff
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvGrpTariff {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  title?: string;
  roomtype?: string;
  fromdate?: Date;
  todate?: Date;
  pkgid?: number;
  isstandard?: number;
  unitprice?: number;
  nights?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  tax?: number;
  nettotal?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;
}

export interface ICreateRsvGrpTariff {
  hotelid?: number;
  groupid?: number;
  title?: string;
  roomtype?: string;
  fromdate?: Date;
  todate?: Date;
  pkgid?: number;
  isstandard?: number;
  unitprice?: number;
  nights?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  tax?: number;
  nettotal?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  counterid?: number;
}
export interface IUpdateRsvGrpTariff {
  hotelid?: number;
  groupid?: number;
  title?: string;
  roomtype?: string;
  fromdate?: Date;
  todate?: Date;
  pkgid?: number;
  isstandard?: number;
  unitprice?: number;
  nights?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  tax?: number;
  nettotal?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  counterid?: number;
}