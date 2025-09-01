/**
 * UserHotelPermissions Model
 * Database table: userhotelpermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserHotelPermissions {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  userid?: number;
  hotelid?: number;
  hotelusertypeid?: number;
  permission?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  lastloggedin?: Date;
  sessionid?: string;
  counterid?: number;
  countersessionid?: number;
  logedoutbyadmin?: number;
  lastupdatedon?: Date;
  lastpulseat?: Date;
  isgodmode?: number;
  firstapploggedin?: Date;
  lastapploggedin?: Date;
  regsource?: string;
  resetloginexpire?: number;
}

export interface ICreateUserHotelPermissions {
  compid?: number;
  userid?: number;
  hotelid?: number;
  hotelusertypeid?: number;
  permission?: string;
  createdby?: number;
  lastloggedin?: Date;
  sessionid?: string;
  counterid?: number;
  countersessionid?: number;
  logedoutbyadmin?: number;
  lastupdatedon?: Date;
  lastpulseat?: Date;
  isgodmode?: number;
  firstapploggedin?: Date;
  lastapploggedin?: Date;
  regsource?: string;
  resetloginexpire?: number;
}
export interface IUpdateUserHotelPermissions {
  compid?: number;
  userid?: number;
  hotelid?: number;
  hotelusertypeid?: number;
  permission?: string;
  createdby?: number;
  lastloggedin?: Date;
  sessionid?: string;
  counterid?: number;
  countersessionid?: number;
  logedoutbyadmin?: number;
  lastupdatedon?: Date;
  lastpulseat?: Date;
  isgodmode?: number;
  firstapploggedin?: Date;
  lastapploggedin?: Date;
  regsource?: string;
  resetloginexpire?: number;
}