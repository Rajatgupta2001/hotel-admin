/**
 * InthiraAccountStatement Model Interfaces
 * Database table: _inthiraaccountSatement
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInthiraAccountStatement {
  id?: string;  // Default: 0
  hotelid?: number;  // Default: 0
  rsvid?: string;  // Default: 0
  groupid?: string;  // Default: 0
  rsvrmid?: string;
  roomid?: string;
  counterid?: number;  // Default: 0
  weekdaytype?: string;
  rmrent?: number;  // Default: 0.000000
  rsvrmtariffid?: number;
  rmrateid?: string;
  xtrpersonrent?: number;
  xtrbedrent?: number;
  xtrbeds?: number;  // Default: 0
  xtrpersons?: number;  // Default: 0
  adult?: number;
  child?: number;
  foliono?: string;
  pos2invoiceid?: number;
  pos2transid?: number;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  corpid?: string;
  agentid?: string;
  posinvoiceid?: number;
  rmtypeid?: string;
  pkgid?: number;
  posid?: number;
  inclid?: string;
  prodid?: number;
  title?: string;
  actualprice?: number;
  price?: number;
  quantity?: number;
  totalprice?: number;
  discount?: number;
  discountamount?: number;  // Default: 0.000000
  disctype?: string;  // Default: 'FV'
  discountreason?: string;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;  // Default: 0.000000
  istaxexm?: number;
  exmreason?: string;
  debitorcredit?: string;
  transtype?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  effectivedate?: Date;
  napostingdate?: Date;
  actualnapostdate?: Date;
  usedquantity?: number;  // Default: 0.000000
  refid?: string;
  isinclusion?: number;  // Default: 0
  movedtotrans?: number;  // Default: 0
  movedqty?: number;  // Default: 0.00
  isprocesses?: number;  // Default: 0
  transid?: string;  // Default: 0
  parentrefid?: string;  // Default: 0
  guestid?: number;  // Default: 0
  postransid?: string;  // Default: 0
  modifiededate?: Date;
  modifiedqty?: number;
  usedamount?: number;  // Default: 0.000000
  movedamount?: number;  // Default: 0.000000
  forcheckout?: number;  // Default: 0
  promocodedisc?: number;  // Default: 0.000000
  value1?: number;  // Default: 0.000000
  value2?: number;  // Default: 0.000000
  value3?: number;  // Default: 0.000000
  taxappliedon?: string;
  value5?: string;
  value6?: number;  // Default: 0
  slabtaxdata?: string;
}

// Create interface - for new entity creation
export interface ICreateInthiraAccountStatement {
  id?: string;
  hotelid?: number;
  rsvid?: string;
  groupid?: string;
  rsvrmid?: string;
  roomid?: string;
  counterid?: number;
  weekdaytype?: string;
  rmrent?: number;
  rsvrmtariffid?: number;
  rmrateid?: string;
  xtrpersonrent?: number;
  xtrbedrent?: number;
  xtrbeds?: number;
  xtrpersons?: number;
  adult?: number;
  child?: number;
  foliono?: string;
  pos2invoiceid?: number;
  pos2transid?: number;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  corpid?: string;
  agentid?: string;
  posinvoiceid?: number;
  rmtypeid?: string;
  pkgid?: number;
  posid?: number;
  inclid?: string;
  prodid?: number;
  title?: string;
  actualprice?: number;
  price?: number;
  quantity?: number;
  totalprice?: number;
  discount?: number;
  discountamount?: number;
  disctype?: string;
  discountreason?: string;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  istaxexm?: number;
  exmreason?: string;
  debitorcredit?: string;
  transtype?: string;
  createdby?: number;
  effectivedate?: Date;
  napostingdate?: Date;
  actualnapostdate?: Date;
  usedquantity?: number;
  refid?: string;
  isinclusion?: number;
  movedtotrans?: number;
  movedqty?: number;
  isprocesses?: number;
  transid?: string;
  parentrefid?: string;
  guestid?: number;
  postransid?: string;
  modifiededate?: Date;
  modifiedqty?: number;
  usedamount?: number;
  movedamount?: number;
  forcheckout?: number;
  promocodedisc?: number;
  value1?: number;
  value2?: number;
  value3?: number;
  taxappliedon?: string;
  value5?: string;
  value6?: number;
  slabtaxdata?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInthiraAccountStatement {
  id?: string;
  hotelid?: number;
  rsvid?: string;
  groupid?: string;
  rsvrmid?: string;
  roomid?: string;
  counterid?: number;
  weekdaytype?: string;
  rmrent?: number;
  rsvrmtariffid?: number;
  rmrateid?: string;
  xtrpersonrent?: number;
  xtrbedrent?: number;
  xtrbeds?: number;
  xtrpersons?: number;
  adult?: number;
  child?: number;
  foliono?: string;
  pos2invoiceid?: number;
  pos2transid?: number;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  corpid?: string;
  agentid?: string;
  posinvoiceid?: number;
  rmtypeid?: string;
  pkgid?: number;
  posid?: number;
  inclid?: string;
  prodid?: number;
  title?: string;
  actualprice?: number;
  price?: number;
  quantity?: number;
  totalprice?: number;
  discount?: number;
  discountamount?: number;
  disctype?: string;
  discountreason?: string;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  istaxexm?: number;
  exmreason?: string;
  debitorcredit?: string;
  transtype?: string;
  createdby?: number;
  effectivedate?: Date;
  napostingdate?: Date;
  actualnapostdate?: Date;
  usedquantity?: number;
  refid?: string;
  isinclusion?: number;
  movedtotrans?: number;
  movedqty?: number;
  isprocesses?: number;
  transid?: string;
  parentrefid?: string;
  guestid?: number;
  postransid?: string;
  modifiededate?: Date;
  modifiedqty?: number;
  usedamount?: number;
  movedamount?: number;
  forcheckout?: number;
  promocodedisc?: number;
  value1?: number;
  value2?: number;
  value3?: number;
  taxappliedon?: string;
  value5?: string;
  value6?: number;
  slabtaxdata?: string;
}
