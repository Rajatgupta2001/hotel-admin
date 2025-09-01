/**
 * RateGridGcpOld Model Interfaces
 * Database table: rateGrid_gcp_old
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRateGridGcpOld {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;  // Primary key - auto-generated
  validityid: number;  // Required
  refcode: number;  // Required
  ratetype: string;  // Required
  rateid: number;  // Required
  rmtypeid?: string;
  type: string;  // Required
  typeid?: number;
  occupancy?: number;
  ratehigh?: number;
  ratelow?: number;
  extchildratehigh?: number;
  extchildratelow?: number;
  status?: string;  // Default: 'A'
  syncflag?: number;  // Default: 0
  servcdate?: Date;  // Service date
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateRateGridGcpOld {
  validityid: number;
  refcode: number;
  ratetype: string;
  rateid: number;
  rmtypeid?: string;
  type: string;
  typeid?: number;
  occupancy?: number;
  ratehigh?: number;
  ratelow?: number;
  extchildratehigh?: number;
  extchildratelow?: number;
  status?: string;
  syncflag?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRateGridGcpOld {
  validityid?: number;
  refcode?: number;
  ratetype?: string;
  rateid?: number;
  rmtypeid?: string;
  type?: string;
  typeid?: number;
  occupancy?: number;
  ratehigh?: number;
  ratelow?: number;
  extchildratehigh?: number;
  extchildratelow?: number;
  status?: string;
  syncflag?: number;
  createdby?: number;
}
