/**
 * FiscalFolio Model Interfaces
 * Database table: fiscalFolio
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFiscalFolio {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  foliono?: string;
  prevfoliono?: string;
  type?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  pdffile?: string;
  response?: string;
  message: string;  // Required
  orderid?: string;
  irnno?: string;
  posid?: number;
  positemids?: string;
  currencycode?: string;
  conversionrate?: number;
  refid?: number;
  reftype?: string;
}

// Create interface - for new entity creation
export interface ICreateFiscalFolio {
  hotelid?: number;
  foliono?: string;
  prevfoliono?: string;
  type?: string;
  status?: string;
  pdffile?: string;
  response?: string;
  message: string;
  orderid?: string;
  irnno?: string;
  posid?: number;
  positemids?: string;
  currencycode?: string;
  conversionrate?: number;
  refid?: number;
  reftype?: string;
}

// Update interface - for entity updates (all fields optional)
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
