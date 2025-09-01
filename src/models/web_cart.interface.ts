/**
 * WebCart Model
 * Database table: webcart
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebCart {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  webrefid?: string;
  reftype?: string;
  refid?: number;
  sessionid?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateWebCart {
  hotelid?: number;
  webrefid?: string;
  reftype?: string;
  refid?: number;
  sessionid?: string;
}
export interface IUpdateWebCart {
  hotelid?: number;
  webrefid?: string;
  reftype?: string;
  refid?: number;
  sessionid?: string;
}