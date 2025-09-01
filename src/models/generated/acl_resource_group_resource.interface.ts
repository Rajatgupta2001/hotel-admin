/**
 * AclResourceGroupResource Model Interfaces
 * Database table: aclResourceGroupResource
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAclResourceGroupResource {
  id?: number;  // Primary key - auto-generated
  aclresourcegroupid: number;  // Required
  aclresourceid: number;  // Required
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAclResourceGroupResource {
  aclresourcegroupid: number;
  aclresourceid: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAclResourceGroupResource {
  aclresourcegroupid?: number;
  aclresourceid?: number;
}
