/**
 * KotPrinters Model Interfaces
 * Database table: kotPrinters
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IKotPrinters {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  reftype: string;  // Required
  printername?: string;
  printerurl?: string;
  printertype?: string;  // Default: text("'N'"
  printercolumns?: number;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateKotPrinters {
  hotelid: number;
  refid: number;
  reftype: string;
  printername?: string;
  printerurl?: string;
  printertype?: string;
  printercolumns?: number;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateKotPrinters {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  printername?: string;
  printerurl?: string;
  printertype?: string;
  printercolumns?: number;
  status?: string;
  createdby?: number;
}
