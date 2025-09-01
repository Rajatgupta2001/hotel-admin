/**
 * RsvGroupTransLimit Model
 * Database table: rsvgrouptranslimit
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvGroupTransLimit {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  limittype?: string;
  limitamount?: number;
  ispernight?: number;
  isperperson?: number;
  isperroom?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateRsvGroupTransLimit {
  hotelid?: number;
  groupid?: number;
  limittype?: string;
  limitamount?: number;
  ispernight?: number;
  isperperson?: number;
  isperroom?: number;
  createdby?: number;
}
export interface IUpdateRsvGroupTransLimit {
  hotelid?: number;
  groupid?: number;
  limittype?: string;
  limitamount?: number;
  ispernight?: number;
  isperperson?: number;
  isperroom?: number;
  createdby?: number;
}