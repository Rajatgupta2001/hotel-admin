/**
 * ImportReservation Model
 * Database table: importreservation
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IImportReservation {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  sessionid?: string;
  rsvid?: number;
  groupid?: number;
  rowid?: number;
  refid?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  roomtypecode?: string;
  ratecode?: string;
  rate?: number;
  noofadult?: number;
  noofchild?: number;
  rsvstatus?: string;
  ownerfname?: string;
  ownerlname?: string;
  ownerphone?: string;
  ownermobile?: string;
  owneremail?: string;
  owneraddress?: string;
  ownercity?: string;
  ownerstate?: string;
  ownercountry?: string;
  ownerzip?: string;
  ownergender?: string;
  grpownertype?: string;
  compname?: string;
  grpownerfname?: string;
  grpownerlname?: string;
  grpownerphone?: string;
  grpownermobile?: string;
  grpowneremail?: string;
  grpowneraddress?: string;
  grpownercity?: string;
  grpownerstate?: string;
  grpownercountry?: string;
  grpownerzip?: string;
  grpownergender?: string;
  comments?: string;
  paymentmode?: string;
  paymenttype?: string;
  paymentamount?: number;
  paymentdesc?: string;
  incldata?: string;
  status?: string;
  message?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;
  mailchimpsyncstatus?: string;
  hmssyncstatus?: string;
  cancelorholdtilldate?: Date;
  cancelcharge?: number;
  cancelremarks?: string;
}

export interface ICreateImportReservation {
  hotelid?: number;
  sessionid?: string;
  rsvid?: number;
  groupid?: number;
  rowid?: number;
  refid?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  roomtypecode?: string;
  ratecode?: string;
  rate?: number;
  noofadult?: number;
  noofchild?: number;
  rsvstatus?: string;
  ownerfname?: string;
  ownerlname?: string;
  ownerphone?: string;
  ownermobile?: string;
  owneremail?: string;
  owneraddress?: string;
  ownercity?: string;
  ownerstate?: string;
  ownercountry?: string;
  ownerzip?: string;
  ownergender?: string;
  grpownertype?: string;
  compname?: string;
  grpownerfname?: string;
  grpownerlname?: string;
  grpownerphone?: string;
  grpownermobile?: string;
  grpowneremail?: string;
  grpowneraddress?: string;
  grpownercity?: string;
  grpownerstate?: string;
  grpownercountry?: string;
  grpownerzip?: string;
  grpownergender?: string;
  comments?: string;
  paymentmode?: string;
  paymenttype?: string;
  paymentamount?: number;
  paymentdesc?: string;
  incldata?: string;
  status?: string;
  message?: string;
  updatedon?: Date;
  mailchimpsyncstatus?: string;
  hmssyncstatus?: string;
  cancelorholdtilldate?: Date;
  cancelcharge?: number;
  cancelremarks?: string;
}
export interface IUpdateImportReservation {
  hotelid?: number;
  sessionid?: string;
  rsvid?: number;
  groupid?: number;
  rowid?: number;
  refid?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  roomtypecode?: string;
  ratecode?: string;
  rate?: number;
  noofadult?: number;
  noofchild?: number;
  rsvstatus?: string;
  ownerfname?: string;
  ownerlname?: string;
  ownerphone?: string;
  ownermobile?: string;
  owneremail?: string;
  owneraddress?: string;
  ownercity?: string;
  ownerstate?: string;
  ownercountry?: string;
  ownerzip?: string;
  ownergender?: string;
  grpownertype?: string;
  compname?: string;
  grpownerfname?: string;
  grpownerlname?: string;
  grpownerphone?: string;
  grpownermobile?: string;
  grpowneremail?: string;
  grpowneraddress?: string;
  grpownercity?: string;
  grpownerstate?: string;
  grpownercountry?: string;
  grpownerzip?: string;
  grpownergender?: string;
  comments?: string;
  paymentmode?: string;
  paymenttype?: string;
  paymentamount?: number;
  paymentdesc?: string;
  incldata?: string;
  status?: string;
  message?: string;
  updatedon?: Date;
  mailchimpsyncstatus?: string;
  hmssyncstatus?: string;
  cancelorholdtilldate?: Date;
  cancelcharge?: number;
  cancelremarks?: string;
}