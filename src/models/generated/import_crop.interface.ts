/**
 * ImportCrop Model Interfaces
 * Database table: importCrop
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IImportCrop {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  companyid?: number;
  sessionid: string;  // Required
  rowid: number;  // Required
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
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
  status?: string;  // Default: text("'PENDING'"
}

// Create interface - for new entity creation
export interface ICreateImportCrop {
  hotelid?: number;
  companyid?: number;
  sessionid: string;
  rowid: number;
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

// Update interface - for entity updates (all fields optional)
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
