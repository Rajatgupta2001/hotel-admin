/**
 * ApiKeyGroupMapping Model
 * Database table: apikeygroupmapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IApiKeyGroupMapping {
  id?: number;  // Primary key - auto-generated
  apiid?: number;
  apigroupid?: number;
  apiresourceid?: number;
  type?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateApiKeyGroupMapping {
  apiid?: number;
  apigroupid?: number;
  apiresourceid?: number;
  type?: string;
  createdby?: number;
}
export interface IUpdateApiKeyGroupMapping {
  apiid?: number;
  apigroupid?: number;
  apiresourceid?: number;
  type?: string;
  createdby?: number;
}