/**
 * CrsLanguage Model Interfaces
 * Database table: crsLanguage
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsLanguage {
  id?: string;  // Primary key - auto-generated
  apiid?: number;
  languageid?: number;
  languagecode?: string;
  status?: string;
  isdefault?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCrsLanguage {
  apiid?: number;
  languageid?: number;
  languagecode?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsLanguage {
  apiid?: number;
  languageid?: number;
  languagecode?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
