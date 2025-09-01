/**
 * AclResources Model Interfaces
 * Database table: aclResources
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAclResources {
  id?: number;  // Primary key - auto-generated
  module: string;  // Required
  controller: string;  // Required
  action: string;  // Required
  actiontype?: string;  // Default: text("'ORIGINAL'"
  description?: string;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAclResources {
  module: string;
  controller: string;
  action: string;
  actiontype?: string;
  description?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAclResources {
  module?: string;
  controller?: string;
  action?: string;
  actiontype?: string;
  description?: string;
}
