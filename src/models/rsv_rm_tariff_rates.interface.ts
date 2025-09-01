import type { IRsvRmTariff } from './rsv_rm_tariff.interface';
import type { IReservation } from './reservations.interface';
/**
 * RsvRmTariffRates Model
 * Database table: rsvrmtariffrates
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmTariffRates {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: number;
  pkgid?: number;
  parentpkgid?: number;
  seasonvalidityid?: number;
  prntpkgvalidityid?: number;
  adult?: number;
  child?: number;
  ratecode?: number;
  inclratecode?: number;
  commratecode?: number;
  posdiscratecode?: number;
  postinclusivetax?: number;
  rateModifier?: string;
  ratemodifiertype?: string;
  fromdate?: Date;
  todate?: Date;
  unitPrice?: string;
  nights?: number;
  onlyRoomRent?: Date;
  totalRoomRent?: string;
  roomOnlyTotalPrice?: Date;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  roomOnlyAmount?: Date;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  xtrBedRent?: string;
  xtrbeds?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  otherDisc?: string;
  reservation?: IReservation;
}

export interface ICreateRsvRmTariffRates {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: number;
  pkgid?: number;
  parentpkgid?: number;
  seasonvalidityid?: number;
  prntpkgvalidityid?: number;
  adult?: number;
  child?: number;
  ratecode?: number;
  inclratecode?: number;
  commratecode?: number;
  posdiscratecode?: number;
  postinclusivetax?: number;
  rateModifier?: string;
  ratemodifiertype?: string;
  fromdate?: Date;
  todate?: Date;
  unitPrice?: string;
  nights?: number;
  onlyRoomRent?: Date;
  totalRoomRent?: string;
  roomOnlyTotalPrice?: Date;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  roomOnlyAmount?: Date;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  xtrBedRent?: string;
  xtrbeds?: number;
  createdby?: number;
  modifiedby?: number;
  otherDisc?: string;
  reservation?: IReservation;
}
export interface IUpdateRsvRmTariffRates {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: number;
  pkgid?: number;
  parentpkgid?: number;
  seasonvalidityid?: number;
  prntpkgvalidityid?: number;
  adult?: number;
  child?: number;
  ratecode?: number;
  inclratecode?: number;
  commratecode?: number;
  posdiscratecode?: number;
  postinclusivetax?: number;
  rateModifier?: string;
  ratemodifiertype?: string;
  fromdate?: Date;
  todate?: Date;
  unitPrice?: string;
  nights?: number;
  onlyRoomRent?: Date;
  totalRoomRent?: string;
  roomOnlyTotalPrice?: Date;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  roomOnlyAmount?: Date;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  xtrBedRent?: string;
  xtrbeds?: number;
  createdby?: number;
  modifiedby?: number;
  otherDisc?: string;
  reservation?: IReservation;
}