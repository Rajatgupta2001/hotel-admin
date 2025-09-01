/**
 * CrsSetting Model Interfaces
 * Database table: crsSetting
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsSetting {
  id?: number;  // Primary key - auto-generated
  apiid?: number;
  webheader?: string;
  webfooter?: string;
  bookbycc?: number;  // Default: 0
  bookbycq?: number;  // Default: 0
  bookbycqbt?: number;  // Default: 0
  bookbyfax?: number;  // Default: 0
  minnonight?: number;  // Default: text("'1'"
  maxnonight?: number;
  webtc?: string;
  enbserver?: string;
  redirecturl?: string;
  webemails?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  maxbookingallowed?: number;
  maxsearchperson?: number;  // Default: 0
  addonpopup?: number;  // Default: text("'1'"
  preferencenote?: string;
  stepcompleted?: number;  // Default: 0
  conversionrate?: string;  // Default: 'A'
  conversionmargin?: number;
  crsdecimalplace?: number;
  ccins?: string;
  webserverdomain?: string;
}

// Create interface - for new entity creation
export interface ICreateCrsSetting {
  apiid?: number;
  webheader?: string;
  webfooter?: string;
  bookbycc?: number;
  bookbycq?: number;
  bookbycqbt?: number;
  bookbyfax?: number;
  minnonight?: number;
  maxnonight?: number;
  webtc?: string;
  enbserver?: string;
  redirecturl?: string;
  webemails?: string;
  createdby?: number;
  modifiedby?: number;
  maxbookingallowed?: number;
  maxsearchperson?: number;
  addonpopup?: number;
  preferencenote?: string;
  stepcompleted?: number;
  conversionrate?: string;
  conversionmargin?: number;
  crsdecimalplace?: number;
  ccins?: string;
  webserverdomain?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsSetting {
  apiid?: number;
  webheader?: string;
  webfooter?: string;
  bookbycc?: number;
  bookbycq?: number;
  bookbycqbt?: number;
  bookbyfax?: number;
  minnonight?: number;
  maxnonight?: number;
  webtc?: string;
  enbserver?: string;
  redirecturl?: string;
  webemails?: string;
  createdby?: number;
  modifiedby?: number;
  maxbookingallowed?: number;
  maxsearchperson?: number;
  addonpopup?: number;
  preferencenote?: string;
  stepcompleted?: number;
  conversionrate?: string;
  conversionmargin?: number;
  crsdecimalplace?: number;
  ccins?: string;
  webserverdomain?: string;
}
