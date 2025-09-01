/**
 * Treebochdata Model
 * Database table: treebochdata
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITreebochdata {
  hotelid?: number;
  rmtypeid?: number;
  oldstdocc?: string;
  oldhighocc?: number;
  oldbaseprice?: string;
  oldupcharge?: string;
  oldxtrbed?: string;
  newbaseocc?: number;
  newbaseprice?: string;
  newupcharge?: string;
}

export interface ICreateTreebochdata {
  hotelid?: number;
  rmtypeid?: number;
  oldstdocc?: string;
  oldhighocc?: number;
  oldbaseprice?: string;
  oldupcharge?: string;
  oldxtrbed?: string;
  newbaseocc?: number;
  newbaseprice?: string;
  newupcharge?: string;
}
export interface IUpdateTreebochdata {
  hotelid?: number;
  rmtypeid?: number;
  oldstdocc?: string;
  oldhighocc?: number;
  oldbaseprice?: string;
  oldupcharge?: string;
  oldxtrbed?: string;
  newbaseocc?: number;
  newbaseprice?: string;
  newupcharge?: string;
}