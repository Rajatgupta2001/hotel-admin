/**
 * TripReviewReply Model Interfaces
 * Database table: tripReviewReply
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
