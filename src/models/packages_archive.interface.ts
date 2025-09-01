/**
 * PackagesArchive Model
 * Database table: packagesarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPackagesArchive {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
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

export interface ICreatePackagesArchive {
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