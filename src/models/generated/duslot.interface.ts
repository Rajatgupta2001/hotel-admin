/**
 * Duslot Model Interfaces
 * Database table: duslot
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDuslot {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  slotminute?: number;  // Default: 0
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateDuslot {
  hotelid?: number;
  title?: string;
  slotminute?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDuslot {
  hotelid?: number;
  title?: string;
  slotminute?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
