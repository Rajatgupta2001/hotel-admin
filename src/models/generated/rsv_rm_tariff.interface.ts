/**
 * RsvRmTariff Model Interfaces
 * Database table: rsvRmTariff
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmTariff {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid: number;  // Required
  rsvrmid?: number;
  title?: string;
  roomtype: string;  // Required
  fromdate: Date;  // Required
  todate: Date;  // Required
  pkgid?: number;  // Default: 0
  isstandard?: number;  // Default: 1
  unitPrice?: string;
  nights?: number;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  status?: string;  // Default: 'A'
  islocked?: number;
  counterid?: number;
  temprsvrmtariffid?: number;
  othCurrPkgConversionRate?: string;
  otherDisc?: string;
  iscomplementary?: number;
  otherdata?: string;
  discreasonid?: number;
  discreasondesc?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  modifiedby?: string;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateRsvRmTariff {
  hotelid: number;
  rsvid: number;
  rsvrmid?: number;
  title?: string;
  roomtype: string;
  fromdate: Date;
  todate: Date;
  pkgid?: number;
  isstandard?: number;
  unitPrice?: string;
  nights?: number;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  status?: string;
  islocked?: number;
  counterid?: number;
  temprsvrmtariffid?: number;
  othCurrPkgConversionRate?: string;
  otherDisc?: string;
  iscomplementary?: number;
  otherdata?: string;
  discreasonid?: number;
  discreasondesc?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  createdby?: string;
  modifiedby?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRmTariff {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  title?: string;
  roomtype?: string;
  fromdate?: Date;
  todate?: Date;
  pkgid?: number;
  isstandard?: number;
  unitPrice?: string;
  nights?: number;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  status?: string;
  islocked?: number;
  counterid?: number;
  temprsvrmtariffid?: number;
  othCurrPkgConversionRate?: string;
  otherDisc?: string;
  iscomplementary?: number;
  otherdata?: string;
  discreasonid?: number;
  discreasondesc?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  createdby?: string;
  modifiedby?: string;
}
