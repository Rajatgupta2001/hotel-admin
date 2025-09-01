/**
 * CompanyEventMaster Model
 * Database table: companyeventmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICompanyEventMaster {
  key?: string;
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}

export interface ICreateCompanyEventMaster {
  key?: string;
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}
export interface IUpdateCompanyEventMaster {
  key?: string;
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}