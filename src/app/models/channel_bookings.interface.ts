/**
 * ChannelBookings Model
 * Database table: channelbookings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
}

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