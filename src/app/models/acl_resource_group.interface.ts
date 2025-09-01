/**
 * AclResourceGroup Model
 * Database table: aclresourcegroup
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAclResourceGroup {
  id?: number;  // Primary key - auto-generated
  parentid?: number;
  name?: string;
  workarea?: string;
  status?: Date;
  isreverserole?: number;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  extrafieldtype?: string;
}

export interface ICreateAclResourceGroup {
  parentid?: number;
  name?: string;
  workarea?: string;
  status?: Date;
  isreverserole?: number;
  createdby?: number;
  extrafieldtype?: string;
}
export interface IUpdateAclResourceGroup {
  parentid?: number;
  name?: string;
  workarea?: string;
  status?: Date;
  isreverserole?: number;
  createdby?: number;
  extrafieldtype?: string;
}