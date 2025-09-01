/**
 * GdsPublishAddons Model Interfaces
 * Database table: gdsPublishAddons
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsPublishAddons {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  gdsid: number;  // Required
  addonsid?: number;
  addoncode?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
}

// Create interface - for new entity creation
export interface ICreateGdsPublishAddons {
  hotelid: number;
  gdsid: number;
  addonsid?: number;
  addoncode?: string;
  createdby?: number;
  updatedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsPublishAddons {
  hotelid?: number;
  gdsid?: number;
  addonsid?: number;
  addoncode?: string;
  createdby?: number;
  updatedon?: Date;
}
