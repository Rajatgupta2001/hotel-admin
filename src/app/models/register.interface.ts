/**
 * Register Model
 * Database table: register
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  isverified?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  status?: Date;  // Default: 0 (backend)
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
  inhubspot?: Date;  // Default: 0 (backend)
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
  vcodestatus?: Date;  // Default: 0 (backend)
  miscdata?: string;
}

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
  status?: Date;
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
  inhubspot?: Date;
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
  vcodestatus?: Date;
  miscdata?: string;
}
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
  status?: Date;
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
  inhubspot?: Date;
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
  vcodestatus?: Date;
  miscdata?: string;
}