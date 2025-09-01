import { EntityId } from '../core/entity-id.model';
import { BaseEntityWithCode, SortableEntity } from '../core/base.model';

/**
 * Room Type configuration
 */
export interface RoomType extends BaseEntityWithCode, SortableEntity {
  hotelId: EntityId;

  // Basic Information
  acronym: string; // Short code like 'SGL', 'DBL'
  maxOccupancy: number;
  standardOccupancy: number;
  maxAdults: number;
  maxChildren: number;

  // Room Configuration
  totalRooms: number;
  availableRooms?: number; // Calculated field
  bedConfiguration: BedConfiguration;

  // Pricing & Booking
  baseRate?: number;
  minWebRate?: number;
  maxWebRate?: number;
  isWebBookable: boolean;
  minAdvanceBooking?: number; // days
  maxAdvanceBooking?: number; // days

  // Overbooking
  allowOverbooking: boolean;
  overbookingLimit?: number;
  overbookingType: 'percentage' | 'fixed';

  // Features & Amenities
  amenityIds: EntityId[];
  features: RoomFeatures;

  // Additional Settings
  isGenderRestricted: boolean;
  allowedGender?: 'male' | 'female';
  smokingPolicy: 'smoking' | 'non-smoking' | 'both';

  // Images
  images: RoomImage[];

  // Tax & Accounting
  taxApplicableOn: 'room' | 'occupancy' | 'both';
  accountCodeId?: EntityId;

  // Display & Marketing
  displayOnWebsite: boolean;
  marketingDescription?: string;
  shortDescription?: string;
}

export interface BedConfiguration {
  singleBeds: number;
  doubleBeds: number;
  queenBeds: number;
  kingBeds: number;
  sofaBeds: number;
  extraBedAllowed: boolean;
  maxExtraBeds: number;
}

export interface RoomFeatures {
  airConditioning: boolean;
  heating: boolean;
  wifi: boolean;
  tv: boolean;
  minibar: boolean;
  safe: boolean;
  balcony: boolean;
  kitchenette: boolean;
  livingArea: boolean;
  workspace: boolean;
  accessibility: boolean;
  petFriendly: boolean;
}

export interface RoomImage {
  url: string;
  caption?: string;
  isPrimary: boolean;
  sortOrder: number;
  alt: string;
}
