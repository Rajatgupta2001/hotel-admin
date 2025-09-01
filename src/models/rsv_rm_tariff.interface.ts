import type { IReservation } from './reservations.interface';
/**
 * RsvRmTariff Model
 * Database table: rsvrmtariff
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmTariff {
  id?: number;  // Primary key - auto-generated
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
  status?: Date;
  islocked?: number;
  counterid?: number;
  temprsvrmtariffid?: number;
  othCurrPkgConversionRate?: Date;
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
  servcdate?: Date;  // Service date - auto-populated
  reservation?: IReservation;
}

export interface ICreateRsvRmTariff {
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
  status?: Date;
  islocked?: number;
  counterid?: number;
  temprsvrmtariffid?: number;
  othCurrPkgConversionRate?: Date;
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
  reservation?: IReservation;
}
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
  status?: Date;
  islocked?: number;
  counterid?: number;
  temprsvrmtariffid?: number;
  othCurrPkgConversionRate?: Date;
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
  reservation?: IReservation;
}