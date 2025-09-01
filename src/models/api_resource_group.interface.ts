/**
 * ApiResourceGroup Model
 * Database table: apiresourcegroup
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IApiResourceGroup {
  id?: number;  // Primary key - auto-generated
  apigroupid?: number;
  apiresourceid?: number;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateApiResourceGroup {
  apigroupid?: number;
  apiresourceid?: number;
  createdby?: number;
}
export interface IUpdateApiResourceGroup {
  apigroupid?: number;
  apiresourceid?: number;
  createdby?: number;
}