/**
 * AccountAttributes Model Interfaces
 * Database table: accountAttributes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountAttributes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  attributecode?: string;
  description?: string;
  status: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAccountAttributes {
  hotelid: number;
  attributecode?: string;
  description?: string;
  status: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountAttributes {
  hotelid?: number;
  attributecode?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
