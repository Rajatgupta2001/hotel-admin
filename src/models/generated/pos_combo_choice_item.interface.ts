/**
 * PosComboChoiceItem Model Interfaces
 * Database table: posComboChoiceItem
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosComboChoiceItem {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  comboid: number;  // Required
  poscombochoiceid: number;  // Required
  productid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosComboChoiceItem {
  hotelid: number;
  comboid: number;
  poscombochoiceid: number;
  productid: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosComboChoiceItem {
  hotelid?: number;
  comboid?: number;
  poscombochoiceid?: number;
  productid?: number;
  createdby?: number;
  modifiedby?: number;
}
