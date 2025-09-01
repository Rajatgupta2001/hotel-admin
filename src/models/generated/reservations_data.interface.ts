/**
 * ReservationsData Model Interfaces
 * Database table: reservationsData
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReservationsData {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  reftype: string;  // Required
  subrefid?: number;
  subreftype?: string;
  keyrefid?: number;
  key: string;  // Required
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateReservationsData {
  hotelid: number;
  refid: number;
  reftype: string;
  subrefid?: number;
  subreftype?: string;
  keyrefid?: number;
  key: string;
  value?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateReservationsData {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  keyrefid?: number;
  key?: string;
  value?: string;
  createdby?: number;
}
