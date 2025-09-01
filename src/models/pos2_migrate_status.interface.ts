/**
 * Pos2MigrateStatus Model
 * Database table: pos2migratestatus
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2MigrateStatus {
  hotelid?: number;
  status?: string;
  startTime?: string;
  endTime?: string;
}

export interface ICreatePos2MigrateStatus {
  hotelid?: number;
  status?: string;
  startTime?: string;
  endTime?: string;
}
export interface IUpdatePos2MigrateStatus {
  hotelid?: number;
  status?: string;
  startTime?: string;
  endTime?: string;
}