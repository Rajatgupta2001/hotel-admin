/**
 * ArrivalModes Model Interfaces
 * Database table: arrivalModes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IArrivalModes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateArrivalModes {
  hotelid: number;
  title: string;
  description: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateArrivalModes {
  hotelid?: number;
  title?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
