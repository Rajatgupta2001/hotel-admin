/**
 * Packages Model
 * Database table: packages
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPackages {
  id?: string;  // Primary key - auto-generated
  hotelid: string;  // Required
  pkgname?: string;
  pkgshortname?: string;
  description: string;  // Required
  inclusiveoftax?: number;  // Default: 0 (backend)
  refid?: number;  // Default: 0 (backend)
  reftype?: string;
  minstay: number;  // Required
  isprorated?: number;  // Default: 0 (backend)
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  discountable?: number;  // Default: 0 (backend)
  discount?: number;
  disctype?: string;
  autoupdateprice?: number;  // Default: 0 (backend)
  weekdaytype?: string;
  weekdayhl?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  parentpkgid?: Date;  // Default: 0 (backend)
  freenight?: number;  // Default: 0 (backend)
  freenighttype?: string;
  freenightrmprice?: number;  // Default: 0 (backend)
  minstayfordiscount?: number;  // Default: 0 (backend)
  isconfigured?: number;  // Default: 0 (backend)
  gdsmealattribute?: number;  // Default: 0 (backend)
  shortorder?: number;  // Default: 0 (backend)
  fdpkgshowincorp?: number;  // Default: 0 (backend)
  fdpkgshowinagent?: number;  // Default: 0 (backend)
  gdstravelagent?: number;  // Default: 0 (backend)
  ismarkuprate?: number;  // Default: 0 (backend)
  marginfixedcommission?: number;
  bookreceiveinclusiveoftax?: number;  // Default: 0 (backend)
  includeschannelcut?: number;  // Default: 0 (backend)
  sendsellrate?: number;  // Default: 0 (backend)
  bookedonbaseoccupancy?: number;  // Default: 0 (backend)
  calculatecommissioninbaserate?: number;  // Default: 0 (backend)
  donotconsiderxmlrate?: number;  // Default: 0 (backend)
  bookingpayterm?: number;
  isfeatured?: number;  // Default: 0 (backend)
  centralpkgid?: number;
  postingrhythm?: string;
  postingday?: number;
  freefromnight?: number;
  freenoofnights?: number;  // Default: 0 (backend)
  postinclusivetax?: number;  // Default: 0 (backend)
  pkgtype?: string;
  whatchanged?: string;
  bookedonxmlrate?: number;  // Default: 0 (backend)
  bookedonhotelogixrate?: number;  // Default: 0 (backend)
  defaultcurrencyview?: number;  // Default: 0 (backend)
  maxsyncdate?: Date;
  pricemodifier?: number;
  sentmodifierfv?: number;
  sentmodifierpv?: number;
  receivemodifierfv?: number;
  receivemodifierpv?: number;
  changedon?: Date;
  autoupdatewithtax?: number;  // Default: 0 (backend)
  syncoff?: number;  // Default: 0 (backend)
  alternaterateid?: number;
  rulesyncwithsysdes?: number;
  isadvanceposting?: number;  // Default: 0 (backend)
  isdefault?: number;  // Default: 0 (backend)
  isdayuse?: number;  // Default: 0 (backend)
  duslotid?: number;  // Default: 0 (backend)
  mealplan?: string;
  exctaxsentrate?: string;
  inctaxbkgreceive?: string;
}

export interface ICreatePackages {
  hotelid: string;
  pkgname?: string;
  pkgshortname?: string;
  description: string;
  inclusiveoftax?: number;
  refid?: number;
  reftype?: string;
  minstay: number;
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
  parentpkgid?: Date;
  freenight?: number;
  freenighttype?: string;
  freenightrmprice?: number;
  minstayfordiscount?: number;
  isconfigured?: number;
  gdsmealattribute?: number;
  shortorder?: number;
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
  freefromnight?: number;
  freenoofnights?: number;
  postinclusivetax?: number;
  pkgtype?: string;
  whatchanged?: string;
  bookedonxmlrate?: number;
  bookedonhotelogixrate?: number;
  defaultcurrencyview?: number;
  maxsyncdate?: Date;
  pricemodifier?: number;
  sentmodifierfv?: number;
  sentmodifierpv?: number;
  receivemodifierfv?: number;
  receivemodifierpv?: number;
  changedon?: Date;
  autoupdatewithtax?: number;
  syncoff?: number;
  alternaterateid?: number;
  rulesyncwithsysdes?: number;
  isadvanceposting?: number;
  isdefault?: number;
  isdayuse?: number;
  duslotid?: number;
  mealplan?: string;
  exctaxsentrate?: string;
  inctaxbkgreceive?: string;
}
export interface IUpdatePackages {
  hotelid?: string;
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
  parentpkgid?: Date;
  freenight?: number;
  freenighttype?: string;
  freenightrmprice?: number;
  minstayfordiscount?: number;
  isconfigured?: number;
  gdsmealattribute?: number;
  shortorder?: number;
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
  freefromnight?: number;
  freenoofnights?: number;
  postinclusivetax?: number;
  pkgtype?: string;
  whatchanged?: string;
  bookedonxmlrate?: number;
  bookedonhotelogixrate?: number;
  defaultcurrencyview?: number;
  maxsyncdate?: Date;
  pricemodifier?: number;
  sentmodifierfv?: number;
  sentmodifierpv?: number;
  receivemodifierfv?: number;
  receivemodifierpv?: number;
  changedon?: Date;
  autoupdatewithtax?: number;
  syncoff?: number;
  alternaterateid?: number;
  rulesyncwithsysdes?: number;
  isadvanceposting?: number;
  isdefault?: number;
  isdayuse?: number;
  duslotid?: number;
  mealplan?: string;
  exctaxsentrate?: string;
  inctaxbkgreceive?: string;
}