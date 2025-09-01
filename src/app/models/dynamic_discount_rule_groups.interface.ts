/**
 * DynamicDiscountRuleGroups Model
 * Database table: dynamicdiscountrulegroups
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDynamicDiscountRuleGroups {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  type?: string;
  status?: string;
  isdefault?: number;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateDynamicDiscountRuleGroups {
  hotelid?: number;
  title?: string;
  type?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateDynamicDiscountRuleGroups {
  hotelid?: number;
  title?: string;
  type?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}