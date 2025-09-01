/**
 * RmApplicableTaxesHistory Model Interfaces
 * Database table: rmApplicableTaxesHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRmApplicableTaxesHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rmtypeid: number;  // Required
  taxid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate: Date;  // Required
  status: string;  // Required
  refid: number;  // Required
  modificationtype: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateRmApplicableTaxesHistory {
  hotelid: number;
  rmtypeid: number;
  taxid: number;
  createdby?: number;
  modifiedby?: number;
  servmdate: Date;
  status: string;
  refid: number;
  modificationtype: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRmApplicableTaxesHistory {
  hotelid?: number;
  rmtypeid?: number;
  taxid?: number;
  createdby?: number;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
  modificationtype?: string;
}
