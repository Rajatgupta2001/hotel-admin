/**
 * ReasonsData Model Interfaces
 * Database table: reasonsData
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReasonsData {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  reasonmapid: number;  // Required
  reasontype: string;  // Required
  refid?: number;
  reftype?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateReasonsData {
  hotelid: number;
  reasonmapid: number;
  reasontype: string;
  refid?: number;
  reftype?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateReasonsData {
  hotelid?: number;
  reasonmapid?: number;
  reasontype?: string;
  refid?: number;
  reftype?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}
