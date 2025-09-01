/**
 * PosBillMessages Model
 * Database table: posbillmessages
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosBillMessages {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  msgid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosBillMessages {
  hotelid?: number;
  posid?: number;
  msgid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdatePosBillMessages {
  hotelid?: number;
  posid?: number;
  msgid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}