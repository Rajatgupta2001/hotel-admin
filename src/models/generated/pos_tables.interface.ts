/**
 * PosTables Model Interfaces
 * Database table: posTables
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosTables {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  tabname?: string;
  tabshape?: string;
  tabsize?: string;
  tabperson?: string;
  xposition?: number;  // Default: text("'0.000000'"
  yposition?: number;  // Default: text("'0.000000'"
  angle?: number;
  status?: string;
  description?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosTables {
  hotelid?: number;
  pospointid?: number;
  tabname?: string;
  tabshape?: string;
  tabsize?: string;
  tabperson?: string;
  xposition?: number;
  yposition?: number;
  angle?: number;
  status?: string;
  description?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosTables {
  hotelid?: number;
  pospointid?: number;
  tabname?: string;
  tabshape?: string;
  tabsize?: string;
  tabperson?: string;
  xposition?: number;
  yposition?: number;
  angle?: number;
  status?: string;
  description?: string;
  createdby?: number;
  modifiedby?: number;
}
