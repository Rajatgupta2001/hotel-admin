/**
 * PosBillMessages Model Interfaces
 * Database table: posBillMessages
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosBillMessages {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  msgid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosBillMessages {
  hotelid: number;
  posid: number;
  msgid: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosBillMessages {
  hotelid?: number;
  posid?: number;
  msgid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
