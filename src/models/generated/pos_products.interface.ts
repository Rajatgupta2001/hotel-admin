/**
 * PosProducts Model Interfaces
 * Database table: posProducts
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProducts {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  featuredproduct?: number;  // Default: 0
  pospointid: number;  // Required
  poscatid: number;  // Required
  kotid?: number;
  prodcode: string;  // Required
  prodname: string;  // Required
  prodimage?: string;
  description: string;  // Required
  unit: string;  // Required
  price?: number;
  ncprice?: number;
  shiftsused?: number;  // Default: text("'1'"
  createdon?: Date;  // Auto-populated timestamp
  producttype?: number;  // Default: 0
  stopsell?: number;  // Default: 0
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  accountcodeid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreatePosProducts {
  hotelid: number;
  featuredproduct?: number;
  pospointid: number;
  poscatid: number;
  kotid?: number;
  prodcode: string;
  prodname: string;
  prodimage?: string;
  description: string;
  unit: string;
  price?: number;
  ncprice?: number;
  shiftsused?: number;
  producttype?: number;
  stopsell?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  accountcodeid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProducts {
  hotelid?: number;
  featuredproduct?: number;
  pospointid?: number;
  poscatid?: number;
  kotid?: number;
  prodcode?: string;
  prodname?: string;
  prodimage?: string;
  description?: string;
  unit?: string;
  price?: number;
  ncprice?: number;
  shiftsused?: number;
  producttype?: number;
  stopsell?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}
