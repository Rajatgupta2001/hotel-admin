/**
 * HkRmDiscrepancy Model
 * Database table: hkrmdiscrepancy
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHkRmDiscrepancy {
  id?: string;  // Primary key - auto-generated
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
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  foremarks?: string;
  fomodifiedby?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateHkRmDiscrepancy {
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