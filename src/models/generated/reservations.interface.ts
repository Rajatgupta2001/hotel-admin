/**
 * Reservation Model Interfaces
 * Database table: reservations
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReservation {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  regnumber?: string;
  foliono?: string;
  rsvtype: string;  // Required
  rsvdate: Date;  // Required
  groupid?: number;  // Default: 0
  groupname?: string;
  groupownerid?: number;  // Default: 0
  agentid?: number;  // Default: 0
  corpid?: number;  // Default: 0
  businesssrcid?: number;  // Default: 0
  salespersonid?: number;
  purpose?: string;
  preferences?: string;
  checkindate: Date;  // Required
  checkintime: string;  // Required
  checkoutdate: Date;  // Required
  checkouttime: string;  // Required
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  duration: number;  // Required
  arrivalmodeid?: number;  // Default: 0
  arrivaldetails?: string;
  arrivaltime?: string;
  arrivaltimeshift?: string;
  departuremode?: number;
  departuredetials?: string;
  departuretime?: string;
  departuretimeshift?: string;
  ispaidbyowner?: number;  // Default: 0
  ispaidbyguest?: number;  // Default: 0
  ownertype: string;  // Required
  rsvstatus?: string;
  counterid?: number;  // Default: 0
  webrefid?: string;
  gdstype?: string;
  isnoshow?: number;
  isearlycheckout?: number;
  islatecheckout?: number;
  canceledon?: Date;
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
  resguestrph?: number;
  checkinrefno?: string;
  locktime?: string;
  createddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  modifiedby?: string;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateReservation {
  hotelid: number;
  regnumber?: string;
  foliono?: string;
  rsvtype: string;
  rsvdate: Date;
  groupid?: number;
  groupname?: string;
  groupownerid?: number;
  agentid?: number;
  corpid?: number;
  businesssrcid?: number;
  salespersonid?: number;
  purpose?: string;
  preferences?: string;
  checkindate: Date;
  checkintime: string;
  checkoutdate: Date;
  checkouttime: string;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  duration: number;
  arrivalmodeid?: number;
  arrivaldetails?: string;
  arrivaltime?: string;
  arrivaltimeshift?: string;
  departuremode?: number;
  departuredetials?: string;
  departuretime?: string;
  departuretimeshift?: string;
  ispaidbyowner?: number;
  ispaidbyguest?: number;
  ownertype: string;
  rsvstatus?: string;
  counterid?: number;
  webrefid?: string;
  gdstype?: string;
  isnoshow?: number;
  isearlycheckout?: number;
  islatecheckout?: number;
  canceledon?: Date;
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
  resguestrph?: number;
  checkinrefno?: string;
  locktime?: string;
  createddate?: Date;
  createdby?: string;
  modifiedby?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateReservation {
  hotelid?: number;
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
  checkintime?: string;
  checkoutdate?: Date;
  checkouttime?: string;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  duration?: number;
  arrivalmodeid?: number;
  arrivaldetails?: string;
  arrivaltime?: string;
  arrivaltimeshift?: string;
  departuremode?: number;
  departuredetials?: string;
  departuretime?: string;
  departuretimeshift?: string;
  ispaidbyowner?: number;
  ispaidbyguest?: number;
  ownertype?: string;
  rsvstatus?: string;
  counterid?: number;
  webrefid?: string;
  gdstype?: string;
  isnoshow?: number;
  isearlycheckout?: number;
  islatecheckout?: number;
  canceledon?: Date;
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
  resguestrph?: number;
  checkinrefno?: string;
  locktime?: string;
  createddate?: Date;
  createdby?: string;
  modifiedby?: string;
}
