/**
 * SnapshotExport Model Interfaces
 * Database table: snapshotExport
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  sentmailcount?: number;  // Default: 0
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
