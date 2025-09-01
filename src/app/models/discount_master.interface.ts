/**
 * DiscountMaster Model
 * Database table: discountmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDiscountMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  amount?: number;
  amounttype?: string;
  requirementid?: number;
  publishonweb?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateDiscountMaster {
  hotelid?: number;
  title?: string;
  description?: string;
  amount?: number;
  amounttype?: string;
  requirementid?: number;
  publishonweb?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateDiscountMaster {
  hotelid?: number;
  title?: string;
  description?: string;
  amount?: number;
  amounttype?: string;
  requirementid?: number;
  publishonweb?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}