/**
 * WebRsvCssDetails Model Interfaces
 * Database table: webRsvCssDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebRsvCssDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateWebRsvCssDetails {
  hotelid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebRsvCssDetails {
  hotelid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdby?: number;
  modifiedby?: number;
}
