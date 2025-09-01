/**
 * SendExternalrefData Model
 * Database table: sendexternalrefdata
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISendExternalrefData {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  auditid?: number;
  parentnaextrefid?: number;
  extreftype?: string;
  status?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateSendExternalrefData {
  hotelid?: number;
  auditid?: number;
  parentnaextrefid?: number;
  extreftype?: string;
  status?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
}
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