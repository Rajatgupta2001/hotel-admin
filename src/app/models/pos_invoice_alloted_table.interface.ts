/**
 * PosInvoiceAllotedTable Model
 * Database table: posinvoiceallotedtable
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosInvoiceAllotedTable {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  foliono?: string;
  parentfoliono?: string;
  invoiceid?: number;
  tableid?: number;
  tablename?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  moidfiedon?: Date;
  modifiedby?: number;  // User ID reference
}

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