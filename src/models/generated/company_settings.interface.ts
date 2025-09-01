/**
 * CompanySettings Model Interfaces
 * Database table: companySettings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
