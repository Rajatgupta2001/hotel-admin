/**
 * RsvRmApplicableDiscounts Model Interfaces
 * Database table: rsvRmApplicableDiscounts
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmApplicableDiscounts {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: string;
  inclgrpid?: number;  // Default: 0
  pkgid?: number;  // Default: 0
  discounton?: string;  // Default: text("'POS'"
  discount?: number;  // Default: text("'0.000000'"
  discounttype?: string;  // Default: text("'FV'"
  posid?: number;
  fromdate?: Date;
  todate?: Date;
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
