/**
 * AclResources Model
 * Database table: aclresources
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAclResources {
  id?: number;  // Primary key - auto-generated
  module?: string;
  controller?: string;
  action?: string;
  actiontype?: string;
  description?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAclResources {
  module?: string;
  controller?: string;
  action?: string;
  actiontype?: string;
  description?: string;
}
export interface IUpdateAclResources {
  module?: string;
  controller?: string;
  action?: string;
  actiontype?: string;
  description?: string;
}