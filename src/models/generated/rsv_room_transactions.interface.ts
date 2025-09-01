/**
 * RsvRoomTransactions Model Interfaces
 * Database table: rsvRoomTransactions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRoomTransactions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  counterid?: number;
  rsvid?: number;  // Primary key - auto-generated
  groupid?: string;  // Default: 0
  rsvrmtrifid?: number;  // Primary key - auto-generated
  rsvrmid?: number;  // Primary key - auto-generated
  rmtypeid?: string;  // Default: 0
  roomid?: string;
  pkgid?: number;  // Primary key - auto-generated
  inclgrpid?: number;  // Primary key - auto-generated
  inclid?: number;  // Primary key - auto-generated
  posid?: number;  // Primary key - auto-generated
  productid?: number;  // Primary key - auto-generated
  name: string;  // Required
  custdescription?: string;
  guestid?: number;  // Primary key - auto-generated
  foliono: string;  // Required
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transftofolio: string;  // Required
  actualprice?: number;  // Default: text("'0.000000'"
  price?: number;
  weekdaytype: string;  // Required
  rmrent?: number;
  rmrateid?: string;  // Default: 0
  xtrpersonrent?: number;
  xtrbedrent?: number;
  quantity?: number;  // Default: text("'0.000000'"
  xtrbeds?: number;  // Default: 0
  xtrpersons?: number;  // Default: 0
  adult?: number;
  child?: number;
  totalprice?: number;
  discount?: number;  // Default: text("'0.000000'"
  discounttype?: string;
  discountamount?: number;
  discountreason: string;  // Required
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;  // Default: text("'0.000000'"
  istaxexm: number;  // Required
  exmreason: string;  // Required
  donotprint: number;  // Required
  donotcharge: number;  // Required
  effectivedate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  transtype: string;  // Required
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  share1?: number;  // Default: text("'0.000000'"
  share2?: number;  // Default: text("'0.000000'"
  share3?: number;  // Default: text("'0.000000'"
  share4?: number;  // Default: text("'0.000000'"
  share5?: number;  // Default: text("'0.000000'"
  amtpaidinfolio?: number;  // Default: text("'0.000000'"
  amttoberoute?: number;  // Default: text("'0.000000'"
  groupowner?: number;  // Default: text("'0.000000'"
  usedquantity?: number;  // Default: 0
  accid?: string;  // Default: 0
  parentrefid?: string;  // Default: 0
  ispaidbyguest?: number;  // Default: 0
  discreason?: string;
  discreasonid?: number;  // Default: 0
  napostingdate?: Date;  // Default: text("'0000-00-00'"
  isfoliogenerated?: number;  // Default: 0
  promocodedisc?: number;  // Default: text("'0.000000'"
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;  // Default: 0
  movetotransid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvRoomTransactions {
  counterid?: number;
  groupid?: string;
  rmtypeid?: string;
  roomid?: string;
  name: string;
  custdescription?: string;
  foliono: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transftofolio: string;
  actualprice?: number;
  price?: number;
  weekdaytype: string;
  rmrent?: number;
  rmrateid?: string;
  xtrpersonrent?: number;
  xtrbedrent?: number;
  quantity?: number;
  xtrbeds?: number;
  xtrpersons?: number;
  adult?: number;
  child?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  discountamount?: number;
  discountreason: string;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  istaxexm: number;
  exmreason: string;
  donotprint: number;
  donotcharge: number;
  effectivedate: Date;
  createdby?: number;
  transtype: string;
  modifiedby?: number;
  share1?: number;
  share2?: number;
  share3?: number;
  share4?: number;
  share5?: number;
  amtpaidinfolio?: number;
  amttoberoute?: number;
  groupowner?: number;
  usedquantity?: number;
  accid?: string;
  parentrefid?: string;
  ispaidbyguest?: number;
  discreason?: string;
  discreasonid?: number;
  napostingdate?: Date;
  isfoliogenerated?: number;
  promocodedisc?: number;
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;
  movetotransid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRoomTransactions {
  counterid?: number;
  groupid?: string;
  rmtypeid?: string;
  roomid?: string;
  name?: string;
  custdescription?: string;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transftofolio?: string;
  actualprice?: number;
  price?: number;
  weekdaytype?: string;
  rmrent?: number;
  rmrateid?: string;
  xtrpersonrent?: number;
  xtrbedrent?: number;
  quantity?: number;
  xtrbeds?: number;
  xtrpersons?: number;
  adult?: number;
  child?: number;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  discountamount?: number;
  discountreason?: string;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  istaxexm?: number;
  exmreason?: string;
  donotprint?: number;
  donotcharge?: number;
  effectivedate?: Date;
  createdby?: number;
  transtype?: string;
  modifiedby?: number;
  share1?: number;
  share2?: number;
  share3?: number;
  share4?: number;
  share5?: number;
  amtpaidinfolio?: number;
  amttoberoute?: number;
  groupowner?: number;
  usedquantity?: number;
  accid?: string;
  parentrefid?: string;
  ispaidbyguest?: number;
  discreason?: string;
  discreasonid?: number;
  napostingdate?: Date;
  isfoliogenerated?: number;
  promocodedisc?: number;
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;
  movetotransid?: number;
}
