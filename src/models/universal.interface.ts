/**
 * Universal Model
 * Database table: universal
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUniversal {
  id?: string;  // Primary key - auto-generated
  name?: string;
  val?: string;
  created: Date;  // Required
  updated: Date;  // Required
}

export interface ICreateUniversal {
  name?: string;
  val?: string;
  created: Date;
  updated: Date;
}
export interface IUpdateUniversal {
  name?: string;
  val?: string;
  created?: Date;
  updated?: Date;
}