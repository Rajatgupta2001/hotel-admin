/**
 * CorpPmntMstr Model Interfaces
 * Database table: corpPmntMstr
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpPmntMstr {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  corpid: number;  // Required
  voucherno: string;  // Required
  totalamount: number;  // Required
  transdate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCorpPmntMstr {
  hotelid: number;
  corpid: number;
  voucherno: string;
  totalamount: number;
  transdate: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorpPmntMstr {
  hotelid?: number;
  corpid?: number;
  voucherno?: string;
  totalamount?: number;
  transdate?: Date;
  createdby?: number;
  modifiedby?: number;
}
