/**
 * PosInvoiceAllotedTable Model Interfaces
 * Database table: posInvoiceAllotedTable
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosInvoiceAllotedTable {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  foliono?: string;
  parentfoliono?: string;
  invoiceid?: number;
  tableid?: number;
  tablename?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  moidfiedon?: Date;
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosInvoiceAllotedTable {
  hotelid?: number;
  pospointid?: number;
  foliono?: string;
  parentfoliono?: string;
  invoiceid?: number;
  tableid?: number;
  tablename?: string;
  createdby?: number;
  moidfiedon?: Date;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosInvoiceAllotedTable {
  hotelid?: number;
  pospointid?: number;
  foliono?: string;
  parentfoliono?: string;
  invoiceid?: number;
  tableid?: number;
  tablename?: string;
  createdby?: number;
  moidfiedon?: Date;
  modifiedby?: number;
}
