/**
 * TripReviews Model
 * Database table: tripreviews
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
}

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