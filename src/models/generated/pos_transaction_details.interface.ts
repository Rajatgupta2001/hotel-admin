/**
 * PosTransactionDetails Model Interfaces
 * Database table: posTransactionDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosTransactionDetails {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  invoiceid: number;  // Required
  sessionid?: string;
  foliono?: string;
  transid: number;  // Required
  pospointid: number;  // Required
  productid: number;  // Required
  itemid: number;  // Required
  quantity?: number;
  shiftid: number;  // Required
  itemprice?: number;
  servcdate?: Date;  // Service date
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  activitydate?: Date;
  orderby?: number;
}

// Create interface - for new entity creation
export interface ICreatePosTransactionDetails {
  hotelid: number;
  invoiceid: number;
  sessionid?: string;
  foliono?: string;
  transid: number;
  pospointid: number;
  productid: number;
  itemid: number;
  quantity?: number;
  shiftid: number;
  itemprice?: number;
  nadate?: Date;
  createdby?: number;
  activitydate?: Date;
  orderby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosTransactionDetails {
  hotelid?: number;
  invoiceid?: number;
  sessionid?: string;
  foliono?: string;
  transid?: number;
  pospointid?: number;
  productid?: number;
  itemid?: number;
  quantity?: number;
  shiftid?: number;
  itemprice?: number;
  nadate?: Date;
  createdby?: number;
  activitydate?: Date;
  orderby?: number;
}
