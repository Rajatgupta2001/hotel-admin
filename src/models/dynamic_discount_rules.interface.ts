/**
 * DynamicDiscountRules Model
 * Database table: dynamicdiscountrules
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDynamicDiscountRules {
  id?: number;  // Primary key - auto-generated
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
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateDynamicDiscountRules {
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