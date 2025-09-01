/**
 * HotelSettings Model Interfaces
 * Database table: hotelSettings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelSettings {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  currencyid?: number;
  financialyear?: number;
  convertionrate?: string;
  convertionmargin?: number;
  bookingtype?: string;
  dateformat?: string;
  timezone?: string;
  timezonediff?: number;
  timeformat?: string;
  checkintime?: string;
  checkouttime?: string;
  ageforchild?: number;
  minageforchild?: number;
  ageforinfant?: number;
  globaltravelagentcomm?: number;
  globalcorpagentcomm?: number;
  daysbfrblockedrmsavailable?: number;
  interimpamntd?: number;
  nightaudittime?: string;
  nightauditmode?: string;
  nightauditcalendardate?: string;
  nightoutoccrmstatus?: number;
  nightoutvacrmstatus?: number;
  nightoutoccrmstatuson?: number;  // Default: text("'1'"
  isaddserviceimpact?: number;  // Default: 0
  nightoutvacrmstatuson?: number;  // Default: text("'1'"
  nightoutchkoutrmstatus?: number;
  noshowchrgtime?: number;
  noshowchrgtimetype?: string;
  chrgnoshowafter?: string;
  noshowchrg?: number;
  noshowchrgtype?: string;  // Default: text("'FV'"
  financialsday?: number;
  financialsmonth?: number;
  financialeday?: number;
  financialemonth?: number;
  earlychkintime?: number;
  earlychkintimetype?: string;  // Default: text("'h'"
  earlychkinchrg?: number;
  earlychkinchrgtype?: string;
  earlychkouttime?: number;
  earlychkouttimetype?: string;  // Default: text("'h'"
  earlychkoutchrg?: number;
  earlychkoutchrgtype?: string;
  latechkouttime?: number;
  latechkouttimetype?: string;
  latechkoutchrg?: number;
  latechkoutchrgtype?: string;
  language?: string;
  locale?: string;
  webbookcustpol?: string;
  webbookcust?: string;
  webbookcustdeptype?: string;
  webbookcustdepamt?: number;
  currencylocale?: string;
  mincancelfee?: number;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  roompricetype?: number;  // Default: 0
  hoteldecimalplace?: number;  // Default: text("'2'"
  hoteldecimalrange?: number;  // Default: text("'0.010000'"
  taxmode?: number;  // Default: text("'1'"
  ishoteltaxpresent?: number;  // Default: text("'1'"
  istaxbreakupinposinvoice?: number;  // Default: 0
  isnetcommission?: number;  // Default: 0
  isadjustmentshown?: number;  // Default: 0
  accountfoliodate?: number;  // Default: 0
  depositalert?: number;  // Default: 0
  taxheadingshown?: number;  // Default: 0
  deleterooms?: string;  // Default: 0
  ccmail?: string;
  showtaxper?: string;  // Default: text("'1'"
  nightoutchangermstatus?: number;  // Default: text("'2'"
  cancelcheckinstatusvalue?: number;  // Default: text("'1'"
  showtaxperinaccstmt?: string;  // Default: 0
  grouptaxinposreceipt?: number;  // Default: 0
  istaxbreakupinaccstmt?: number;  // Default: 0
  dnrreleasechangermstatus?: number;  // Default: text("'6'"
}

// Create interface - for new entity creation
export interface ICreateHotelSettings {
  hotelid: number;
  currencyid?: number;
  financialyear?: number;
  convertionrate?: string;
  convertionmargin?: number;
  bookingtype?: string;
  dateformat?: string;
  timezone?: string;
  timezonediff?: number;
  timeformat?: string;
  checkintime?: string;
  checkouttime?: string;
  ageforchild?: number;
  minageforchild?: number;
  ageforinfant?: number;
  globaltravelagentcomm?: number;
  globalcorpagentcomm?: number;
  daysbfrblockedrmsavailable?: number;
  interimpamntd?: number;
  nightaudittime?: string;
  nightauditmode?: string;
  nightauditcalendardate?: string;
  nightoutoccrmstatus?: number;
  nightoutvacrmstatus?: number;
  nightoutoccrmstatuson?: number;
  isaddserviceimpact?: number;
  nightoutvacrmstatuson?: number;
  nightoutchkoutrmstatus?: number;
  noshowchrgtime?: number;
  noshowchrgtimetype?: string;
  chrgnoshowafter?: string;
  noshowchrg?: number;
  noshowchrgtype?: string;
  financialsday?: number;
  financialsmonth?: number;
  financialeday?: number;
  financialemonth?: number;
  earlychkintime?: number;
  earlychkintimetype?: string;
  earlychkinchrg?: number;
  earlychkinchrgtype?: string;
  earlychkouttime?: number;
  earlychkouttimetype?: string;
  earlychkoutchrg?: number;
  earlychkoutchrgtype?: string;
  latechkouttime?: number;
  latechkouttimetype?: string;
  latechkoutchrg?: number;
  latechkoutchrgtype?: string;
  language?: string;
  locale?: string;
  webbookcustpol?: string;
  webbookcust?: string;
  webbookcustdeptype?: string;
  webbookcustdepamt?: number;
  currencylocale?: string;
  mincancelfee?: number;
  modifiedby?: number;
  roompricetype?: number;
  hoteldecimalplace?: number;
  hoteldecimalrange?: number;
  taxmode?: number;
  ishoteltaxpresent?: number;
  istaxbreakupinposinvoice?: number;
  isnetcommission?: number;
  isadjustmentshown?: number;
  accountfoliodate?: number;
  depositalert?: number;
  taxheadingshown?: number;
  deleterooms?: string;
  ccmail?: string;
  showtaxper?: string;
  nightoutchangermstatus?: number;
  cancelcheckinstatusvalue?: number;
  showtaxperinaccstmt?: string;
  grouptaxinposreceipt?: number;
  istaxbreakupinaccstmt?: number;
  dnrreleasechangermstatus?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelSettings {
  hotelid?: number;
  currencyid?: number;
  financialyear?: number;
  convertionrate?: string;
  convertionmargin?: number;
  bookingtype?: string;
  dateformat?: string;
  timezone?: string;
  timezonediff?: number;
  timeformat?: string;
  checkintime?: string;
  checkouttime?: string;
  ageforchild?: number;
  minageforchild?: number;
  ageforinfant?: number;
  globaltravelagentcomm?: number;
  globalcorpagentcomm?: number;
  daysbfrblockedrmsavailable?: number;
  interimpamntd?: number;
  nightaudittime?: string;
  nightauditmode?: string;
  nightauditcalendardate?: string;
  nightoutoccrmstatus?: number;
  nightoutvacrmstatus?: number;
  nightoutoccrmstatuson?: number;
  isaddserviceimpact?: number;
  nightoutvacrmstatuson?: number;
  nightoutchkoutrmstatus?: number;
  noshowchrgtime?: number;
  noshowchrgtimetype?: string;
  chrgnoshowafter?: string;
  noshowchrg?: number;
  noshowchrgtype?: string;
  financialsday?: number;
  financialsmonth?: number;
  financialeday?: number;
  financialemonth?: number;
  earlychkintime?: number;
  earlychkintimetype?: string;
  earlychkinchrg?: number;
  earlychkinchrgtype?: string;
  earlychkouttime?: number;
  earlychkouttimetype?: string;
  earlychkoutchrg?: number;
  earlychkoutchrgtype?: string;
  latechkouttime?: number;
  latechkouttimetype?: string;
  latechkoutchrg?: number;
  latechkoutchrgtype?: string;
  language?: string;
  locale?: string;
  webbookcustpol?: string;
  webbookcust?: string;
  webbookcustdeptype?: string;
  webbookcustdepamt?: number;
  currencylocale?: string;
  mincancelfee?: number;
  modifiedby?: number;
  roompricetype?: number;
  hoteldecimalplace?: number;
  hoteldecimalrange?: number;
  taxmode?: number;
  ishoteltaxpresent?: number;
  istaxbreakupinposinvoice?: number;
  isnetcommission?: number;
  isadjustmentshown?: number;
  accountfoliodate?: number;
  depositalert?: number;
  taxheadingshown?: number;
  deleterooms?: string;
  ccmail?: string;
  showtaxper?: string;
  nightoutchangermstatus?: number;
  cancelcheckinstatusvalue?: number;
  showtaxperinaccstmt?: string;
  grouptaxinposreceipt?: number;
  istaxbreakupinaccstmt?: number;
  dnrreleasechangermstatus?: number;
}
