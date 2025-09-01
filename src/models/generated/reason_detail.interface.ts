/**
 * ReasonDetail Model Interfaces
 * Database table: reasonDetail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReasonDetail {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid: number;  // Required
  orderno?: number;  // Default: 0
  invoiceid?: number;  // Default: 0
  tblname?: string;
  posid?: number;
  foliono?: string;
  reasonid?: number;
  reasondetail?: string;
  reasontype?: string;
  reference?: number;
  createdby?: number;  // User ID reference
  status?: string;  // Default: text("'New'"
  createdonOld?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateReasonDetail {
  hotelid?: number;
  refid: number;
  orderno?: number;
  invoiceid?: number;
  tblname?: string;
  posid?: number;
  foliono?: string;
  reasonid?: number;
  reasondetail?: string;
  reasontype?: string;
  reference?: number;
  createdby?: number;
  status?: string;
  createdonOld?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateReasonDetail {
  hotelid?: number;
  refid?: number;
  orderno?: number;
  invoiceid?: number;
  tblname?: string;
  posid?: number;
  foliono?: string;
  reasonid?: number;
  reasondetail?: string;
  reasontype?: string;
  reference?: number;
  createdby?: number;
  status?: string;
  createdonOld?: string;
}
