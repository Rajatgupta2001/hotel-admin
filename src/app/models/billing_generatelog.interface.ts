/**
 * BillingGeneratelog Model
 * Database table: billinggeneratelog
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingGeneratelog {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingmonth?: string;
  billingtype?: number;
  status?: string;
  faileddescription?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  updatedon?: Date;
}

export interface ICreateBillingGeneratelog {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingmonth?: string;
  billingtype?: number;
  status?: string;
  faileddescription?: string;
  createdby?: number;
  updatedon?: Date;
}
export interface IUpdateBillingGeneratelog {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingmonth?: string;
  billingtype?: number;
  status?: string;
  faileddescription?: string;
  createdby?: number;
  updatedon?: Date;
}