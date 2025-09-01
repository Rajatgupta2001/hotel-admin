/**
 * PosComboDetail Model Interfaces
 * Database table: posComboDetail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosComboDetail {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  posid: number;  // Required
  comboid: number;  // Required
  choicename: string;  // Required
  choicequantity: number;  // Required
  choiceprice?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosComboDetail {
  hotelid: number;
  posid: number;
  comboid: number;
  choicename: string;
  choicequantity: number;
  choiceprice?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosComboDetail {
  hotelid?: number;
  posid?: number;
  comboid?: number;
  choicename?: string;
  choicequantity?: number;
  choiceprice?: number;
  createdby?: number;
  modifiedby?: number;
}
