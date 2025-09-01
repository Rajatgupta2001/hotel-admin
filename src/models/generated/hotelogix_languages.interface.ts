/**
 * HotelogixLanguages Model Interfaces
 * Database table: hotelogixLanguages
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelogixLanguages {
  id?: number;  // Primary key - auto-generated
  language?: string;
  shortcode?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelogixLanguages {
  language?: string;
  shortcode?: string;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelogixLanguages {
  language?: string;
  shortcode?: string;
  status?: string;
  createdby?: number;
}
