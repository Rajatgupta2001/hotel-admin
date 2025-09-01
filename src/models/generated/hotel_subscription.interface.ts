/**
 * HotelSubscription Model Interfaces
 * Database table: hotelSubscription
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelSubscription {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  alertmasterid: number;  // Required
  subscriptionmedia: string;  // Required
  templatetype?: string;
  template?: string;
  addedon?: Date;
  addedby?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: string;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateHotelSubscription {
  hotelid: number;
  alertmasterid: number;
  subscriptionmedia: string;
  templatetype?: string;
  template?: string;
  addedon?: Date;
  addedby?: string;
  modifiedby?: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelSubscription {
  hotelid?: number;
  alertmasterid?: number;
  subscriptionmedia?: string;
  templatetype?: string;
  template?: string;
  addedon?: Date;
  addedby?: string;
  modifiedby?: string;
  status?: string;
}
