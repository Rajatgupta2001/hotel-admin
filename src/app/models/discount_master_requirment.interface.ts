/**
 * DiscountMasterRequirment Model
 * Database table: discountmasterrequirment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDiscountMasterRequirment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  discountmasterid?: number;
  discountrequirmentid?: number;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateDiscountMasterRequirment {
  hotelid?: number;
  discountmasterid?: number;
  discountrequirmentid?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateDiscountMasterRequirment {
  hotelid?: number;
  discountmasterid?: number;
  discountrequirmentid?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}