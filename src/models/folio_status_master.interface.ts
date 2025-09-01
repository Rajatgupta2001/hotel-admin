/**
 * FolioStatusMaster Model
 * Database table: foliostatusmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFolioStatusMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  foliono?: string;
  guestid?: number;
  groupownerid?: number;
  groupownertype?: string;
  foliostatus?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

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