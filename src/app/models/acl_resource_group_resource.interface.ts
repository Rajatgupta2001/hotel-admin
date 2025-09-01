/**
 * AclResourceGroupResource Model
 * Database table: aclresourcegroupresource
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAclResourceGroupResource {
  id?: number;  // Primary key - auto-generated
  aclresourcegroupid?: number;
  aclresourceid?: number;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAclResourceGroupResource {
  aclresourcegroupid?: number;
  aclresourceid?: number;
}
export interface IUpdateAclResourceGroupResource {
  aclresourcegroupid?: number;
  aclresourceid?: number;
}