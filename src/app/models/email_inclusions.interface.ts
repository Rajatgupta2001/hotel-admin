/**
 * EmailInclusions Model
 * Database table: emailinclusions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IEmailInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  emailid?: number;
  inclid?: number;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateEmailInclusions {
  hotelid?: number;
  emailid?: number;
  inclid?: number;
  modifiedby?: number;
}
export interface IUpdateEmailInclusions {
  hotelid?: number;
  emailid?: number;
  inclid?: number;
  modifiedby?: number;
}