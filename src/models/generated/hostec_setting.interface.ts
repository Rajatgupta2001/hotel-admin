/**
 * HostecSetting Model Interfaces
 * Database table: hostecSetting
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHostecSetting {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
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
  countryid: number;  // Required
  postalcode?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHostecSetting {
  hotelid: number;
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
  countryid: number;
  postalcode?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
