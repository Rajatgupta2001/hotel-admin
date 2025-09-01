/**
 * SubscriptionRuleConditions Model Interfaces
 * Database table: subscriptionRuleConditions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISubscriptionRuleConditions {
  id?: number;  // Primary key - auto-generated
  subscriptionid?: number;
  attribute?: string;
  attributeoperator?: string;
  comparedvalue?: string;
  comparedvaluetype?: number;
  status?: string;
}

// Create interface - for new entity creation
export interface ICreateSubscriptionRuleConditions {
  subscriptionid?: number;
  attribute?: string;
  attributeoperator?: string;
  comparedvalue?: string;
  comparedvaluetype?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSubscriptionRuleConditions {
  subscriptionid?: number;
  attribute?: string;
  attributeoperator?: string;
  comparedvalue?: string;
  comparedvaluetype?: number;
  status?: string;
}
