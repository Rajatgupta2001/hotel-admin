/**
 * PayModesStatusPos Model Interfaces
 * Database table: PayModesStatusPos
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPayModesStatusPos {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  titlekey?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePayModesStatusPos {
  hotelid: number;
  posid: number;
  titlekey?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePayModesStatusPos {
  hotelid?: number;
  posid?: number;
  titlekey?: string;
  createdby?: number;
  modifiedby?: number;
}
