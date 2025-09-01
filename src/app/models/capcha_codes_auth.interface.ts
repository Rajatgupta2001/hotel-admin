/**
 * CapchaCodesAuth Model
 * Database table: capchacodesauth
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICapchaCodesAuth {
  id?: number;  // Primary key - auto-generated
  sessionid?: string;
  capchacode?: string;
  fieldcode?: string;
  hotelid?: number;
  username?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateCapchaCodesAuth {
  sessionid?: string;
  capchacode?: string;
  fieldcode?: string;
  hotelid?: number;
  username?: string;
}
export interface IUpdateCapchaCodesAuth {
  sessionid?: string;
  capchacode?: string;
  fieldcode?: string;
  hotelid?: number;
  username?: string;
}