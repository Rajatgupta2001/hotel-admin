/**
 * RegionMaster Model Interfaces
 * Database table: regionMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRegionMaster {
  id?: number;  // Primary key - auto-generated
  title: string;  // Required
  code: string;  // Required
  regionid: number;  // Required
  countryid: string;  // Required
  level: number;  // Required
  languageid: number;  // Required
  currencyid: string;  // Required
  timezoneid: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRegionMaster {
  title: string;
  code: string;
  regionid: number;
  countryid: string;
  level: number;
  languageid: number;
  currencyid: string;
  timezoneid: string;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRegionMaster {
  title?: string;
  code?: string;
  regionid?: number;
  countryid?: string;
  level?: number;
  languageid?: number;
  currencyid?: string;
  timezoneid?: string;
  status?: string;
  modifiedby?: number;
}
