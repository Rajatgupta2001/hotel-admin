/**
 * RsvGrpTariffInclusions Model
 * Database table: rsvgrptariffinclusions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvGrpTariffInclusions {
  id?: number;  // Primary key - auto-generated
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
  servcdate?: Date;  // Service date - auto-populated
  isprint?: number;
  islocked?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  counterid?: number;
}

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