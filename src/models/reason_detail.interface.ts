/**
 * ReasonDetail Model
 * Database table: reasondetail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IReasonDetail {
  id?: number;  // Primary key - auto-generated
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
  createdby?: number;  // User ID reference
  status?: string;
  createdonOld?: Date;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateReasonDetail {
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
  createdonOld?: Date;
}
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
  createdonOld?: Date;
}