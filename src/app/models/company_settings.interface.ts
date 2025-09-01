/**
 * CompanySettings Model
 * Database table: companysettings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICompanySettings {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  languageid?: string;
  currencyid?: number;
  financialsday?: number;
  financialsmonth?: number;
  financialeday?: number;
  financialemonth?: number;
  timezone?: string;
  dateformat?: string;
  timeformat?: string;
  locale?: string;
  currencylocale?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateCompanySettings {
  compid?: number;
  languageid?: string;
  currencyid?: number;
  financialsday?: number;
  financialsmonth?: number;
  financialeday?: number;
  financialemonth?: number;
  timezone?: string;
  dateformat?: string;
  timeformat?: string;
  locale?: string;
  currencylocale?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCompanySettings {
  compid?: number;
  languageid?: string;
  currencyid?: number;
  financialsday?: number;
  financialsmonth?: number;
  financialeday?: number;
  financialemonth?: number;
  timezone?: string;
  dateformat?: string;
  timeformat?: string;
  locale?: string;
  currencylocale?: string;
  createdby?: number;
  modifiedby?: number;
}