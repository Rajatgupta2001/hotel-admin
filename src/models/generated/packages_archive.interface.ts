/**
 * PackagesArchive Model Interfaces
 * Database table: packagesArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPackagesArchive {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgname: string;  // Required
  pkgshortname: string;  // Required
  description: string;  // Required
  inclusiveoftax?: number;  // Default: 0
  refid?: number;
  reftype?: string;
  minstay: number;  // Required
  isprorated?: number;  // Default: 0
  commissionable?: number;  // Default: text("'1'"
  agentcom?: number;
  comtype: string;  // Required
  discountable?: number;  // Default: 0
  discount?: number;  // Default: text("'0.000000'"
  disctype?: string;  // Default: text("'FV'"
  autoupdateprice?: number;  // Default: 0
  weekdaytype?: string;
  weekdayhl?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  parentpkgid?: number;  // Default: 0
  sessionid?: number;
  oldpkgid?: number;  // Default: 0
  freenight?: number;  // Default: 0
  freenighttype?: string;  // Default: text("'FV'"
  freenightrmprice?: number;  // Default: 0
  minstayfordiscount?: number;  // Default: 0
  isconfigured?: number;  // Default: 0
  gdsmealattribute?: number;  // Default: 0
  shortorder?: number;
  isalloted?: number;  // Default: 0
  fdpkgshowincorp?: number;  // Default: 0
  fdpkgshowinagent?: number;  // Default: 0
  gdstravelagent?: number;  // Default: 0
  ismarkuprate?: number;  // Default: 0
  marginfixedcommission?: number;  // Default: text("'0.000000'"
  bookreceiveinclusiveoftax?: number;  // Default: 0
  includeschannelcut?: number;  // Default: 0
  sendsellrate?: number;  // Default: 0
  bookedonbaseoccupancy?: number;  // Default: 0
  calculatecommissioninbaserate?: number;  // Default: 0
  donotconsiderxmlrate?: number;  // Default: 0
  bookingpayterm?: number;  // Default: text("'1'"
  isfeatured?: number;  // Default: 0
  centralpkgid?: number;
  postingrhythm?: string;
  postingday?: number;
}

// Create interface - for new entity creation
export interface ICreatePackagesArchive {
  hotelid: number;
  pkgname: string;
  pkgshortname: string;
  description: string;
  inclusiveoftax?: number;
  refid?: number;
  reftype?: string;
  minstay: number;
  isprorated?: number;
  commissionable?: number;
  agentcom?: number;
  comtype: string;
  discountable?: number;
  discount?: number;
  disctype?: string;
  autoupdateprice?: number;
  weekdaytype?: string;
  weekdayhl?: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
  parentpkgid?: number;
  sessionid?: number;
  oldpkgid?: number;
  freenight?: number;
  freenighttype?: string;
  freenightrmprice?: number;
  minstayfordiscount?: number;
  isconfigured?: number;
  gdsmealattribute?: number;
  shortorder?: number;
  isalloted?: number;
  fdpkgshowincorp?: number;
  fdpkgshowinagent?: number;
  gdstravelagent?: number;
  ismarkuprate?: number;
  marginfixedcommission?: number;
  bookreceiveinclusiveoftax?: number;
  includeschannelcut?: number;
  sendsellrate?: number;
  bookedonbaseoccupancy?: number;
  calculatecommissioninbaserate?: number;
  donotconsiderxmlrate?: number;
  bookingpayterm?: number;
  isfeatured?: number;
  centralpkgid?: number;
  postingrhythm?: string;
  postingday?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePackagesArchive {
  hotelid?: number;
  pkgname?: string;
  pkgshortname?: string;
  description?: string;
  inclusiveoftax?: number;
  refid?: number;
  reftype?: string;
  minstay?: number;
  isprorated?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  discountable?: number;
  discount?: number;
  disctype?: string;
  autoupdateprice?: number;
  weekdaytype?: string;
  weekdayhl?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  parentpkgid?: number;
  sessionid?: number;
  oldpkgid?: number;
  freenight?: number;
  freenighttype?: string;
  freenightrmprice?: number;
  minstayfordiscount?: number;
  isconfigured?: number;
  gdsmealattribute?: number;
  shortorder?: number;
  isalloted?: number;
  fdpkgshowincorp?: number;
  fdpkgshowinagent?: number;
  gdstravelagent?: number;
  ismarkuprate?: number;
  marginfixedcommission?: number;
  bookreceiveinclusiveoftax?: number;
  includeschannelcut?: number;
  sendsellrate?: number;
  bookedonbaseoccupancy?: number;
  calculatecommissioninbaserate?: number;
  donotconsiderxmlrate?: number;
  bookingpayterm?: number;
  isfeatured?: number;
  centralpkgid?: number;
  postingrhythm?: string;
  postingday?: number;
}
