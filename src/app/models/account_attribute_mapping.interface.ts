/**
 * AccountAttributeMapping Model
 * Database table: accountattributemapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountAttributeMapping {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  accountcodeid?: number;
  accountattributeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAccountAttributeMapping {
  hotelid?: number;
  accountcodeid?: number;
  accountattributeid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateAccountAttributeMapping {
  hotelid?: number;
  accountcodeid?: number;
  accountattributeid?: number;
  createdby?: number;
  modifiedby?: number;
}