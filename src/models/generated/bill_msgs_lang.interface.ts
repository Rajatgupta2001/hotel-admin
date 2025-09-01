/**
 * BillMsgsLang Model Interfaces
 * Database table: billMsgsLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillMsgsLang {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  languageid?: number;
  refid?: number;
  title: string;  // Required
  message: string;  // Required
  message1?: string;
  body?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  billtype?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateBillMsgsLang {
  hotelid: number;
  languageid?: number;
  refid?: number;
  title: string;
  message: string;
  message1?: string;
  body?: string;
  createdby?: number;
  billtype?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
