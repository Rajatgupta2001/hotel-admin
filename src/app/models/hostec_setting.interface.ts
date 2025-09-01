/**
 * HostecSetting Model
 * Database table: hostecsetting
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHostecSetting {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  issuername?: string;
  rfc?: string;
  branchoffice?: string;
  expeditionplace?: string;
  taxregime?: string;
  address?: string;
  exteriorno?: string;
  interiorno?: string;
  colony?: string;
  location?: string;
  additionalnote?: string;
  city?: string;
  state?: string;
  countryid?: number;
  postalcode?: string;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHostecSetting {
  hotelid?: number;
  issuername?: string;
  rfc?: string;
  branchoffice?: string;
  expeditionplace?: string;
  taxregime?: string;
  address?: string;
  exteriorno?: string;
  interiorno?: string;
  colony?: string;
  location?: string;
  additionalnote?: string;
  city?: string;
  state?: string;
  countryid?: number;
  postalcode?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateHostecSetting {
  hotelid?: number;
  issuername?: string;
  rfc?: string;
  branchoffice?: string;
  expeditionplace?: string;
  taxregime?: string;
  address?: string;
  exteriorno?: string;
  interiorno?: string;
  colony?: string;
  location?: string;
  additionalnote?: string;
  city?: string;
  state?: string;
  countryid?: number;
  postalcode?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}