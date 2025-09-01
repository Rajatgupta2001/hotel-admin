/**
 * DynamicDiscountRules Model Interfaces
 * Database table: dynamicDiscountRules
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDynamicDiscountRules {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title?: string;
  groupid?: number;
  mnvalue?: number;
  mxvalue?: number;
  disctype?: string;  // Default: text("'PV'"
  discminvaluepv?: number;
  discmaxvaluepv?: number;
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
export interface ICreateDynamicDiscountRules {
  hotelid: number;
  title?: string;
  groupid?: number;
  mnvalue?: number;
  mxvalue?: number;
  disctype?: string;
  discminvaluepv?: number;
  discmaxvaluepv?: number;
  type?: string;
  status: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDynamicDiscountRules {
  hotelid?: number;
  title?: string;
  groupid?: number;
  mnvalue?: number;
  mxvalue?: number;
  disctype?: string;
  discminvaluepv?: number;
  discmaxvaluepv?: number;
  type?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
