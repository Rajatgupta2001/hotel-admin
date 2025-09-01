/**
 * ApiResourceGroup Model Interfaces
 * Database table: apiResourceGroup
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IApiResourceGroup {
  id?: number;  // Primary key - auto-generated
  apigroupid?: number;  // Default: 0
  apiresourceid?: number;  // Primary key - auto-generated
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateApiResourceGroup {
  apigroupid?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateApiResourceGroup {
  apigroupid?: number;
  createdby?: number;
}
