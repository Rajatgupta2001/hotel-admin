/**
 * CancellationCharges Model Interfaces
 * Database table: cancellationCharges
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICancellationCharges {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title?: string;
  policydesc?: string;
  cancelationbforduration?: number;
  durationtype?: string;
  charge?: number;
  chargetype?: string;
  isdefault?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCancellationCharges {
  hotelid: number;
  title?: string;
  policydesc?: string;
  cancelationbforduration?: number;
  durationtype?: string;
  charge?: number;
  chargetype?: string;
  isdefault?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCancellationCharges {
  hotelid?: number;
  title?: string;
  policydesc?: string;
  cancelationbforduration?: number;
  durationtype?: string;
  charge?: number;
  chargetype?: string;
  isdefault?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
