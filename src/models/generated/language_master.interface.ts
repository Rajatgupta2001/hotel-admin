/**
 * LanguageMaster Model Interfaces
 * Database table: languageMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILanguageMaster {
  id?: number;  // Primary key - auto-generated
  title: string;  // Required
  code: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  status: string;  // Required
  flagimage?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateLanguageMaster {
  title: string;
  code: string;
  status: string;
  flagimage?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLanguageMaster {
  title?: string;
  code?: string;
  status?: string;
  flagimage?: string;
  modifiedby?: number;
}
