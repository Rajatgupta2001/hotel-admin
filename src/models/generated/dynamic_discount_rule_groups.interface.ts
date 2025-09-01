/**
 * DynamicDiscountRuleGroups Model Interfaces
 * Database table: dynamicDiscountRuleGroups
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDynamicDiscountRuleGroups {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  type?: string;
  status: string;  // Required
  isdefault?: number;  // Default: 0
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateDynamicDiscountRuleGroups {
  hotelid: number;
  title: string;
  type?: string;
  status: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDynamicDiscountRuleGroups {
  hotelid?: number;
  title?: string;
  type?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
