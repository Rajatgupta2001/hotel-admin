/**
 * TripReviewReply Model
 * Database table: tripreviewreply
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITripReviewReply {
  id?: string;  // Primary key - auto-generated
  trprefid?: number;
  hotelid?: number;
  tripresponseid?: string;
  replycontent?: string;
  lang?: string;
  authorname?: string;
  authorlocation?: string;
  moderationstatus?: string;
  datepublished?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateTripReviewReply {
  trprefid?: number;
  hotelid?: number;
  tripresponseid?: string;
  replycontent?: string;
  lang?: string;
  authorname?: string;
  authorlocation?: string;
  moderationstatus?: string;
  datepublished?: string;
  createdby?: number;
}
export interface IUpdateTripReviewReply {
  trprefid?: number;
  hotelid?: number;
  tripresponseid?: string;
  replycontent?: string;
  lang?: string;
  authorname?: string;
  authorlocation?: string;
  moderationstatus?: string;
  datepublished?: string;
  createdby?: number;
}