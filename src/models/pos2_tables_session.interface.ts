/**
 * Pos2TablesSession Model
 * Database table: pos2tablessession
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2TablesSession {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  tableid?: number;
  posorderid?: number;
  tableoccupancy?: number;
  tablestatus?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  shiftstatusid?: number;
  servinguserid?: number;
  cashierid?: number;
  counterid?: number;
  posid?: number;
}

export interface ICreatePos2TablesSession {
  hotelid?: number;
  tableid?: number;
  posorderid?: number;
  tableoccupancy?: number;
  tablestatus?: string;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servinguserid?: number;
  cashierid?: number;
  counterid?: number;
  posid?: number;
}
export interface IUpdatePos2TablesSession {
  hotelid?: number;
  tableid?: number;
  posorderid?: number;
  tableoccupancy?: number;
  tablestatus?: string;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servinguserid?: number;
  cashierid?: number;
  counterid?: number;
  posid?: number;
}