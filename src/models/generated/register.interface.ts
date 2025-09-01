/**
 * Register Model Interfaces
 * Database table: register
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRegister {
  id?: string;  // Primary key - auto-generated
  fname?: string;
  lname?: string;
  hotelname?: string;
  email?: string;
  webadress?: string;
  phoneno?: string;
  country?: string;
  state?: string;
  isverified?: string;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  status?: string;  // Default: 0
  hotelid?: number;
  utmsource?: string;
  utmmedium?: string;
  utmcampaign?: string;
  request?: string;
  source?: string;
  comment?: string;
  ftphost?: string;
  ftppassword?: string;
  password?: string;
  message?: string;
  code?: string;
  lang?: string;  // Default: 0
  inhubspot?: string;  // Default: 0
  address?: string;
  timezone?: string;
  currencycode?: string;
  countryname?: string;
  statename?: string;
  verifycode?: string;
  telephone?: string;
  city?: string;
  zip?: string;
  lng?: string;
  lat?: string;
  placeid?: string;
  datasource?: string;
  vcodetime?: string;
  vcodestatus?: string;  // Default: 0
  miscdata?: string;
}

// Create interface - for new entity creation
export interface ICreateRegister {
  fname?: string;
  lname?: string;
  hotelname?: string;
  email?: string;
  webadress?: string;
  phoneno?: string;
  country?: string;
  state?: string;
  isverified?: string;
  status?: string;
  hotelid?: number;
  utmsource?: string;
  utmmedium?: string;
  utmcampaign?: string;
  request?: string;
  source?: string;
  comment?: string;
  ftphost?: string;
  ftppassword?: string;
  password?: string;
  message?: string;
  code?: string;
  lang?: string;
  inhubspot?: string;
  address?: string;
  timezone?: string;
  currencycode?: string;
  countryname?: string;
  statename?: string;
  verifycode?: string;
  telephone?: string;
  city?: string;
  zip?: string;
  lng?: string;
  lat?: string;
  placeid?: string;
  datasource?: string;
  vcodetime?: string;
  vcodestatus?: string;
  miscdata?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRegister {
  fname?: string;
  lname?: string;
  hotelname?: string;
  email?: string;
  webadress?: string;
  phoneno?: string;
  country?: string;
  state?: string;
  isverified?: string;
  status?: string;
  hotelid?: number;
  utmsource?: string;
  utmmedium?: string;
  utmcampaign?: string;
  request?: string;
  source?: string;
  comment?: string;
  ftphost?: string;
  ftppassword?: string;
  password?: string;
  message?: string;
  code?: string;
  lang?: string;
  inhubspot?: string;
  address?: string;
  timezone?: string;
  currencycode?: string;
  countryname?: string;
  statename?: string;
  verifycode?: string;
  telephone?: string;
  city?: string;
  zip?: string;
  lng?: string;
  lat?: string;
  placeid?: string;
  datasource?: string;
  vcodetime?: string;
  vcodestatus?: string;
  miscdata?: string;
}
