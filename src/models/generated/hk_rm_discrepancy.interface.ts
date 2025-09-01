/**
 * HkRmDiscrepancy Model Interfaces
 * Database table: hkRmDiscrepancy
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHkRmDiscrepancy {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  roomtypeid: number;  // Required
  roomid: number;  // Required
  adult?: number;
  adulthk?: number;
  child?: number;
  childhk?: number;
  rmstatus?: number;
  status?: string;
  statushk?: string;
  discrepancy?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  foremarks?: string;
  fomodifiedby?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateHkRmDiscrepancy {
  hotelid: number;
  roomtypeid: number;
  roomid: number;
  adult?: number;
  adulthk?: number;
  child?: number;
  childhk?: number;
  rmstatus?: number;
  status?: string;
  statushk?: string;
  discrepancy?: string;
  createdby?: number;
  foremarks?: string;
  fomodifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHkRmDiscrepancy {
  hotelid?: number;
  roomtypeid?: number;
  roomid?: number;
  adult?: number;
  adulthk?: number;
  child?: number;
  childhk?: number;
  rmstatus?: number;
  status?: string;
  statushk?: string;
  discrepancy?: string;
  createdby?: number;
  foremarks?: string;
  fomodifiedby?: number;
}
