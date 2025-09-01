/**
 * RsvGroups Model Interfaces
 * Database table: rsvGroups
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvGroups {
  id?: string;  // Primary key - auto-generated
  regnumber?: string;
  groupname?: string;
  purpose?: string;
  source?: string;
  groupownertype?: number;
  groupownerid?: string;
  checkindate: Date;  // Required
  checkoutdate: Date;  // Required
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  duration?: number;
  arrivaldetails?: number;
  arrivaldetailsno?: string;  // Default: text("'r'"
  arrivaltime?: string;
  arrivaltimeshift?: string;
  departuremode?: number;
  departuredetials?: string;
  departuretime?: string;
  departuretimeshift?: string;
  preferences?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;
  hotelid?: number;  // Primary key - auto-generated
  paidby?: number;  // Default: text("'2'"
  isroomchargepaid?: number;  // Default: text("'1'"
  isotherchargepaid?: number;  // Default: 0
  webrefid?: string;  // Default: 0
  gdstype?: string;
  rsvtype?: string;
  groupstatus?: string;  // Default: text("'RESERVE'"
  isnoshow?: number;  // Default: 0
  lasttranspaiddate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  lasttransid?: number;  // Default: 0
  ischanged?: number;
  customcommssion?: number;
  customcommssiontype?: string;
  addcustomcommssion?: number;
  iscustomcommpernight?: number;  // Default: 0
  isbookingfoliogen?: number;  // Default: 0
  ispaidfromweb?: number;  // Default: 0
  isarrivalassign?: number;  // Default: 0
  isdepassign?: number;  // Default: 0
  corpagentuserid?: string;  // Default: 0
  foliogeninclusivetax?: number;  // Default: 0
  guesttypeid?: number;  // Default: 0
  othcurrid?: number;
  conversionrate?: number;  // Default: text("'1.0000000000'"
  viewothcurr?: string;
  ismarkgroup?: number;  // Default: 0
  groupresname?: string;
  bookerid?: number;
  bookertype?: number;
  bookeruserid?: number;
  detailsxml?: string;  // Default: text("'<hotelogix></hotelogix>'"
  grpleaderrsvid?: number;  // Default: 0
  grpleadergstid?: number;  // Default: 0
  marketsegmentid?: number;  // Default: 0
  ishouseuse?: number;  // Default: 0
  salespersonid?: number;
  locktime?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: number;
  value6?: number;
  value7?: number;
  commtypetp?: number;  // Default: 0
  issezapplicable?: number;  // Default: 0
  sezvalidity?: Date;
  channelmodifier?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvGroups {
  regnumber?: string;
  groupname?: string;
  purpose?: string;
  source?: string;
  groupownertype?: number;
  groupownerid?: string;
  checkindate: Date;
  checkoutdate: Date;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  duration?: number;
  arrivaldetails?: number;
  arrivaldetailsno?: string;
  arrivaltime?: string;
  arrivaltimeshift?: string;
  departuremode?: number;
  departuredetials?: string;
  departuretime?: string;
  departuretimeshift?: string;
  preferences?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  paidby?: number;
  isroomchargepaid?: number;
  isotherchargepaid?: number;
  webrefid?: string;
  gdstype?: string;
  rsvtype?: string;
  groupstatus?: string;
  isnoshow?: number;
  lasttranspaiddate?: Date;
  lasttransid?: number;
  ischanged?: number;
  customcommssion?: number;
  customcommssiontype?: string;
  addcustomcommssion?: number;
  iscustomcommpernight?: number;
  isbookingfoliogen?: number;
  ispaidfromweb?: number;
  isarrivalassign?: number;
  isdepassign?: number;
  corpagentuserid?: string;
  foliogeninclusivetax?: number;
  guesttypeid?: number;
  othcurrid?: number;
  conversionrate?: number;
  viewothcurr?: string;
  ismarkgroup?: number;
  groupresname?: string;
  bookerid?: number;
  bookertype?: number;
  bookeruserid?: number;
  detailsxml?: string;
  grpleaderrsvid?: number;
  grpleadergstid?: number;
  marketsegmentid?: number;
  ishouseuse?: number;
  salespersonid?: number;
  locktime?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: number;
  value6?: number;
  value7?: number;
  commtypetp?: number;
  issezapplicable?: number;
  sezvalidity?: Date;
  channelmodifier?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvGroups {
  regnumber?: string;
  groupname?: string;
  purpose?: string;
  source?: string;
  groupownertype?: number;
  groupownerid?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  duration?: number;
  arrivaldetails?: number;
  arrivaldetailsno?: string;
  arrivaltime?: string;
  arrivaltimeshift?: string;
  departuremode?: number;
  departuredetials?: string;
  departuretime?: string;
  departuretimeshift?: string;
  preferences?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  paidby?: number;
  isroomchargepaid?: number;
  isotherchargepaid?: number;
  webrefid?: string;
  gdstype?: string;
  rsvtype?: string;
  groupstatus?: string;
  isnoshow?: number;
  lasttranspaiddate?: Date;
  lasttransid?: number;
  ischanged?: number;
  customcommssion?: number;
  customcommssiontype?: string;
  addcustomcommssion?: number;
  iscustomcommpernight?: number;
  isbookingfoliogen?: number;
  ispaidfromweb?: number;
  isarrivalassign?: number;
  isdepassign?: number;
  corpagentuserid?: string;
  foliogeninclusivetax?: number;
  guesttypeid?: number;
  othcurrid?: number;
  conversionrate?: number;
  viewothcurr?: string;
  ismarkgroup?: number;
  groupresname?: string;
  bookerid?: number;
  bookertype?: number;
  bookeruserid?: number;
  detailsxml?: string;
  grpleaderrsvid?: number;
  grpleadergstid?: number;
  marketsegmentid?: number;
  ishouseuse?: number;
  salespersonid?: number;
  locktime?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: number;
  value6?: number;
  value7?: number;
  commtypetp?: number;
  issezapplicable?: number;
  sezvalidity?: Date;
  channelmodifier?: number;
}
