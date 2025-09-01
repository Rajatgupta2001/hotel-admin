/**
 * Treebochdata Model Interfaces
 * Database table: treeboChData
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
