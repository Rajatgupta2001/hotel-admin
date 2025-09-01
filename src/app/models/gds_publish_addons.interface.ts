/**
 * GdsPublishAddons Model
 * Database table: gdspublishaddons
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsPublishAddons {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdsid?: number;
  addonsid?: number;
  addoncode?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;
}

export interface ICreateGdsPublishAddons {
  hotelid?: number;
  gdsid?: number;
  addonsid?: number;
  addoncode?: string;
  createdby?: number;
  updatedon?: Date;
}
export interface IUpdateGdsPublishAddons {
  hotelid?: number;
  gdsid?: number;
  addonsid?: number;
  addoncode?: string;
  createdby?: number;
  updatedon?: Date;
}