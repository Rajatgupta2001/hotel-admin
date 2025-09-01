/**
 * KotPrinters Model
 * Database table: kotprinters
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IKotPrinters {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  printername?: string;
  printerurl?: string;
  printertype?: string;
  printercolumns?: number;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateKotPrinters {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  printername?: string;
  printerurl?: string;
  printertype?: string;
  printercolumns?: number;
  status?: Date;
  createdby?: number;
}
export interface IUpdateKotPrinters {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  printername?: string;
  printerurl?: string;
  printertype?: string;
  printercolumns?: number;
  status?: Date;
  createdby?: number;
}