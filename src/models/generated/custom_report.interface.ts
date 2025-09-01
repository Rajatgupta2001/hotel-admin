/**
 * CustomReport Model Interfaces
 * Database table: customReport
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICustomReport {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  customreportid?: number;
  extdata?: string;
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateCustomReport {
  hotelid?: number;
  compid?: number;
  customreportid?: number;
  extdata?: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCustomReport {
  hotelid?: number;
  compid?: number;
  customreportid?: number;
  extdata?: string;
  status?: string;
}
