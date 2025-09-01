/**
 * RsvRmSplitDetails Model
 * Database table: rsvrmsplitdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IReservation } from './reservations.interface';
export interface IRsvRmSplitDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  fromroom?: number;
  toroom?: number;
  rmtypeid?: number;
  mroomid?: number;
  mrmtypeid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  splittedon?: Date;
  reason?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;
  rmrsvstatus?: string;
  isassigned?: number;
  reservation?: IReservation;
}

export interface ICreateRsvRmSplitDetails {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  fromroom?: number;
  toroom?: number;
  rmtypeid?: number;
  mroomid?: number;
  mrmtypeid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  splittedon?: Date;
  reason?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  rmrsvstatus?: string;
  isassigned?: number;
  reservation?: IReservation;
}
export interface IUpdateRsvRmSplitDetails {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  fromroom?: number;
  toroom?: number;
  rmtypeid?: number;
  mroomid?: number;
  mrmtypeid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  splittedon?: Date;
  reason?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  rmrsvstatus?: string;
  isassigned?: number;
  reservation?: IReservation;
}