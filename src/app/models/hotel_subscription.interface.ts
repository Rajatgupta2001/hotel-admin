/**
 * HotelSubscription Model
 * Database table: hotelsubscription
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelSubscription {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  alertmasterid?: number;
  subscriptionmedia?: string;
  templatetype?: string;
  template?: string;
  addedon?: Date;
  addedby?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: string;  // User ID reference
  status?: Date;
}

export interface ICreateHotelSubscription {
  hotelid?: number;
  alertmasterid?: number;
  subscriptionmedia?: string;
  templatetype?: string;
  template?: string;
  addedon?: Date;
  addedby?: string;
  modifiedby?: string;
  status?: Date;
}
export interface IUpdateHotelSubscription {
  hotelid?: number;
  alertmasterid?: number;
  subscriptionmedia?: string;
  templatetype?: string;
  template?: string;
  addedon?: Date;
  addedby?: string;
  modifiedby?: string;
  status?: Date;
}