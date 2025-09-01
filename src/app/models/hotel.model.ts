import { BaseEntityWithCode, EntityId } from './base.model';

/**
 * Hotel configuration and basic information
 */
export interface Hotel extends BaseEntityWithCode {
  companyId: EntityId;
  categoryId?: EntityId;
  
  // Basic Information
  logoUrl?: string;
  website?: string;
  email: string;
  phone: string;
  
  // Address
  address: Address;
  
  // Settings
  timezone: string;
  currency: string;
  defaultLanguage: string;
  supportedLanguages: string[];
  
  // Business Settings
  checkInTime: string; // HH:MM format
  checkOutTime: string; // HH:MM format
  totalRooms: number;
  
  // Financial Settings
  taxSettings: TaxSettings;
  billingSettings: BillingSettings;
  
  // Features
  features: HotelFeatures;
  
  // Contact Information
  contactInfo: ContactInfo;
}

export interface Address {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  latitude?: number;
  longitude?: number;
}

export interface TaxSettings {
  defaultTaxInclusive: boolean;
  taxApplicableOn: 'room' | 'total' | 'both';
  defaultTaxIds: EntityId[];
  fiscalYear: {
    startMonth: number; // 1-12
    startDay: number; // 1-31
  };
}

export interface BillingSettings {
  currency: string;
  decimalPlaces: number;
  roundingMethod: 'round' | 'floor' | 'ceil';
  invoicePrefix: string;
  invoiceStartNumber: number;
}

export interface HotelFeatures {
  multiLanguage: boolean;
  nightAudit: boolean;
  pos: boolean;
  housekeeping: boolean;
  maintenance: boolean;
  crs: boolean;
  channelManager: boolean;
  reports: boolean;
}

export interface ContactInfo {
  managerName: string;
  managerEmail: string;
  managerPhone: string;
  accountingEmail?: string;
  supportEmail?: string;
  reservationEmail?: string;
}
