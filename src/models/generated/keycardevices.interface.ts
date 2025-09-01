/**
 * Keycardevices Model Interfaces
 * Database table: keycardevices
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IKeycardevices {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  devicecode: string;  // Required
  devicename: string;  // Required
  deviceserverip?: string;
  deviceserverport?: string;
  status?: string;  // Default: text("'I'"
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
}

// Create interface - for new entity creation
export interface ICreateKeycardevices {
  hotelid: number;
  devicecode: string;
  devicename: string;
  deviceserverip?: string;
  deviceserverport?: string;
  status?: string;
  updatedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateKeycardevices {
  hotelid?: number;
  devicecode?: string;
  devicename?: string;
  deviceserverip?: string;
  deviceserverport?: string;
  status?: string;
  updatedon?: Date;
}
