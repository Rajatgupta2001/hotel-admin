/**
 * FolioStatusMaster Model Interfaces
 * Database table: folioStatusMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFolioStatusMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;  // Default: 0
  rsvid?: number;  // Default: 0
  foliono?: string;
  guestid?: number;
  groupownerid?: number;
  groupownertype?: string;
  foliostatus?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateFolioStatusMaster {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  foliono?: string;
  guestid?: number;
  groupownerid?: number;
  groupownertype?: string;
  foliostatus?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFolioStatusMaster {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  foliono?: string;
  guestid?: number;
  groupownerid?: number;
  groupownertype?: string;
  foliostatus?: string;
  createdby?: number;
  modifiedby?: number;
}
