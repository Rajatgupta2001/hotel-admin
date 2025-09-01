/**
 * DbrStaticData Model Interfaces
 * Database table: dbrStaticData
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDbrStaticData {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  type: string;  // Required
  refid: number;  // Required
  date: Date;  // Required
  ftd: number;  // Required
  nonres: number;  // Required
  res: number;  // Required
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateDbrStaticData {
  hotelid: number;
  title: string;
  type: string;
  refid: number;
  date: Date;
  ftd: number;
  nonres: number;
  res: number;
  description?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDbrStaticData {
  hotelid?: number;
  title?: string;
  type?: string;
  refid?: number;
  date?: Date;
  ftd?: number;
  nonres?: number;
  res?: number;
  description?: string;
  createdby?: number;
}
