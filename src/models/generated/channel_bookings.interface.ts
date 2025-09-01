/**
 * ChannelBookings Model Interfaces
 * Database table: channelBookings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IChannelBookings {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdstype?: string;
  webrefid?: string;
  resstatus?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  noofrooms?: number;
  totalamount?: number;
  tracereservation?: string;
  messageid?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateChannelBookings {
  hotelid?: number;
  gdstype?: string;
  webrefid?: string;
  resstatus?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  noofrooms?: number;
  totalamount?: number;
  tracereservation?: string;
  messageid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateChannelBookings {
  hotelid?: number;
  gdstype?: string;
  webrefid?: string;
  resstatus?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  noofrooms?: number;
  totalamount?: number;
  tracereservation?: string;
  messageid?: string;
}
