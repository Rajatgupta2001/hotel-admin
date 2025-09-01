/**
 * RsvGrpTariff Model Interfaces
 * Database table: rsvGrpTariff
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvGrpTariff {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  groupid?: number;
  title?: string;
  roomtype: string;  // Required
  fromdate: Date;  // Required
  todate: Date;  // Required
  pkgid: number;  // Required
  isstandard?: number;  // Default: 0
  unitprice?: number;
  nights?: number;  // Default: 0
  totalprice?: number;
  discount?: number;  // Default: text("'0.000000'"
  discounttype?: string;  // Default: text("'FV'"
  amount?: number;
  tax?: number;
  nettotal?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvGrpTariff {
  hotelid: number;
  groupid?: number;
  title?: string;
  roomtype: string;
  fromdate: Date;
  todate: Date;
  pkgid: number;
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
  status: string;
  modifiedby?: number;
  counterid?: number;
}

// Update interface - for entity updates (all fields optional)
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
