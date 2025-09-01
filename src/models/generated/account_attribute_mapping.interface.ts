/**
 * AccountAttributeMapping Model Interfaces
 * Database table: accountAttributeMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountAttributeMapping {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  accountcodeid: number;  // Required
  accountattributeid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAccountAttributeMapping {
  hotelid: number;
  accountcodeid: number;
  accountattributeid: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountAttributeMapping {
  hotelid?: number;
  accountcodeid?: number;
  accountattributeid?: number;
  createdby?: number;
  modifiedby?: number;
}
