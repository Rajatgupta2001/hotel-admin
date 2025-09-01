/**
 * FiscalFolio Model
 * Database table: fiscalfolio
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFiscalFolio {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  foliono?: string;
  prevfoliono?: string;
  type?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  pdffile?: string;
  response?: string;
  message?: string;
  orderid?: string;
  irnno?: string;
  posid?: number;
  positemids?: string;
  currencycode?: string;
  conversionrate?: number;
  refid?: number;
  reftype?: string;
}

export interface ICreateFiscalFolio {
  hotelid?: number;
  foliono?: string;
  prevfoliono?: string;
  type?: string;
  status?: string;
  pdffile?: string;
  response?: string;
  message?: string;
  orderid?: string;
  irnno?: string;
  posid?: number;
  positemids?: string;
  currencycode?: string;
  conversionrate?: number;
  refid?: number;
  reftype?: string;
}
export interface IUpdateFiscalFolio {
  hotelid?: number;
  foliono?: string;
  prevfoliono?: string;
  type?: string;
  status?: string;
  pdffile?: string;
  response?: string;
  message?: string;
  orderid?: string;
  irnno?: string;
  posid?: number;
  positemids?: string;
  currencycode?: string;
  conversionrate?: number;
  refid?: number;
  reftype?: string;
}