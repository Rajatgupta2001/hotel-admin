/**
 * ImportReservation Model Interfaces
 * Database table: importReservation
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IImportReservation {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  sessionid: string;  // Required
  rsvid?: number;  // Default: 0
  groupid?: number;  // Default: 0
  rowid: number;  // Required
  refid: string;  // Required
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
  status?: string;  // Default: text("'PENDING'"
  message?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP"
  mailchimpsyncstatus?: string;  // Default: text("'PENDING'"
  hmssyncstatus?: string;  // Default: text("'PENDING'"
  cancelorholdtilldate?: Date;
  cancelcharge?: number;
  cancelremarks?: string;
}

// Create interface - for new entity creation
export interface ICreateImportReservation {
  hotelid: number;
  sessionid: string;
  rsvid?: number;
  groupid?: number;
  rowid: number;
  refid: string;
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

// Update interface - for entity updates (all fields optional)
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
