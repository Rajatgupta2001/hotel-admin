/**
 * ImportCrop Model
 * Database table: importcrop
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IImportCrop {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  companyid?: number;
  sessionid?: string;
  rowid?: number;
  corporatename?: string;
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

export interface ICreateImportCrop {
  hotelid?: number;
  companyid?: number;
  sessionid?: string;
  rowid?: number;
  corporatename?: string;
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
export interface IUpdateImportCrop {
  hotelid?: number;
  companyid?: number;
  sessionid?: string;
  rowid?: number;
  corporatename?: string;
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