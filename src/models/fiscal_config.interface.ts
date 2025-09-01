/**
 * FiscalConfig Model
 * Database table: fiscalconfig
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFiscalConfig {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  status?: string;
}

export interface ICreateFiscalConfig {
  hotelid?: number;
  status?: string;
}
export interface IUpdateFiscalConfig {
  hotelid?: number;
  status?: string;
}