/**
 * PosProductsHistory Model Interfaces
 * Database table: posProductsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProductsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  featuredproduct?: number;  // Default: 0
  pospointid: number;  // Required
  poscatid: number;  // Required
  prodcode: string;  // Required
  prodname: string;  // Required
  prodimage?: string;
  description: string;  // Required
  unit: string;  // Required
  price?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  refid?: number;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePosProductsHistory {
  hotelid: number;
  featuredproduct?: number;
  pospointid: number;
  poscatid: number;
  prodcode: string;
  prodname: string;
  prodimage?: string;
  description: string;
  unit: string;
  price?: number;
  modifiedby?: number;
  status: string;
  refid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProductsHistory {
  hotelid?: number;
  featuredproduct?: number;
  pospointid?: number;
  poscatid?: number;
  prodcode?: string;
  prodname?: string;
  prodimage?: string;
  description?: string;
  unit?: string;
  price?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
}
