/**
 * RsvRmApplicableDiscounts Model
 * Database table: rsvrmapplicablediscounts
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmApplicableDiscounts {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: string;
  inclgrpid?: number;
  pkgid?: number;
  discounton?: string;
  discount?: number;
  discounttype?: string;
  posid?: number;
  fromdate?: Date;
  todate?: Date;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateRsvRmApplicableDiscounts {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: string;
  inclgrpid?: number;
  pkgid?: number;
  discounton?: string;
  discount?: number;
  discounttype?: string;
  posid?: number;
  fromdate?: Date;
  todate?: Date;
}
export interface IUpdateRsvRmApplicableDiscounts {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: string;
  inclgrpid?: number;
  pkgid?: number;
  discounton?: string;
  discount?: number;
  discounttype?: string;
  posid?: number;
  fromdate?: Date;
  todate?: Date;
}