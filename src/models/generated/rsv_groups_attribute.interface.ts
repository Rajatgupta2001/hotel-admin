/**
 * RsvGroupsAttribute Model Interfaces
 * Database table: rsvGroupsAttribute
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvGroupsAttribute {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  attributeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRsvGroupsAttribute {
  hotelid?: number;
  groupid?: number;
  attributeid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvGroupsAttribute {
  hotelid?: number;
  groupid?: number;
  attributeid?: number;
  createdby?: number;
  modifiedby?: number;
}
