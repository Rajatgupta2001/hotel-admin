/**
 * HotelSettingsHistory Model
 * Database table: hotelsettingshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelSettingsHistory {
  id?: number;  // Primary key - auto-generated
  refid?: number;
  hotelid?: number;
  currencyid?: number;
  financialyear?: number;
  convertionrate?: string;
  convertionmargin?: number;
  bookingtype?: string;
  dateformat?: string;
  timezone?: string;
  timeformat?: string;
  checkintime?: string;
  checkouttime?: string;
  ageforchild?: number;
  ageforinfant?: number;
  globaltravelagentcomm?: number;
  globalcorpagentcomm?: number;
  daysbfrblockedrmsavailable?: number;
  interimpamntd?: number;
  nightauditime?: string;
  nightauditmode?: string;
  nightoutoccrmstatus?: number;
  nightoutvacrmstatus?: number;
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
  earlychkinntime?: number;
  earlychkinntimeype?: string;
  earlychkchrg?: number;
  earlychkchrgtype?: string;
  earlychkouttime?: number;
  earlychkouttimetype?: string;
  earlychkoutchrg?: number;
  earlychkoutchrgtype?: string;
  latechkouttime?: number;
  latechkouttimetype?: string;
  latechkoutchrg?: number;
  latechkoutchrgtype?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelSettingsHistory {
  refid?: number;
  hotelid?: number;
  currencyid?: number;
  financialyear?: number;
  convertionrate?: string;
  convertionmargin?: number;
  bookingtype?: string;
  dateformat?: string;
  timezone?: string;
  timeformat?: string;
  checkintime?: string;
  checkouttime?: string;
  ageforchild?: number;
  ageforinfant?: number;
  globaltravelagentcomm?: number;
  globalcorpagentcomm?: number;
  daysbfrblockedrmsavailable?: number;
  interimpamntd?: number;
  nightauditime?: string;
  nightauditmode?: string;
  nightoutoccrmstatus?: number;
  nightoutvacrmstatus?: number;
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
  earlychkinntime?: number;
  earlychkinntimeype?: string;
  earlychkchrg?: number;
  earlychkchrgtype?: string;
  earlychkouttime?: number;
  earlychkouttimetype?: string;
  earlychkoutchrg?: number;
  earlychkoutchrgtype?: string;
  latechkouttime?: number;
  latechkouttimetype?: string;
  latechkoutchrg?: number;
  latechkoutchrgtype?: string;
  modifiedby?: number;
}
export interface IUpdateHotelSettingsHistory {
  refid?: number;
  hotelid?: number;
  currencyid?: number;
  financialyear?: number;
  convertionrate?: string;
  convertionmargin?: number;
  bookingtype?: string;
  dateformat?: string;
  timezone?: string;
  timeformat?: string;
  checkintime?: string;
  checkouttime?: string;
  ageforchild?: number;
  ageforinfant?: number;
  globaltravelagentcomm?: number;
  globalcorpagentcomm?: number;
  daysbfrblockedrmsavailable?: number;
  interimpamntd?: number;
  nightauditime?: string;
  nightauditmode?: string;
  nightoutoccrmstatus?: number;
  nightoutvacrmstatus?: number;
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
  earlychkinntime?: number;
  earlychkinntimeype?: string;
  earlychkchrg?: number;
  earlychkchrgtype?: string;
  earlychkouttime?: number;
  earlychkouttimetype?: string;
  earlychkoutchrg?: number;
  earlychkoutchrgtype?: string;
  latechkouttime?: number;
  latechkouttimetype?: string;
  latechkoutchrg?: number;
  latechkoutchrgtype?: string;
  modifiedby?: number;
}