/**
 * RsvRmBedDetails Model
 * Database table: rsvrmbeddetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmBedDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noofbeds?: number;
  fromdate?: Date;
  todate?: Date;
  totalamount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  counterid?: number;
}

export interface ICreateRsvRmBedDetails {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noofbeds?: number;
  fromdate?: Date;
  todate?: Date;
  totalamount?: number;
  createdby?: number;
  counterid?: number;
}
export interface IUpdateRsvRmBedDetails {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noofbeds?: number;
  fromdate?: Date;
  todate?: Date;
  totalamount?: number;
  createdby?: number;
  counterid?: number;
}