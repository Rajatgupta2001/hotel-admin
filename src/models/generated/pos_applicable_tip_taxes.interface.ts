/**
 * PosApplicableTipTaxes Model Interfaces
 * Database table: posApplicableTipTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosApplicableTipTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  taxid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosApplicableTipTaxes {
  hotelid: number;
  posid: number;
  taxid: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosApplicableTipTaxes {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
