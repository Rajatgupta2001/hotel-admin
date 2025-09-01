/**
 * TripReviews Model Interfaces
 * Database table: tripReviews
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITripReviews {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  triphotelid?: string;
  triphotelname?: string;
  tripreviewid?: string;
  tripratings?: number;
  title?: string;
  reviews?: string;
  lang?: string;
  subrating?: string;
  moderationstatus?: string;
  datesubmitted?: Date;
  datemodified?: Date;
  datepublished?: Date;
  authorname?: string;
  authorlocation?: string;
  authoremail?: string;
  authoripaddress?: string;
  purposeoftrip?: string;
  dateofvisit?: string;
  traveledwith?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateTripReviews {
  hotelid?: number;
  triphotelid?: string;
  triphotelname?: string;
  tripreviewid?: string;
  tripratings?: number;
  title?: string;
  reviews?: string;
  lang?: string;
  subrating?: string;
  moderationstatus?: string;
  datesubmitted?: Date;
  datemodified?: Date;
  datepublished?: Date;
  authorname?: string;
  authorlocation?: string;
  authoremail?: string;
  authoripaddress?: string;
  purposeoftrip?: string;
  dateofvisit?: string;
  traveledwith?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTripReviews {
  hotelid?: number;
  triphotelid?: string;
  triphotelname?: string;
  tripreviewid?: string;
  tripratings?: number;
  title?: string;
  reviews?: string;
  lang?: string;
  subrating?: string;
  moderationstatus?: string;
  datesubmitted?: Date;
  datemodified?: Date;
  datepublished?: Date;
  authorname?: string;
  authorlocation?: string;
  authoremail?: string;
  authoripaddress?: string;
  purposeoftrip?: string;
  dateofvisit?: string;
  traveledwith?: string;
  createdby?: number;
}
