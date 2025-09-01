/**
 * GuestsPreference Model Interfaces
 * Database table: guestsPreference
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestsPreference {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  guestid?: string;
  prefid?: number;
  prefernces?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestsPreference {
  hotelid?: number;
  guestid?: string;
  prefid?: number;
  prefernces?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestsPreference {
  hotelid?: number;
  guestid?: string;
  prefid?: number;
  prefernces?: string;
  createdby?: number;
  modifiedby?: number;
}
