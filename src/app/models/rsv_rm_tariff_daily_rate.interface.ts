import { IReservation } from './reservations.interface';
/**
 * RsvRmTariffDailyRate Model
 * Database table: rsvrmtariffdailyrate
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmTariffDailyRate {
  id?: number;  // Primary key - auto-generated
  hotelId?: number;
  rsvId?: number;
  rsvTariffId?: number;
  date?: Date;
  roomTypeId?: number;
  rateId?: number;
  validityId?: number;
  pkgName?: string;
  refCode?: string;
  inclRefCode?: string;
  prorated?: number;
  taxInclusive?: number;
  adult?: number;
  adultPrice?: string;
  child?: number;
  childPrice?: string;
  bedPrice?: string;
  commissionable?: number;
  addonPrice?: Date;
  addonDiscount?: Date;
  addonTax?: Date;
  roomPrice?: string;
  roomFixTax?: string;
  roomPerTax?: string;
  roomTax?: string;
  inclPrice?: string;
  inclTax?: string;
  finalTax?: string;
  totalPrice?: string;
  finalAmount?: string;
  discountDetails?: string;
  dynDiscDetails?: string;
  inclDetail?: string;
  inclTaxDetails?: string;
  roomTaxDetails?: string;
  reservation?: IReservation;
}

export interface ICreateRsvRmTariffDailyRate {
  hotelId?: number;
  rsvId?: number;
  rsvTariffId?: number;
  date?: Date;
  roomTypeId?: number;
  rateId?: number;
  validityId?: number;
  pkgName?: string;
  refCode?: string;
  inclRefCode?: string;
  prorated?: number;
  taxInclusive?: number;
  adult?: number;
  adultPrice?: string;
  child?: number;
  childPrice?: string;
  bedPrice?: string;
  commissionable?: number;
  addonPrice?: Date;
  addonDiscount?: Date;
  addonTax?: Date;
  roomPrice?: string;
  roomFixTax?: string;
  roomPerTax?: string;
  roomTax?: string;
  inclPrice?: string;
  inclTax?: string;
  finalTax?: string;
  totalPrice?: string;
  finalAmount?: string;
  discountDetails?: string;
  dynDiscDetails?: string;
  inclDetail?: string;
  inclTaxDetails?: string;
  roomTaxDetails?: string;
  reservation?: IReservation;
}
export interface IUpdateRsvRmTariffDailyRate {
  hotelId?: number;
  rsvId?: number;
  rsvTariffId?: number;
  date?: Date;
  roomTypeId?: number;
  rateId?: number;
  validityId?: number;
  pkgName?: string;
  refCode?: string;
  inclRefCode?: string;
  prorated?: number;
  taxInclusive?: number;
  adult?: number;
  adultPrice?: string;
  child?: number;
  childPrice?: string;
  bedPrice?: string;
  commissionable?: number;
  addonPrice?: Date;
  addonDiscount?: Date;
  addonTax?: Date;
  roomPrice?: string;
  roomFixTax?: string;
  roomPerTax?: string;
  roomTax?: string;
  inclPrice?: string;
  inclTax?: string;
  finalTax?: string;
  totalPrice?: string;
  finalAmount?: string;
  discountDetails?: string;
  dynDiscDetails?: string;
  inclDetail?: string;
  inclTaxDetails?: string;
  roomTaxDetails?: string;
  reservation?: IReservation;
}