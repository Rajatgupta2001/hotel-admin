/**
 * UserTypeResourceGroup Model
 * Database table: usertyperesourcegroup
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserTypeResourceGroup {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  refid?: number;
  type?: string;
  aclresourcegroupid?: number;
  workareaid?: number;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  value1?: string;
}

export interface ICreateUserTypeResourceGroup {
  compid?: number;
  hotelid?: number;
  refid?: number;
  type?: string;
  aclresourcegroupid?: number;
  workareaid?: number;
  createdby?: number;
  value1?: string;
}
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