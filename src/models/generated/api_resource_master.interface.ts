/**
 * ApiResourceMaster Model Interfaces
 * Database table: apiResourceMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IApiResourceMaster {
  id?: string;  // Primary key - auto-generated
  module: string;  // Required
  actcontroller: string;  // Required
  controller: string;  // Required
  action: string;  // Required
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateApiResourceMaster {
  module: string;
  actcontroller: string;
  controller: string;
  action: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateApiResourceMaster {
  module?: string;
  actcontroller?: string;
  controller?: string;
  action?: string;
  createdby?: number;
}
