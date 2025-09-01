/**
 * HotelogixLanguages Model
 * Database table: hotelogixlanguages
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelogixLanguages {
  id?: number;  // Primary key - auto-generated
  language?: string;
  shortcode?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateHotelogixLanguages {
  language?: string;
  shortcode?: string;
  status?: string;
  createdby?: number;
}
export interface IUpdateHotelogixLanguages {
  language?: string;
  shortcode?: string;
  status?: string;
  createdby?: number;
}