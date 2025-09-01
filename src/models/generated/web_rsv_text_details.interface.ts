/**
 * WebRsvTextDetails Model Interfaces
 * Database table: webRsvTextDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebRsvTextDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  textkey?: string;
  textvalue?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateWebRsvTextDetails {
  hotelid?: number;
  textkey?: string;
  textvalue?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebRsvTextDetails {
  hotelid?: number;
  textkey?: string;
  textvalue?: string;
  createdby?: number;
  modifiedby?: number;
}
