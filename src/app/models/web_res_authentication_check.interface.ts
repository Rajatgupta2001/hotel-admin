/**
 * WebResAuthenticationCheck Model
 * Database table: webresauthenticationcheck
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebResAuthenticationCheck {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  sessionid?: string;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateWebResAuthenticationCheck {
  hotelid?: number;
  sessionid?: string;
}
export interface IUpdateWebResAuthenticationCheck {
  hotelid?: number;
  sessionid?: string;
}