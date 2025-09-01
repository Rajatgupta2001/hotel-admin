/**
 * UserTypeResourceGroup Model Interfaces
 * Database table: userTypeResourceGroup
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserTypeResourceGroup {
  id?: number;  // Primary key - auto-generated
  compid: number;  // Required
  hotelid: number;  // Required
  refid: number;  // Required
  type: string;  // Required
  aclresourcegroupid: number;  // Required
  workareaid: number;  // Required
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  value1?: string;
}

// Create interface - for new entity creation
export interface ICreateUserTypeResourceGroup {
  compid: number;
  hotelid: number;
  refid: number;
  type: string;
  aclresourcegroupid: number;
  workareaid: number;
  createdby?: number;
  value1?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserTypeResourceGroup {
  compid?: number;
  hotelid?: number;
  refid?: number;
  type?: string;
  aclresourcegroupid?: number;
  workareaid?: number;
  createdby?: number;
  value1?: string;
}
