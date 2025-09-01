/**
 * RsvRmTariffDailyRate Model Interfaces
 * Database table: rsvRmTariffDailyRate
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  addonPrice?: string;
  addonDiscount?: string;
  addonTax?: string;
  roomPrice?: string;
  roomFixTax?: string;
  roomPerTax?: string;
  roomTax?: string;
  inclPrice?: string;
  inclTax?: string;
  finalTax?: string;
  totalPrice?: string;
  finalAmount?: string;
  discountDetails?: any;
  dynDiscDetails?: any;
  inclDetail?: any;
  inclTaxDetails?: any;
  roomTaxDetails?: any;
}

// Create interface - for new entity creation
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
  addonPrice?: string;
  addonDiscount?: string;
  addonTax?: string;
  roomPrice?: string;
  roomFixTax?: string;
  roomPerTax?: string;
  roomTax?: string;
  inclPrice?: string;
  inclTax?: string;
  finalTax?: string;
  totalPrice?: string;
  finalAmount?: string;
  discountDetails?: any;
  dynDiscDetails?: any;
  inclDetail?: any;
  inclTaxDetails?: any;
  roomTaxDetails?: any;
}

// Update interface - for entity updates (all fields optional)
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
  addonPrice?: string;
  addonDiscount?: string;
  addonTax?: string;
  roomPrice?: string;
  roomFixTax?: string;
  roomPerTax?: string;
  roomTax?: string;
  inclPrice?: string;
  inclTax?: string;
  finalTax?: string;
  totalPrice?: string;
  finalAmount?: string;
  discountDetails?: any;
  dynDiscDetails?: any;
  inclDetail?: any;
  inclTaxDetails?: any;
  roomTaxDetails?: any;
}
