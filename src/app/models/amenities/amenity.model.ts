import { EntityId } from '../core/entity-id.model';
import { BaseEntityWithCode, SortableEntity } from '../core/base.model';

/**
 * Amenity configuration
 */
export interface Amenity extends BaseEntityWithCode, SortableEntity {
  hotelId: EntityId;

  // Basic Information
  shortName: string;
  category: AmenityCategory;
  type: AmenityType;

  // Display
  icon?: string; // Icon identifier or URL
  color?: string; // Hex color code
  images?: AmenityImage[];

  // Availability
  isActive: boolean;
  isChargeable: boolean;
  charge?: AmenityCharge;

  // Location & Access
  location: AmenityLocation;
  accessibility: AccessibilityInfo;

  // Operating Hours
  operatingHours?: OperatingHours[];

  // Capacity & Booking
  hasCapacityLimit: boolean;
  maxCapacity?: number;
  requiresReservation: boolean;
  advanceBookingRequired?: number; // days

  // Seasonal Availability
  seasonalAvailability?: SeasonalAvailability[];

  // Age & Guest Restrictions
  ageRestrictions?: AgeRestriction;
  guestTypeRestrictions?: string[]; // 'adult-only', 'family', etc.

  // Marketing & Display
  displayOnWebsite: boolean;
  displayInRoomTypes: boolean;
  marketingDescription?: string;
  features: string[]; // List of feature highlights

  // Maintenance
  lastMaintenanceDate?: Date;
  nextMaintenanceDate?: Date;
  maintenanceNotes?: string;

  // Dependencies
  prerequisiteAmenityIds?: EntityId[]; // Amenities required to access this one
  mutuallyExclusiveWith?: EntityId[]; // Cannot be selected with these amenities
}

export type AmenityCategory =
  | 'room-feature'
  | 'bathroom'
  | 'technology'
  | 'comfort'
  | 'recreation'
  | 'dining'
  | 'business'
  | 'transportation'
  | 'wellness'
  | 'safety'
  | 'accessibility'
  | 'service';

export type AmenityType =
  | 'included'
  | 'complimentary'
  | 'paid'
  | 'on-request'
  | 'premium'
  | 'seasonal';

export interface AmenityImage {
  url: string;
  caption?: string;
  isPrimary: boolean;
  sortOrder: number;
  alt: string;
}

export interface AmenityCharge {
  type: 'fixed' | 'per-hour' | 'per-day' | 'per-use' | 'per-person';
  amount: number;
  currency: string;
  taxIds?: EntityId[];

  // Variable Pricing
  variablePricing?: VariablePricing[];
}

export interface VariablePricing {
  condition:
    | 'peak-season'
    | 'weekend'
    | 'holiday'
    | 'time-of-day'
    | 'guest-type';
  multiplier: number;
  fixedAmount?: number;
  validFrom?: Date;
  validTo?: Date;
}

export interface AmenityLocation {
  type: 'in-room' | 'floor' | 'building' | 'property' | 'nearby' | 'off-site';
  building?: string;
  floor?: string | number;
  roomNumber?: string;
  area?: string; // 'lobby', 'pool area', 'garden', etc.
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  directions?: string;
  walkingDistance?: number; // in meters
  walkingTime?: number; // in minutes
}

export interface AccessibilityInfo {
  wheelchairAccessible: boolean;
  brailleSignage: boolean;
  audioAssistance: boolean;
  visualAssistance: boolean;
  mobilityAssistance: boolean;
  accessibilityNotes?: string;
}

export interface OperatingHours {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday
  openTime?: string | null; // HH:MM format, null = closed
  closeTime?: string | null; // HH:MM format
  is24Hours: boolean;
  breaks?: TimeBreak[];
  seasonalHours?: {
    validFrom: Date;
    validTo: Date;
    openTime?: string | null;
    closeTime?: string | null;
    is24Hours: boolean;
  };
}

export interface TimeBreak {
  startTime: string; // HH:MM
  endTime: string; // HH:MM
  reason: string; // 'lunch', 'maintenance', etc.
}

export interface SeasonalAvailability {
  seasonName: string;
  startDate: Date;
  endDate: Date;
  isAvailable: boolean;
  alternativeAmenityId?: EntityId; // Replacement amenity during unavailability
  reasonForUnavailability?: string;
}

export interface AgeRestriction {
  minAge?: number;
  maxAge?: number;
  requiresAdultSupervision: boolean;
  adultSupervisionAge?: number; // Age at which supervision is required
  restrictions?: string[]; // Additional restriction details
}

// Amenity Group for organizing related amenities
export interface AmenityGroup extends BaseEntityWithCode {
  hotelId: EntityId;
  amenityIds: EntityId[];
  isPackage: boolean; // If true, all amenities are bundled
  packagePrice?: number;
  packageCurrency?: string;
  displayName: string;
  marketingDescription?: string;
}
