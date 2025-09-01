/**
 * ContactMaster Model
 * Database table: contactmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IContactMaster {
  id?: number;  // Primary key - auto-generated
  title?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateContactMaster {
  title?: string;
  description?: string;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateContactMaster {
  title?: string;
  description?: string;
  status?: string;
  modifiedby?: number;
}