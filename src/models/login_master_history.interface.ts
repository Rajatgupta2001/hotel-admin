/**
 * LoginMasterHistory Model
 * Database table: loginmasterhistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILoginMasterHistory {
  id?: number;  // Primary key - auto-generated
  loginid?: number;
  password?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateLoginMasterHistory {
  loginid?: number;
  password?: string;
  createdby?: number;
}
export interface IUpdateLoginMasterHistory {
  loginid?: number;
  password?: string;
  createdby?: number;
}