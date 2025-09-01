/**
 * ApiGroupMaster Model
 * Database table: apigroupmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IApiGroupMaster {
  id?: string;  // Primary key - auto-generated
  name?: string;
  type?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  status?: Date;
}

export interface ICreateApiGroupMaster {
  name?: string;
  type?: string;
  createdby?: number;
  status?: Date;
}
export interface IUpdateApiGroupMaster {
  name?: string;
  type?: string;
  createdby?: number;
  status?: Date;
}