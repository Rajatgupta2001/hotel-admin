/**
 * HotelSettingsHistory Model Interfaces
 * Database table: hotelSettingsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelSettingsHistory {
  id?: number;  // Primary key - auto-generated
  refid?: number;
  hotelid: number;  // Required
  currencyid: number;  // Required
  financialyear: number;  // Required
  convertionrate: string;  // Required
  convertionmargin?: number;
  bookingtype: string;  // Required
  dateformat: string;  // Required
  timezone: string;  // Required
  timeformat: string;  // Required
  checkintime: string;  // Required
  checkouttime: string;  // Required
  ageforchild: number;  // Required
  ageforinfant: number;  // Required
  globaltravelagentcomm?: number;
  globalcorpagentcomm?: number;
  daysbfrblockedrmsavailable: number;  // Required
  interimpamntd: number;  // Required
  nightauditime: string;  // Required
  nightauditmode: string;  // Required
  nightoutoccrmstatus: number;  // Required
  nightoutvacrmstatus: number;  // Required
  nightoutchkoutrmstatus: number;  // Required
  noshowchrgtime: number;  // Required
  noshowchrgtimetype: string;  // Required
  chrgnoshowafter: string;  // Required
  noshowchrg?: number;
  noshowchrgtype: string;  // Required
  financialsday?: number;
  financialsmonth?: number;
  financialeday?: number;
  financialemonth?: number;
  earlychkinntime?: number;
  earlychkinntimeype?: string;  // Default: 'h'
  earlychkchrg?: number;
  earlychkchrgtype?: string;
  earlychkouttime?: number;
  earlychkouttimetype?: string;  // Default: 'h'
  earlychkoutchrg?: number;
  earlychkoutchrgtype?: string;
  latechkouttime?: number;
  latechkouttimetype?: string;
  latechkoutchrg?: number;
  latechkoutchrgtype?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelSettingsHistory {
  refid?: number;
  hotelid: number;
  currencyid: number;
  financialyear: number;
  convertionrate: string;
  convertionmargin?: number;
  bookingtype: string;
  dateformat: string;
  timezone: string;
  timeformat: string;
  checkintime: string;
  checkouttime: string;
  ageforchild: number;
  ageforinfant: number;
  globaltravelagentcomm?: number;
  globalcorpagentcomm?: number;
  daysbfrblockedrmsavailable: number;
  interimpamntd: number;
  nightauditime: string;
  nightauditmode: string;
  nightoutoccrmstatus: number;
  nightoutvacrmstatus: number;
  nightoutchkoutrmstatus: number;
  noshowchrgtime: number;
  noshowchrgtimetype: string;
  chrgnoshowafter: string;
  noshowchrg?: number;
  noshowchrgtype: string;
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

// Update interface - for entity updates (all fields optional)
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
