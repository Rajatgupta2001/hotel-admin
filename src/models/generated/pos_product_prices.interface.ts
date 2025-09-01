/**
 * PosProductPrices Model Interfaces
 * Database table: posProductPrices
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProductPrices {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  productid: number;  // Required
  seasonattributeid?: number;  // Default: 0
  fromdate?: Date;
  todate?: Date;
  price?: number;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosProductPrices {
  hotelid: number;
  productid: number;
  seasonattributeid?: number;
  fromdate?: Date;
  todate?: Date;
  price?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProductPrices {
  hotelid?: number;
  productid?: number;
  seasonattributeid?: number;
  fromdate?: Date;
  todate?: Date;
  price?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
