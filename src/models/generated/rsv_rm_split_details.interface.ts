/**
 * RsvRmSplitDetails Model Interfaces
 * Database table: rsvRmSplitDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmSplitDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  rsvid?: number;
  rsvrmid: number;  // Required
  fromroom: number;  // Required
  toroom: number;  // Required
  rmtypeid?: number;
  mroomid?: number;  // Default: 0
  mrmtypeid?: number;  // Default: 0
  fromdate: Date;  // Required
  fromtime?: string;
  todate: Date;  // Required
  totime?: string;
  splittedon: Date;  // Required
  reason: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;  // Default: 0
  rmrsvstatus?: string;  // Default: 'RESERVE'
  isassigned?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvRmSplitDetails {
  rsvid?: number;
  rsvrmid: number;
  fromroom: number;
  toroom: number;
  rmtypeid?: number;
  mroomid?: number;
  mrmtypeid?: number;
  fromdate: Date;
  fromtime?: string;
  todate: Date;
  totime?: string;
  splittedon: Date;
  reason: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  rmrsvstatus?: string;
  isassigned?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRmSplitDetails {
  rsvid?: number;
  rsvrmid?: number;
  fromroom?: number;
  toroom?: number;
  rmtypeid?: number;
  mroomid?: number;
  mrmtypeid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  splittedon?: Date;
  reason?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  rmrsvstatus?: string;
  isassigned?: number;
}
