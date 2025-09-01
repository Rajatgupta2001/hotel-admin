/**
 * SubscriptionRuleConditions Model
 * Database table: subscriptionruleconditions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISubscriptionRuleConditions {
  id?: number;  // Primary key - auto-generated
  subscriptionid?: number;
  attribute?: string;
  attributeoperator?: string;
  comparedvalue?: string;
  comparedvaluetype?: number;
  status?: string;
}

export interface ICreateSubscriptionRuleConditions {
  subscriptionid?: number;
  attribute?: string;
  attributeoperator?: string;
  comparedvalue?: string;
  comparedvaluetype?: number;
  status?: string;
}
export interface IUpdateSubscriptionRuleConditions {
  subscriptionid?: number;
  attribute?: string;
  attributeoperator?: string;
  comparedvalue?: string;
  comparedvaluetype?: number;
  status?: string;
}