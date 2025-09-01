/**
 * ImportTa Model
 * Database table: importta
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IImportTa {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  companyid?: number;
  sessionid?: string;
  rowid?: number;
  code?: string;
  travelagentname?: string;
  marketsegment?: string;
  gstin?: string;
  address1?: string;
  address2?: string;
  country?: string;
  state?: string;
  city?: string;
  zipcode?: string;
  firstname?: string;
  lastname?: string;
  designation?: string;
  phone?: number;
  fax?: number;
  email?: string;
  error?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;
  status?: string;
}

export interface ICreateImportTa {
  hotelid?: number;
  companyid?: number;
  sessionid?: string;
  rowid?: number;
  code?: string;
  travelagentname?: string;
  marketsegment?: string;
  gstin?: string;
  address1?: string;
  address2?: string;
  country?: string;
  state?: string;
  city?: string;
  zipcode?: string;
  firstname?: string;
  lastname?: string;
  designation?: string;
  phone?: number;
  fax?: number;
  email?: string;
  error?: string;
  updatedon?: Date;
  status?: string;
}
export interface IUpdateImportTa {
  hotelid?: number;
  companyid?: number;
  sessionid?: string;
  rowid?: number;
  code?: string;
  travelagentname?: string;
  marketsegment?: string;
  gstin?: string;
  address1?: string;
  address2?: string;
  country?: string;
  state?: string;
  city?: string;
  zipcode?: string;
  firstname?: string;
  lastname?: string;
  designation?: string;
  phone?: number;
  fax?: number;
  email?: string;
  error?: string;
  updatedon?: Date;
  status?: string;
}