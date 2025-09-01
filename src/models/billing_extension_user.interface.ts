/**
 * BillingExtensionUser Model
 * Database table: billingextensionuser
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingExtensionUser {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  userid?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateBillingExtensionUser {
  hotelid?: string;
  userid?: string;
}
export interface IUpdateBillingExtensionUser {
  hotelid?: string;
  userid?: string;
}