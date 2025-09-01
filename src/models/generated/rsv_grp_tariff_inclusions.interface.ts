/**
 * RsvGrpTariffInclusions Model Interfaces
 * Database table: rsvGrpTariffInclusions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvGrpTariffInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  inclgrpid?: number;  // Default: 0
  grptarriffid?: number;
  inclid?: number;  // Default: 0
  prodid?: number;
  allocationqty?: number;  // Default: text("'1'"
  fromdate?: Date;
  todate?: Date;
  unitprice?: number;
  totalprice?: number;
  discount?: number;  // Default: text("'0.000000'"
  discounttype?: string;  // Default: text("'FV'"
  amount?: number;
  tax?: number;
  nettotal?: number;
  servcdate?: Date;  // Service date
  isprint?: number;  // Default: 0
  islocked?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  counterid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvGrpTariffInclusions {
  hotelid?: number;
  groupid?: number;
  inclgrpid?: number;
  grptarriffid?: number;
  inclid?: number;
  prodid?: number;
  allocationqty?: number;
  fromdate?: Date;
  todate?: Date;
  unitprice?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  tax?: number;
  nettotal?: number;
  isprint?: number;
  islocked?: number;
  createdby?: number;
  counterid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvGrpTariffInclusions {
  hotelid?: number;
  groupid?: number;
  inclgrpid?: number;
  grptarriffid?: number;
  inclid?: number;
  prodid?: number;
  allocationqty?: number;
  fromdate?: Date;
  todate?: Date;
  unitprice?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  tax?: number;
  nettotal?: number;
  isprint?: number;
  islocked?: number;
  createdby?: number;
  counterid?: number;
}
