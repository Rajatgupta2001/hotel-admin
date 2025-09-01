/**
 * CrsSetting Model
 * Database table: crssetting
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsSetting {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
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