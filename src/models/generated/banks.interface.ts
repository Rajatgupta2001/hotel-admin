/**
 * Banks Model Interfaces
 * Database table: banks
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBanks {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  shortname: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  accountcodeid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateBanks {
  hotelid: number;
  title: string;
  shortname: string;
  description: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBanks {
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}
