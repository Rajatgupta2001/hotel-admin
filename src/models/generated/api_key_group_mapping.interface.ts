/**
 * ApiKeyGroupMapping Model Interfaces
 * Database table: apiKeyGroupMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IApiKeyGroupMapping {
  id?: number;  // Primary key - auto-generated
  apiid: number;  // Required
  apigroupid?: number;
  apiresourceid?: number;
  type?: string;  // Default: text("'GRP'"
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateApiKeyGroupMapping {
  apiid: number;
  apigroupid?: number;
  apiresourceid?: number;
  type?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateApiKeyGroupMapping {
  apiid?: number;
  apigroupid?: number;
  apiresourceid?: number;
  type?: string;
  createdby?: number;
}
