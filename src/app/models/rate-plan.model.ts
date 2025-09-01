import { BaseEntityWithCode, EntityId, SortableEntity } from './base.model';

/**
 * Rate Plan configuration
 */
export interface RatePlan extends BaseEntityWithCode, SortableEntity {
  hotelId: EntityId;
  
  // Basic Information
  shortName: string;
  category: RatePlanCategory;
  planType: RatePlanType;
  
  // Availability
  isActive: boolean;
  isWebBookable: boolean;
  isPublic: boolean; // Visible to public vs agent-only
  
  // Date Range
  validFrom: Date;
  validTo: Date;
  blackoutDates?: DateRange[];
  
  // Booking Restrictions
  minAdvanceBooking?: number; // days
  maxAdvanceBooking?: number; // days
  minStayDuration: number; // nights
  maxStayDuration?: number; // nights
  
  // Occupancy Rules
  minOccupancy?: number;
  maxOccupancy?: number;
  occupancyRules: OccupancyRule[];
  
  // Pricing
  baseCurrency: string;
  rateStructure: RateStructure;
  rates: RoomTypeRate[];
  
  // Inclusions & Add-ons
  inclusions: PlanInclusion[];
  addOns: PlanAddOn[];
  
  // Taxes
  taxInclusive: boolean;
  applicableTaxIds: EntityId[];
  
  // Cancellation & Modification
  cancellationPolicyId?: EntityId;
  modificationPolicyId?: EntityId;
  
  // Marketing
  marketingInfo: MarketingInfo;
  
  // Yield Management
  yieldSettings?: YieldSettings;
  
  // Channel Distribution
  channelSettings: ChannelSettings;
}

export type RatePlanCategory = 
  | 'standard' 
  | 'promotional' 
  | 'corporate' 
  | 'government' 
  | 'group' 
  | 'package' 
  | 'seasonal';

export type RatePlanType = 
  | 'room-only' 
  | 'bed-breakfast' 
  | 'half-board' 
  | 'full-board' 
  | 'all-inclusive' 
  | 'package';

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface OccupancyRule {
  occupancy: number;
  rateMultiplier: number; // 1.0 = base rate, 1.5 = 150% of base rate
  additionalPersonRate?: number;
}

export interface RateStructure {
  type: 'flat' | 'tiered' | 'seasonal' | 'dynamic';
  baseRate?: number;
  weekdayRates?: DayOfWeekRates;
  seasonalRates?: SeasonalRate[];
  lengthOfStayDiscounts?: LOSDiscount[];
}

export interface DayOfWeekRates {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

export interface SeasonalRate {
  seasonName: string;
  startDate: Date;
  endDate: Date;
  rateMultiplier: number;
  fixedRate?: number;
}

export interface LOSDiscount {
  minNights: number;
  maxNights?: number;
  discountPercentage: number;
  discountAmount?: number;
}

export interface RoomTypeRate {
  roomTypeId: EntityId;
  baseRate: number;
  currency: string;
  rateModifiers?: RateModifier[];
}

export interface RateModifier {
  type: 'early-bird' | 'last-minute' | 'extended-stay' | 'repeat-guest' | 'group';
  condition: any; // Specific to modifier type
  adjustment: {
    type: 'percentage' | 'fixed';
    value: number;
  };
}

export interface PlanInclusion {
  id: EntityId;
  type: 'meal' | 'service' | 'amenity' | 'activity' | 'transport';
  name: string;
  description?: string;
  value?: number; // Monetary value if applicable
  isOptional: boolean;
  additionalCharge?: number;
}

export interface PlanAddOn {
  id: EntityId;
  name: string;
  description?: string;
  price: number;
  currency: string;
  isOptional: boolean;
  maxQuantity?: number;
  applicableTaxIds: EntityId[];
}

export interface MarketingInfo {
  displayName?: string;
  shortDescription?: string;
  longDescription?: string;
  highlights: string[];
  images?: string[];
  badges?: string[]; // 'best-value', 'popular', 'new', etc.
}

export interface YieldSettings {
  enabled: boolean;
  minRate?: number;
  maxRate?: number;
  demandFactors?: DemandFactor[];
}

export interface DemandFactor {
  factor: 'occupancy' | 'lead-time' | 'season' | 'event' | 'day-of-week';
  threshold: number;
  adjustment: number; // percentage
}

export interface ChannelSettings {
  directBooking: boolean;
  ota: boolean;
  gds: boolean;
  channelOverrides?: ChannelOverride[];
}

export interface ChannelOverride {
  channelId: EntityId;
  rateAdjustment: number; // percentage
  isActive: boolean;
  minRate?: number;
  maxRate?: number;
}
