/**
 * CorporateDiscountValidity Model Interfaces
 * Database table: corporateDiscountValidity
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorporateDiscountValidity {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  corpid: number;  // Required
  validfrom: Date;  // Required
  validto: Date;  // Required
  seasonid: number;  // Required
  remarks: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateCorporateDiscountValidity {
  hotelid: number;
  corpid: number;
  validfrom: Date;
  validto: Date;
  seasonid: number;
  remarks: string;
  createdby?: number;
  status: string;
}

// Update interface - for entity updates (all fields optional)
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
