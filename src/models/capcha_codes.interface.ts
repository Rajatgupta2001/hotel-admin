/**
 * CapchaCodes Model
 * Database table: capchacodes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICapchaCodes {
  id?: number;  // Primary key - auto-generated
  sessionid?: string;
  capchacode?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateCapchaCodes {
  sessionid?: string;
  capchacode?: string;
}
export interface IUpdateCapchaCodes {
  sessionid?: string;
  capchacode?: string;
}