/**
 * CorporateDiscountValidity Model
 * Database table: corporatediscountvalidity
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorporateDiscountValidity {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  corpid?: number;
  validfrom?: Date;
  validto?: Date;
  seasonid?: number;
  remarks?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
}

export interface ICreateCorporateDiscountValidity {
  hotelid?: number;
  corpid?: number;
  validfrom?: Date;
  validto?: Date;
  seasonid?: number;
  remarks?: string;
  createdby?: number;
  status?: string;
}
export interface IUpdateCorporateDiscountValidity {
  hotelid?: number;
  corpid?: number;
  validfrom?: Date;
  validto?: Date;
  seasonid?: number;
  remarks?: string;
  createdby?: number;
  status?: string;
}