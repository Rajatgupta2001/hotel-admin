/**
 * RsvRmTariffRates Model Interfaces
 * Database table: rsvRmTariffRates
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmTariffRates {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid: number;  // Required
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
  onlyRoomRent?: string;
  totalRoomRent?: string;
  roomOnlyTotalPrice?: string;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  roomOnlyAmount?: string;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  xtrBedRent?: string;
  xtrbeds?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  otherDisc?: string;
}

// Create interface - for new entity creation
export interface ICreateRsvRmTariffRates {
  hotelid?: number;
  rsvid: number;
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
  onlyRoomRent?: string;
  totalRoomRent?: string;
  roomOnlyTotalPrice?: string;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  roomOnlyAmount?: string;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  xtrBedRent?: string;
  xtrbeds?: number;
  createdby?: number;
  modifiedby?: number;
  otherDisc?: string;
}

// Update interface - for entity updates (all fields optional)
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
  onlyRoomRent?: string;
  totalRoomRent?: string;
  roomOnlyTotalPrice?: string;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  roomOnlyAmount?: string;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  xtrBedRent?: string;
  xtrbeds?: number;
  createdby?: number;
  modifiedby?: number;
  otherDisc?: string;
}
