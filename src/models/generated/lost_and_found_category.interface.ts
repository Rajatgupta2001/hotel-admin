/**
 * LostAndFoundCategory Model Interfaces
 * Database table: lostAndFoundCategory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILostAndFoundCategory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  catname: string;  // Required
  expiry: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

// Create interface - for new entity creation
export interface ICreateLostAndFoundCategory {
  hotelid: number;
  catname: string;
  expiry: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLostAndFoundCategory {
  hotelid?: number;
  catname?: string;
  expiry?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
