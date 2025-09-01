/**
 * PayModes Model
 * Database table: paymodes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPayModes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  titlekey?: string;
  defaulttitle?: string;
  title?: string;
  viewmode?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePayModes {
  hotelid?: number;
  titlekey?: string;
  defaulttitle?: string;
  title?: string;
  viewmode?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdatePayModes {
  hotelid?: number;
  titlekey?: string;
  defaulttitle?: string;
  title?: string;
  viewmode?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}