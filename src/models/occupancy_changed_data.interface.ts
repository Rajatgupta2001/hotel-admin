/**
 * OccupancyChangedData Model
 * Database table: occupancychangeddata
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IOccupancyChangedData {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  effectivedate?: Date;
  pkgid?: number;
  occupancy?: number;
  status?: string;
  retrycount?: number;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;
}

export interface ICreateOccupancyChangedData {
  hotelid?: number;
  roomtypeid?: number;
  effectivedate?: Date;
  pkgid?: number;
  occupancy?: number;
  status?: string;
  retrycount?: number;
  updatedon?: Date;
}
export interface IUpdateOccupancyChangedData {
  hotelid?: number;
  roomtypeid?: number;
  effectivedate?: Date;
  pkgid?: number;
  occupancy?: number;
  status?: string;
  retrycount?: number;
  updatedon?: Date;
}