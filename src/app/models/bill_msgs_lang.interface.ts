/**
 * BillMsgsLang Model
 * Database table: billmsgslang
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillMsgsLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  message?: string;
  message1?: string;
  body?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  billtype?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateBillMsgsLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  message?: string;
  message1?: string;
  body?: string;
  createdby?: number;
  billtype?: string;
  modifiedby?: number;
}
export interface IUpdateBillMsgsLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  message?: string;
  message1?: string;
  body?: string;
  createdby?: number;
  billtype?: string;
  modifiedby?: number;
}