/**
 * RmApplicableTaxes Model Interfaces
 * Database table: rmApplicableTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRmApplicableTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rmtypeid: number;  // Required
  taxid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRmApplicableTaxes {
  hotelid: number;
  rmtypeid: number;
  taxid: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRmApplicableTaxes {
  hotelid?: number;
  rmtypeid?: number;
  taxid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
