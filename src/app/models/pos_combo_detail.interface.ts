/**
 * PosComboDetail Model
 * Database table: poscombodetail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosComboDetail {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  comboid?: number;
  choicename?: string;
  choicequantity?: number;
  choiceprice?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosComboDetail {
  hotelid?: number;
  posid?: number;
  comboid?: number;
  choicename?: string;
  choicequantity?: number;
  choiceprice?: number;
  createdby?: number;
  modifiedby?: number;
}
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