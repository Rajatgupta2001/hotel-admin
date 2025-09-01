/**
 * TerminalDevice Model Interfaces
 * Database table: terminalDevice
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITerminalDevice {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  devicecode: string;  // Required
  devicename: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  pgid?: number;
  configurationdata?: string;
}

// Create interface - for new entity creation
export interface ICreateTerminalDevice {
  hotelid: number;
  devicecode: string;
  devicename: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  pgid?: number;
  configurationdata?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTerminalDevice {
  hotelid?: number;
  devicecode?: string;
  devicename?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  pgid?: number;
  configurationdata?: string;
}
