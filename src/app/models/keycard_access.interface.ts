/**
 * KeycardAccess Model
 * Database table: keycardaccess
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IKeycardAccess {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;
}

export interface ICreateKeycardAccess {
  hotelid?: number;
  title?: string;
  value?: string;
  updatedon?: Date;
}
export interface IUpdateKeycardAccess {
  hotelid?: number;
  title?: string;
  value?: string;
  updatedon?: Date;
}