/**
 * PayModesTypesStatusPos Model Interfaces
 * Database table: PayModesTypesStatusPos
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPayModesTypesStatusPos {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  paymodetitlekey?: string;
  paytypeid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePayModesTypesStatusPos {
  hotelid: number;
  posid: number;
  paymodetitlekey?: string;
  paytypeid: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePayModesTypesStatusPos {
  hotelid?: number;
  posid?: number;
  paymodetitlekey?: string;
  paytypeid?: number;
  createdby?: number;
  modifiedby?: number;
}
