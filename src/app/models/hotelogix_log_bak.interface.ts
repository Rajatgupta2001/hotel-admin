/**
 * HotelogixLogBak Model
 * Database table: hotelogixlogbak
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelogixLogBak {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  logtype?: number;
  logtext?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  ip?: string;
  referer?: string;
  pi?: string;
  rsvid?: number;
  groupid?: number;
}

export interface ICreateHotelogixLogBak {
  hotelid?: number;
  logtype?: number;
  logtext?: string;
  createdby?: number;
  ip?: string;
  referer?: string;
  pi?: string;
  rsvid?: number;
  groupid?: number;
}
export interface IUpdateHotelogixLogBak {
  hotelid?: number;
  logtype?: number;
  logtext?: string;
  createdby?: number;
  ip?: string;
  referer?: string;
  pi?: string;
  rsvid?: number;
  groupid?: number;
}