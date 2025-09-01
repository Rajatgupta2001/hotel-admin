/**
 * TerminalDevice Model
 * Database table: terminaldevice
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITerminalDevice {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  devicecode?: string;
  devicename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  pgid?: number;
  configurationdata?: Date;
}

export interface ICreateTerminalDevice {
  hotelid?: number;
  devicecode?: string;
  devicename?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  pgid?: number;
  configurationdata?: Date;
}
export interface IUpdateTerminalDevice {
  hotelid?: number;
  devicecode?: string;
  devicename?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  pgid?: number;
  configurationdata?: Date;
}