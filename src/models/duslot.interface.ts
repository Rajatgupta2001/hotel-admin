/**
 * Duslot Model
 * Database table: duslot
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDuslot {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  slotminute?: number;  // Default: 0 (backend)
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateDuslot {
  hotelid?: number;
  title?: string;
  slotminute?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateDuslot {
  hotelid?: number;
  title?: string;
  slotminute?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}