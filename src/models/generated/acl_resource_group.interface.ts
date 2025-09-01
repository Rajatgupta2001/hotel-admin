/**
 * AclResourceGroup Model Interfaces
 * Database table: aclResourceGroup
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAclResourceGroup {
  id?: number;  // Primary key - auto-generated
  parentid?: number;  // Primary key - auto-generated
  name: string;  // Required
  workarea: string;  // Required
  status?: string;  // Default: 'A'
  isreverserole?: number;  // Default: 0
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  extrafieldtype?: string;
}

// Create interface - for new entity creation
export interface ICreateAclResourceGroup {
  name: string;
  workarea: string;
  status?: string;
  isreverserole?: number;
  createdby?: number;
  extrafieldtype?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAclResourceGroup {
  name?: string;
  workarea?: string;
  status?: string;
  isreverserole?: number;
  createdby?: number;
  extrafieldtype?: string;
}
