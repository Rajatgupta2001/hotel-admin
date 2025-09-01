/**
 * BillingCustomer Model
 * Database table: billingcustomer
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingCustomer {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  extrefid?: number;
  refid?: number;
  reftype?: string;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;
  updatedby?: number;
  isgroupbillingcard?: number;
}

export interface ICreateBillingCustomer {
  hotelid?: number;
  extrefid?: number;
  refid?: number;
  reftype?: string;
  status?: Date;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
  isgroupbillingcard?: number;
}
export interface IUpdateBillingCustomer {
  hotelid?: number;
  extrefid?: number;
  refid?: number;
  reftype?: string;
  status?: Date;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
  isgroupbillingcard?: number;
}