/**
 * OccupancyChangedDataHistory Model Interfaces
 * Database table: occupancyChangedDataHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IOccupancyChangedDataHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  roomtypeid: number;  // Required
  effectivedate: Date;  // Required
  pkgid?: number;
  occupancy: number;  // Required
  status?: string;
  retrycount?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP"
}

// Create interface - for new entity creation
export interface ICreateOccupancyChangedDataHistory {
  hotelid: number;
  roomtypeid: number;
  effectivedate: Date;
  pkgid?: number;
  occupancy: number;
  status?: string;
  retrycount?: number;
  updatedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateOccupancyChangedDataHistory {
  hotelid?: number;
  roomtypeid?: number;
  effectivedate?: Date;
  pkgid?: number;
  occupancy?: number;
  status?: string;
  retrycount?: number;
  updatedon?: Date;
}
