/**
 * RateGridGcpOld Model
 * Database table: rategridgcpold
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRateGridGcpOld {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
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
  servcdate?: Date;  // Service date - auto-populated
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateRateGridGcpOld {
  hotelid?: string;
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
export interface IUpdateRateGridGcpOld {
  hotelid?: string;
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