/**
 * Inthira Model Interfaces
 * Database table: _inthira
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInthira {
  id?: string;  // Default: 0
  hotelid?: number;  // Default: 0
  counterid?: number;
  rsvid?: string;  // Default: 0
  groupid?: string;  // Default: 0
  rsvrmtrifid?: string;  // Default: 0
  rsvrmid?: string;  // Default: 0
  rmtypeid?: string;  // Default: 0
  roomid?: string;
  pkgid?: number;  // Default: 0
  inclgrpid?: number;  // Default: 0
  inclid?: string;  // Default: 0
  posid?: number;  // Default: 0
  productid?: string;  // Default: 0
  name: string;  // Required
  custdescription?: string;
  guestid?: string;  // Default: 0
  foliono: string;  // Required
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transfotfolio: string;  // Required
  actualprice?: number;  // Default: 0.000000
  price?: number;
  weekdaytype: string;  // Required
  rmrent?: number;
  rmrateid?: string;  // Default: 0
  xtrpersonrent?: number;
  xtrbedrent?: number;
  quantity?: number;  // Default: 0.000000
  xtrbeds?: number;  // Default: 0
  xtrpersons?: number;  // Default: 0
  adult?: number;
  child?: number;
  totalprice?: number;
  discount?: number;  // Default: 0.000000
  discounttype?: string;
  discountamount?: number;
  discountreason: string;  // Required
  priceaftdisc?: number;
  tax?: number;
  nettotals?: number;
  fee?: number;  // Default: 0.000000
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
  share1?: number;  // Default: 0.000000
  share2?: number;  // Default: 0.000000
  share3?: number;  // Default: 0.000000
  share4?: number;  // Default: 0.000000
  share5?: number;  // Default: 0.000000
  amtpadinfotlio?: number;  // Default: 0.000000
  amtobreroute?: number;  // Default: 0.000000
  groupowner?: number;  // Default: 0.000000
  usedquantity?: number;  // Default: 0
  accid?: string;  // Default: 0
  parentrefid?: string;  // Default: 0
  ispaidbyguest?: number;  // Default: 0
  discren?: string;
  discrenid?: number;  // Default: 0
  napostingdate?: Date;  // Default: '0000-00-00'
  isfoliogenerate?: number;  // Default: 0
  promocodediscount?: number;  // Default: 0.000000
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;  // Default: 0
  value6?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateInthira {
  id?: string;
  hotelid?: number;
  counterid?: number;
  rsvid?: string;
  groupid?: string;
  rsvrmtrifid?: string;
  rsvrmid?: string;
  rmtypeid?: string;
  roomid?: string;
  pkgid?: number;
  inclgrpid?: number;
  inclid?: string;
  posid?: number;
  productid?: string;
  name: string;
  custdescription?: string;
  guestid?: string;
  foliono: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transfotfolio: string;
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
  nettotals?: number;
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
  amtpadinfotlio?: number;
  amtobreroute?: number;
  groupowner?: number;
  usedquantity?: number;
  accid?: string;
  parentrefid?: string;
  ispaidbyguest?: number;
  discren?: string;
  discrenid?: number;
  napostingdate?: Date;
  isfoliogenerate?: number;
  promocodediscount?: number;
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;
  value6?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInthira {
  id?: string;
  hotelid?: number;
  counterid?: number;
  rsvid?: string;
  groupid?: string;
  rsvrmtrifid?: string;
  rsvrmid?: string;
  rmtypeid?: string;
  roomid?: string;
  pkgid?: number;
  inclgrpid?: number;
  inclid?: string;
  posid?: number;
  productid?: string;
  name?: string;
  custdescription?: string;
  guestid?: string;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  transfotfolio?: string;
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
  nettotals?: number;
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
  amtpadinfotlio?: number;
  amtobreroute?: number;
  groupowner?: number;
  usedquantity?: number;
  accid?: string;
  parentrefid?: string;
  ispaidbyguest?: number;
  discren?: string;
  discrenid?: number;
  napostingdate?: Date;
  isfoliogenerate?: number;
  promocodediscount?: number;
  originalxml?: string;
  value1?: string;
  taxappliedon?: string;
  value3?: string;
  value4?: string;
  roomnights?: number;
  value6?: number;
}
