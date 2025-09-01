/**
 * ReservationsGcpOld Model Interfaces
 * Database table: reservations_gcp_old
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReservationsGcpOld {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  regnumber?: string;
  foliono: string;  // Required
  rsvtype: string;  // Required
  rsvdate: Date;  // Required
  groupid: number;  // Required
  groupname: string;  // Required
  groupownerid: number;  // Required
  agentid: number;  // Required
  corpid: number;  // Required
  businesssrcid: number;  // Required
  salespersonid?: number;
  purpose: string;  // Required
  preferences: string;  // Required
  checkindate: Date;  // Required
  checkoutdate: Date;  // Required
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  duration: number;  // Required
  arrivalmodeid: number;  // Required
  arrivaldetails: string;  // Required
  departuremode?: number;
  departuredetials?: string;
  arrivaltime: string;  // Required
  arrivaltimeshift: string;  // Required
  departuretime?: string;
  departuretimeshift?: string;
  ispaidbyowner: number;  // Required
  ispaidbyguest: number;  // Required
  ownertype: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  rsvstatus: string;  // Required
  counterid?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  webrefid?: string;  // Default: 0
  gdstype?: string;
  isnoshow?: number;  // Default: 0
  isearlycheckout?: number;  // Default: 0
  islatecheckout?: number;  // Default: 0
  canceledon?: Date;  // Default: text("'0000-00-00 00:00:00'"
  nacreatedon?: Date;
  ischanged?: number;
  releasedate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  isblocked?: number;  // Default: 0
  taxexmptreason?: number;  // Default: 0
  taxexmptreasondesc?: string;
  cnclnadate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  isbookingfoliogen?: number;  // Default: 0
  isratediscpre?: number;  // Default: 0
  ispaidfromweb?: number;  // Default: 0
  isarrivalassign?: number;  // Default: 0
  isdepassign?: number;  // Default: 0
  guesttypeid?: number;  // Default: 0
  rsvgrouponwertype?: number;  // Default: text("'-1'"
  isoverbooked?: number;  // Default: 0
  temprsvid?: number;
  othcurrid?: number;
  conversionrate?: number;  // Default: text("'1.0000000000'"
  viewothcurr?: string;
  originalroomdetailsxml?: string;
  cancservcdate?: Date;
  ownerdetailsxml?: string;
  marketsegmentid?: number;  // Default: 0
  originalholdtill?: number;  // Default: 0
  ishouseuse?: number;  // Default: 0
  isdayuse?: number;  // Default: 0
  resguestrph?: string;
  checkinrefno?: string;
  locktime?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: number;  // Default: 0
  value6?: number;  // Default: 0
  value7?: number;  // Default: 0
  value8?: number;  // Default: 0
  createddate?: Date;
  channelmodifier?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateReservationsGcpOld {
  regnumber?: string;
  foliono: string;
  rsvtype: string;
  rsvdate: Date;
  groupid: number;
  groupname: string;
  groupownerid: number;
  agentid: number;
  corpid: number;
  businesssrcid: number;
  salespersonid?: number;
  purpose: string;
  preferences: string;
  checkindate: Date;
  checkoutdate: Date;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  duration: number;
  arrivalmodeid: number;
  arrivaldetails: string;
  departuremode?: number;
  departuredetials?: string;
  arrivaltime: string;
  arrivaltimeshift: string;
  departuretime?: string;
  departuretimeshift?: string;
  ispaidbyowner: number;
  ispaidbyguest: number;
  ownertype: string;
  createdby?: number;
  rsvstatus: string;
  counterid?: number;
  modifiedby?: number;
  webrefid?: string;
  gdstype?: string;
  isnoshow?: number;
  isearlycheckout?: number;
  islatecheckout?: number;
  canceledon?: Date;
  nacreatedon?: Date;
  ischanged?: number;
  releasedate?: Date;
  isblocked?: number;
  taxexmptreason?: number;
  taxexmptreasondesc?: string;
  cnclnadate?: Date;
  isbookingfoliogen?: number;
  isratediscpre?: number;
  ispaidfromweb?: number;
  isarrivalassign?: number;
  isdepassign?: number;
  guesttypeid?: number;
  rsvgrouponwertype?: number;
  isoverbooked?: number;
  temprsvid?: number;
  othcurrid?: number;
  conversionrate?: number;
  viewothcurr?: string;
  originalroomdetailsxml?: string;
  cancservcdate?: Date;
  ownerdetailsxml?: string;
  marketsegmentid?: number;
  originalholdtill?: number;
  ishouseuse?: number;
  isdayuse?: number;
  resguestrph?: string;
  checkinrefno?: string;
  locktime?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: number;
  value6?: number;
  value7?: number;
  value8?: number;
  createddate?: Date;
  channelmodifier?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateReservationsGcpOld {
  regnumber?: string;
  foliono?: string;
  rsvtype?: string;
  rsvdate?: Date;
  groupid?: number;
  groupname?: string;
  groupownerid?: number;
  agentid?: number;
  corpid?: number;
  businesssrcid?: number;
  salespersonid?: number;
  purpose?: string;
  preferences?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  duration?: number;
  arrivalmodeid?: number;
  arrivaldetails?: string;
  departuremode?: number;
  departuredetials?: string;
  arrivaltime?: string;
  arrivaltimeshift?: string;
  departuretime?: string;
  departuretimeshift?: string;
  ispaidbyowner?: number;
  ispaidbyguest?: number;
  ownertype?: string;
  createdby?: number;
  rsvstatus?: string;
  counterid?: number;
  modifiedby?: number;
  webrefid?: string;
  gdstype?: string;
  isnoshow?: number;
  isearlycheckout?: number;
  islatecheckout?: number;
  canceledon?: Date;
  nacreatedon?: Date;
  ischanged?: number;
  releasedate?: Date;
  isblocked?: number;
  taxexmptreason?: number;
  taxexmptreasondesc?: string;
  cnclnadate?: Date;
  isbookingfoliogen?: number;
  isratediscpre?: number;
  ispaidfromweb?: number;
  isarrivalassign?: number;
  isdepassign?: number;
  guesttypeid?: number;
  rsvgrouponwertype?: number;
  isoverbooked?: number;
  temprsvid?: number;
  othcurrid?: number;
  conversionrate?: number;
  viewothcurr?: string;
  originalroomdetailsxml?: string;
  cancservcdate?: Date;
  ownerdetailsxml?: string;
  marketsegmentid?: number;
  originalholdtill?: number;
  ishouseuse?: number;
  isdayuse?: number;
  resguestrph?: string;
  checkinrefno?: string;
  locktime?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: number;
  value6?: number;
  value7?: number;
  value8?: number;
  createddate?: Date;
  channelmodifier?: number;
}
