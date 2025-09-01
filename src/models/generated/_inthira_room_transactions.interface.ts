/**
 * InthiraRoomTransactions Model Interfaces
 * Database table: _inthiraRoomTransactions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInthiraRoomTransactions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Default: db.text("'0'"
  counterid?: number;
  rsvid?: number;  // Default: db.text("'0'"
  groupid?: number;  // Default: db.text("'0'"
  rsvrmtrifid?: number;  // Default: db.text("'0'"
  rsvrmid?: number;  // Default: db.text("'0'"
  rmtpeid?: number;  // Default: db.text("'0'"
  roomid?: number;
  pkgid?: number;  // Default: db.text("'0'"
  inclgrpid?: number;  // Default: db.text("'0'"
  inclid?: number;  // Default: db.text("'0'"
  posid?: number;  // Default: db.text("'0'"
  productid?: number;  // Default: db.text("'0'"
  name: string;  // Required
  custdescription?: string;
  guestid?: number;  // Default: db.text("'0'"
  foliono: string;  // Required
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transfToFolio: string;  // Required
  actualprice?: number;  // Default: db.text("'0.000000'"
  price?: number;
  weekdaytype: string;  // Required
  rmrent?: number;
  rmrateid?: number;  // Default: db.text("'0'"
  xtrpersonrent?: number;
  xtrbedrent?: number;
  quantity?: number;  // Default: db.text("'0.000000'"
  xtrbeds?: number;  // Default: db.text("'0'"
  xtrpersons?: number;  // Default: db.text("'0'"
  adult?: number;
  child?: number;
  totalprice?: number;
  discount?: number;  // Default: db.text("'0.000000'"
  discounttype?: string;
  discountamount?: number;
  discountreason: string;  // Required
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;  // Default: db.text("'0.000000'"
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
  share1?: number;  // Default: db.text("'0.000000'"
  share2?: number;  // Default: db.text("'0.000000'"
  share3?: number;  // Default: db.text("'0.000000'"
  share4?: number;  // Default: db.text("'0.000000'"
  share5?: number;  // Default: db.text("'0.000000'"
  amtpaidinfolio?: number;  // Default: db.text("'0.000000'"
  amttoberoute?: number;  // Default: db.text("'0.000000'"
  groupowner?: number;  // Default: db.text("'0.000000'"
  usedquantity?: number;  // Default: db.text("'0'"
  accid?: number;  // Default: db.text("'0'"
  parentrefid?: number;  // Default: db.text("'0'"
  ispaidbyguest?: number;  // Default: db.text("'0'"
  discrreason?: string;
  discrreasonid?: number;  // Default: db.text("'0'"
  napostingdate?: Date;  // Default: db.text("'0000-00-00'"
  isfolioGenerated?: number;  // Default: db.text("'0'"
  promocodedisc?: number;  // Default: db.text("'0.000000'"
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;  // Default: db.text("'0'"
  value6?: number;  // Default: db.text("'0'"
}

// Create interface - for new entity creation
export interface ICreateInthiraRoomTransactions {
  hotelid?: number;
  counterid?: number;
  rsvid?: number;
  groupid?: number;
  rsvrmtrifid?: number;
  rsvrmid?: number;
  rmtpeid?: number;
  roomid?: number;
  pkgid?: number;
  inclgrpid?: number;
  inclid?: number;
  posid?: number;
  productid?: number;
  name: string;
  custdescription?: string;
  guestid?: number;
  foliono: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transfToFolio: string;
  actualprice?: number;
  price?: number;
  weekdaytype: string;
  rmrent?: number;
  rmrateid?: number;
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
  accid?: number;
  parentrefid?: number;
  ispaidbyguest?: number;
  discrreason?: string;
  discrreasonid?: number;
  napostingdate?: Date;
  isfolioGenerated?: number;
  promocodedisc?: number;
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;
  value6?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInthiraRoomTransactions {
  hotelid?: number;
  counterid?: number;
  rsvid?: number;
  groupid?: number;
  rsvrmtrifid?: number;
  rsvrmid?: number;
  rmtpeid?: number;
  roomid?: number;
  pkgid?: number;
  inclgrpid?: number;
  inclid?: number;
  posid?: number;
  productid?: number;
  name?: string;
  custdescription?: string;
  guestid?: number;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transfToFolio?: string;
  actualprice?: number;
  price?: number;
  weekdaytype?: string;
  rmrent?: number;
  rmrateid?: number;
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
  accid?: number;
  parentrefid?: number;
  ispaidbyguest?: number;
  discrreason?: string;
  discrreasonid?: number;
  napostingdate?: Date;
  isfolioGenerated?: number;
  promocodedisc?: number;
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;
  value6?: number;
}
