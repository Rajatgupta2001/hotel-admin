/**
 * WebRsvCssMaster Model Interfaces
 * Database table: webRsvCssMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebRsvCssMaster {
  id?: number;  // Primary key - auto-generated
  cssclassname?: string;
  reftypetext?: string;
  status?: string;  // Default: 'A'
  shortorder?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateWebRsvCssMaster {
  cssclassname?: string;
  reftypetext?: string;
  status?: string;
  shortorder?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebRsvCssMaster {
  cssclassname?: string;
  reftypetext?: string;
  status?: string;
  shortorder?: number;
}
