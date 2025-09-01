/**
 * CorpAgentBulkDiscount Model
 * Database table: corpagentbulkdiscount
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpAgentBulkDiscount {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;
  enddate?: Date;
  roomnightfrom?: number;
  roomnightto?: number;
  discount?: number;
  disctype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: Date;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
}

export interface ICreateCorpAgentBulkDiscount {
  hotelid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;
  enddate?: Date;
  roomnightfrom?: number;
  roomnightto?: number;
  discount?: number;
  disctype?: string;
  createdby?: Date;
  status?: string;
}
export interface IUpdateCorpAgentBulkDiscount {
  hotelid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;
  enddate?: Date;
  roomnightfrom?: number;
  roomnightto?: number;
  discount?: number;
  disctype?: string;
  createdby?: Date;
  status?: string;
}