/**
 * SendExternalrefData Model Interfaces
 * Database table: sendExternalrefData
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISendExternalrefData {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  auditid: number;  // Required
  parentnaextrefid?: number;
  extreftype: string;  // Required
  status?: number;  // Default: 0
  description?: string;
  nadate?: Date;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateSendExternalrefData {
  hotelid: number;
  auditid: number;
  parentnaextrefid?: number;
  extreftype: string;
  status?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSendExternalrefData {
  hotelid?: number;
  auditid?: number;
  parentnaextrefid?: number;
  extreftype?: string;
  status?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
}
