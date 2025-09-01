/**
 * SnapshotExport Model
 * Database table: snapshotexport
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISnapshotExport {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  step?: string;
  rsvzip?: string;
  transzip?: string;
  verifycsv?: string;
  currmonthly?: string;
  premonthly?: string;
  currforecast?: string;
  nextforecast?: string;
  rsvcreatedon?: Date;
  transcreatedon?: Date;
  csvcreatedon?: Date;
  uploadon?: Date;
  nadate?: Date;
  type?: string;
  sentmailcount?: number;
}

export interface ICreateSnapshotExport {
  hotelid?: number;
  step?: string;
  rsvzip?: string;
  transzip?: string;
  verifycsv?: string;
  currmonthly?: string;
  premonthly?: string;
  currforecast?: string;
  nextforecast?: string;
  rsvcreatedon?: Date;
  transcreatedon?: Date;
  csvcreatedon?: Date;
  uploadon?: Date;
  nadate?: Date;
  type?: string;
  sentmailcount?: number;
}
export interface IUpdateSnapshotExport {
  hotelid?: number;
  step?: string;
  rsvzip?: string;
  transzip?: string;
  verifycsv?: string;
  currmonthly?: string;
  premonthly?: string;
  currforecast?: string;
  nextforecast?: string;
  rsvcreatedon?: Date;
  transcreatedon?: Date;
  csvcreatedon?: Date;
  uploadon?: Date;
  nadate?: Date;
  type?: string;
  sentmailcount?: number;
}