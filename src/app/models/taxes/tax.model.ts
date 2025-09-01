import { EntityId } from '../core/entity-id.model';
import { BaseEntityWithCode, SortableEntity } from '../core/base.model';

/**
 * Tax configuration
 */
export interface Tax extends BaseEntityWithCode, SortableEntity {
  hotelId: EntityId;

  // Basic Information
  shortName: string;
  taxNumber?: string; // Government tax registration number

  // Tax Configuration
  taxType: TaxType;
  taxCategory: TaxCategory;
  applicableOn: TaxApplicableOn;
  calculationType: TaxCalculationType;

  // Rate Information
  rate: number; // Percentage or fixed amount
  currency?: string; // Required for fixed amount taxes

  // Slab-based Tax (for tiered taxation)
  isSlabBased: boolean;
  taxSlabs?: TaxSlab[];

  // Applicability
  applicableToRoomTypes: EntityId[]; // Empty = all room types
  applicableToRatePlans: EntityId[]; // Empty = all rate plans
  exemptGuestTypes?: string[]; // Government, Senior, etc.

  // Date Range
  validFrom: Date;
  validTo?: Date;

  // Calculation Rules
  isCompound: boolean; // Applied after other taxes
  compoundSequence?: number; // Order for compound calculation
  roundingMethod: 'round' | 'floor' | 'ceil' | 'none';
  roundingPrecision: number; // Decimal places

  // Minimum & Maximum
  minimumAmount?: number;
  maximumAmount?: number;

  // Frequency
  frequency: TaxFrequency;

  // Reporting & Compliance
  reportingCode?: string;
  governmentRate?: number; // Official rate for compliance
  isRefundable: boolean;

  // Display
  displayOnInvoice: boolean;
  displayName?: string; // Different from name for invoices
  invoiceText?: string;

  // Accounting
  accountCodeId?: EntityId;
  journalPostingRules?: JournalRule[];

  // Rules & Conditions
  applicabilityRules?: TaxRule[];
}

export type TaxType =
  | 'vat'
  | 'gst'
  | 'sales-tax'
  | 'service-tax'
  | 'occupancy-tax'
  | 'city-tax'
  | 'resort-fee'
  | 'environmental-tax'
  | 'custom';

export type TaxCategory =
  | 'federal'
  | 'state'
  | 'local'
  | 'municipal'
  | 'hotel-specific';

export type TaxApplicableOn =
  | 'room-rate'
  | 'total-amount'
  | 'services'
  | 'per-person'
  | 'per-night'
  | 'per-stay'
  | 'fixed-amount';

export type TaxCalculationType =
  | 'percentage'
  | 'fixed-per-night'
  | 'fixed-per-person'
  | 'fixed-per-stay'
  | 'tiered-percentage'
  | 'tiered-fixed';

export type TaxFrequency =
  | 'per-night'
  | 'per-stay'
  | 'per-person-night'
  | 'per-person-stay'
  | 'one-time';

export interface TaxSlab {
  minAmount: number;
  maxAmount?: number; // null = no upper limit
  rate: number;
  fixedAmount?: number; // Alternative to rate
}

export interface TaxRule {
  id: EntityId;
  condition: TaxCondition;
  action: 'apply' | 'exempt' | 'modify-rate';
  modifiedRate?: number;
  description: string;
}

export interface TaxCondition {
  type:
    | 'guest-nationality'
    | 'guest-age'
    | 'stay-duration'
    | 'booking-date'
    | 'arrival-date'
    | 'room-type'
    | 'rate-plan'
    | 'total-amount'
    | 'guest-type'
    | 'payment-method';
  operator:
    | 'equals'
    | 'not-equals'
    | 'greater-than'
    | 'less-than'
    | 'in'
    | 'not-in'
    | 'between';
  value: any;
}

export interface JournalRule {
  accountType: 'revenue' | 'liability' | 'expense';
  accountCode: string;
  percentage: number; // How much of tax goes to this account
}

// Tax Group for bundling related taxes
export interface TaxGroup extends BaseEntityWithCode {
  hotelId: EntityId;
  taxIds: EntityId[];
  isDefault: boolean;
  displayName: string;
  calculationOrder: EntityId[]; // Order of tax calculation
}
