/**
 * AccountManagerUserIds Model
 * Database table: accountmanageruserids
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountManagerUserIds {
  userid?: string;
  manageuserid?: number;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAccountManagerUserIds {
  userid?: string;
  manageuserid?: number;
}
export interface IUpdateAccountManagerUserIds {
  userid?: string;
  manageuserid?: number;
}