import { BaseEntityWithCode, EntityId } from './base.model';

/**
 * Hotel policies (cancellation, modification, etc.)
 */
export interface Policy extends BaseEntityWithCode {
  hotelId: EntityId;
  
  // Policy Classification
  policyType: PolicyType;
  applicability: PolicyApplicability;
  
  // Content
  policyText: LocalizedContent[];
  shortDescription: LocalizedContent[];
  
  // Rules
  rules: PolicyRule[];
  
  // Applicability Conditions
  conditions?: PolicyCondition[];
  
  // Financial Impact
  penaltyStructure?: PenaltyStructure;
  
  // Validity
  validFrom: Date;
  validTo?: Date;
  
  // Display & Marketing
  displayOnWebsite: boolean;
  displayInBooking: boolean;
  requiresAcknowledgment: boolean;
  priority: number; // For ordering policies
  
  // Related Policies
  relatedPolicyIds?: EntityId[];
  supersededPolicyId?: EntityId; // Policy this one replaces
}

export type PolicyType = 
  | 'cancellation' 
  | 'modification' 
  | 'no-show' 
  | 'early-departure' 
  | 'late-arrival'
  | 'check-in-out' 
  | 'payment' 
  | 'guest-conduct' 
  | 'children-pets'
  | 'smoking' 
  | 'damage' 
  | 'lost-key' 
  | 'group-booking'
  | 'privacy' 
  | 'terms-conditions';

export type PolicyApplicability = 
  | 'all-bookings' 
  | 'direct-bookings' 
  | 'ota-bookings' 
  | 'group-bookings'
  | 'corporate-bookings' 
  | 'specific-rate-plans' 
  | 'specific-room-types';

export interface LocalizedContent {
  languageCode: string; // ISO 639-1 (en, es, fr, etc.)
  content: string;
}

export interface PolicyRule {
  id: EntityId;
  sequence: number; // Order of rule application
  condition: RuleCondition;
  action: RuleAction;
  description: LocalizedContent[];
  isActive: boolean;
}

export interface RuleCondition {
  type: 
    | 'booking-date' 
    | 'arrival-date' 
    | 'departure-date' 
    | 'cancellation-date'
    | 'modification-date' 
    | 'stay-duration' 
    | 'advance-booking'
    | 'room-type' 
    | 'rate-plan' 
    | 'guest-type' 
    | 'booking-value'
    | 'payment-status' 
    | 'booking-source';
    
  operator: 'equals' | 'not-equals' | 'greater-than' | 'less-than' | 'between' | 'in' | 'not-in';
  value: any;
  unit?: 'days' | 'hours' | 'minutes' | 'percentage' | 'amount';
}

export interface RuleAction {
  type: 
    | 'allow' 
    | 'deny' 
    | 'charge-penalty' 
    | 'partial-refund' 
    | 'full-refund'
    | 'require-approval' 
    | 'send-notification' 
    | 'modify-terms';
    
  parameters?: ActionParameters;
}

export interface ActionParameters {
  penaltyType?: 'percentage' | 'fixed' | 'nights' | 'sliding-scale';
  penaltyValue?: number;
  refundPercentage?: number;
  approverRoles?: string[];
  notificationRecipients?: string[];
  modifiedTerms?: any;
  gracePeriod?: {
    value: number;
    unit: 'days' | 'hours' | 'minutes';
  };
}

export interface PolicyCondition {
  type: 'rate-plan' | 'room-type' | 'booking-source' | 'guest-type' | 'date-range';
  values: EntityId[] | string[] | DateRange[];
  isInclusive: boolean; // true = apply to these, false = exclude these
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface PenaltyStructure {
  type: 'tiered' | 'sliding' | 'fixed' | 'none';
  tiers?: PenaltyTier[];
  currency: string;
  
  // Minimum/Maximum Penalties
  minimumPenalty?: number;
  maximumPenalty?: number;
  
  // Calculation Base
  calculationBase: 'total-booking' | 'room-charges' | 'first-night' | 'average-night';
}

export interface PenaltyTier {
  fromDays: number; // Days before arrival/event
  toDays?: number; // null = no upper limit
  penaltyType: 'percentage' | 'fixed' | 'nights';
  penaltyValue: number;
  description: LocalizedContent[];
}

// Specialized policy types

export interface CancellationPolicy extends Policy {
  policyType: 'cancellation';
  allowFreeCancellation: boolean;
  freeCancellationPeriod?: number; // hours before arrival
  nonRefundableBookings: boolean;
  partialRefundAllowed: boolean;
}

export interface ModificationPolicy extends Policy {
  policyType: 'modification';
  allowFreeModification: boolean;
  freeModificationPeriod?: number; // hours before arrival
  modificationTypes: ModificationType[];
  maxModificationsAllowed?: number;
}

export type ModificationType = 
  | 'dates' 
  | 'room-type' 
  | 'rate-plan' 
  | 'guest-details' 
  | 'special-requests'
  | 'group-size';

export interface NoShowPolicy extends Policy {
  policyType: 'no-show';
  noShowGracePeriod: number; // hours after check-in time
  noShowPenalty: {
    type: 'first-night' | 'full-stay' | 'percentage' | 'fixed';
    value: number;
  };
  automaticCancellation: boolean;
  roomReleaseTime?: string; // HH:MM format
}

export interface PaymentPolicy extends Policy {
  policyType: 'payment';
  paymentMethods: PaymentMethod[];
  depositRequired: boolean;
  depositAmount?: {
    type: 'percentage' | 'fixed' | 'first-night';
    value: number;
  };
  paymentSchedule?: PaymentScheduleItem[];
  creditCardRequired: boolean;
  prepaymentRequired: boolean;
}

export interface PaymentMethod {
  method: 'credit-card' | 'debit-card' | 'bank-transfer' | 'cash' | 'check' | 'digital-wallet';
  isAccepted: boolean;
  additionalFee?: {
    type: 'percentage' | 'fixed';
    value: number;
  };
  restrictions?: string[];
}

export interface PaymentScheduleItem {
  dueDate: 'booking' | 'check-in' | 'check-out' | 'days-before' | 'days-after';
  dayOffset?: number; // Used with 'days-before' or 'days-after'
  amount: {
    type: 'percentage' | 'fixed' | 'remaining';
    value: number;
  };
  description: LocalizedContent[];
}
