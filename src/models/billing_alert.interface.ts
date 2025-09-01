/**
 * BillingAlert Model
 * Database table: billingalert
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingAlert {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  alertdate?: Date;
  description?: string;
  emailids?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;
  updatedby?: number;
}

export interface ICreateBillingAlert {
  hotelid?: number;
  alertdate?: Date;
  description?: string;
  emailids?: string;
  status?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
}
export interface IUpdateBillingAlert {
  hotelid?: number;
  alertdate?: Date;
  description?: string;
  emailids?: string;
  status?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
}