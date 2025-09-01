/**
 * OtherRoomChargeTaxes Model Interfaces
 * Database table: otherRoomChargeTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IOtherRoomChargeTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  taxid: number;  // Required
  isactive: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateOtherRoomChargeTaxes {
  hotelid: number;
  taxid: number;
  isactive: string;
  createdby?: number;
  modifiedby?: number;
  status: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateOtherRoomChargeTaxes {
  hotelid?: number;
  taxid?: number;
  isactive?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
