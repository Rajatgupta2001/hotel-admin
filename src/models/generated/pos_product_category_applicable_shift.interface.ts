/**
 * PosProductCategoryApplicableShift Model Interfaces
 * Database table: posProductCategoryApplicableShift
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProductCategoryApplicableShift {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  reftype?: string;
  shiftid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosProductCategoryApplicableShift {
  hotelid: number;
  refid: number;
  reftype?: string;
  shiftid: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProductCategoryApplicableShift {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  shiftid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
