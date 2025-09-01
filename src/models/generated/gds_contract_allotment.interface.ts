/**
 * GdsContractAllotment Model Interfaces
 * Database table: gdsContractAllotment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsContractAllotment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;  // Default: 0
  refid?: number;
  reftype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGdsContractAllotment {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  refid?: number;
  reftype?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsContractAllotment {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  refid?: number;
  reftype?: string;
  createdby?: number;
  modifiedby?: number;
}
