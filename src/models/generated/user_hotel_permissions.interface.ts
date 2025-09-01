/**
 * UserHotelPermissions Model Interfaces
 * Database table: userHotelPermissions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserHotelPermissions {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  userid?: number;
  hotelid?: number;
  hotelusertypeid?: number;  // Default: 0
  permission?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  lastloggedin?: Date;
  sessionid?: string;
  counterid?: number;  // Default: 0
  countersessionid?: number;
  logedoutbyadmin?: number;  // Default: 0
  lastupdatedon?: Date;
  lastpulseat?: Date;
  isgodmode?: number;  // Default: 0
  firstapploggedin?: Date;
  lastapploggedin?: Date;
  regsource?: string;
  resetloginexpire?: number;  // Default: 0
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
