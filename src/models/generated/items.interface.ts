/**
 * Items Model Interfaces
 * Database table: items
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IItems {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  quantity?: number;  // Default: 0
  description?: string;
  price?: number;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateItems {
  hotelid: number;
  title: string;
  quantity?: number;
  description?: string;
  price?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateItems {
  hotelid?: number;
  title?: string;
  quantity?: number;
  description?: string;
  price?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
