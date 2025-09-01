/**
 * HotelInvoices Model Interfaces
 * Database table: hotelInvoices
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelInvoices {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  billingfrom?: Date;  // Default: text("'0000-00-00 00:00:00'"
  billingto?: Date;  // Default: text("'0000-00-00 00:00:00'"
  planid?: number;
  noofrsvs?: number;  // Default: 0
  noofroomnites?: number;  // Default: 0
  rate?: number;
  webrate?: number;
  rsvtotal?: number;
  webtotal?: number;
  othercharges?: number;  // Default: text("'0.000000'"
  total?: number;
  discount?: number;  // Default: text("'0.000000'"
  disctype?: string;  // Default: text("'FV'"
  discountamount?: number;  // Default: text("'0.000000'"
  priceaftdisc?: number;
  tax?: number;  // Default: text("'0.000000'"
  taxaftdisc?: number;
  nettotal?: number;
  paid?: number;
  balance?: number;
  noofwebrsv?: number;  // Default: 0
  status?: string;
  invoicetype?: string;  // Default: text("'DF'"
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  extracharge?: number;  // Default: text("'0.000000'"
  extrachargeins?: string;
  yearlycharge?: number;  // Default: text("'0.000000'"
  otherrsvrate?: number;
  noofotherrsv?: number;
  otherrsvtotal?: number;
  limitroomnight?: number;
  weblimitroomnight?: number;
  otherlimitroomnight?: number;
  accountfoliomasterid?: number;
  customchargesent?: number;  // Default: 0
  otherreservationscomm?: number;
  minbillingamount?: number;  // Default: text("'0.000000'"
  noofotherrsvrn?: number;  // Default: 0
  otherrsvtotalcostpn?: number;  // Default: text("'0.000000'"
  noofotherrsvrsv?: number;  // Default: 0
  otherrsvtotalcostrsv?: number;  // Default: text("'0.000000'"
  mailsent?: number;  // Default: 0
  billto?: string;
  directbookingreceived?: number;  // Default: 0
  webbookingreceived?: number;  // Default: 0
  otherbookingreceived?: number;  // Default: 0
  noofwebrsvcanc?: number;  // Default: 0
  noofotherrsvrncanc?: number;
  otherrsvtotalcostpncanc?: number;  // Default: text("'0.000000'"
  noofotherrsvrsvcanc?: number;  // Default: 0
  otherrsvtotalcostrsvcanc?: number;  // Default: text("'0.000000'"
  noofrsvscanc?: number;  // Default: 0
  noofroomnightscanc?: number;  // Default: 0
  noofroom?: number;
}

// Create interface - for new entity creation
export interface ICreateHotelInvoices {
  hotelid?: number;
  billingfrom?: Date;
  billingto?: Date;
  planid?: number;
  noofrsvs?: number;
  noofroomnites?: number;
  rate?: number;
  webrate?: number;
  rsvtotal?: number;
  webtotal?: number;
  othercharges?: number;
  total?: number;
  discount?: number;
  disctype?: string;
  discountamount?: number;
  priceaftdisc?: number;
  tax?: number;
  taxaftdisc?: number;
  nettotal?: number;
  paid?: number;
  balance?: number;
  noofwebrsv?: number;
  status?: string;
  invoicetype?: string;
  extracharge?: number;
  extrachargeins?: string;
  yearlycharge?: number;
  otherrsvrate?: number;
  noofotherrsv?: number;
  otherrsvtotal?: number;
  limitroomnight?: number;
  weblimitroomnight?: number;
  otherlimitroomnight?: number;
  accountfoliomasterid?: number;
  customchargesent?: number;
  otherreservationscomm?: number;
  minbillingamount?: number;
  noofotherrsvrn?: number;
  otherrsvtotalcostpn?: number;
  noofotherrsvrsv?: number;
  otherrsvtotalcostrsv?: number;
  mailsent?: number;
  billto?: string;
  directbookingreceived?: number;
  webbookingreceived?: number;
  otherbookingreceived?: number;
  noofwebrsvcanc?: number;
  noofotherrsvrncanc?: number;
  otherrsvtotalcostpncanc?: number;
  noofotherrsvrsvcanc?: number;
  otherrsvtotalcostrsvcanc?: number;
  noofrsvscanc?: number;
  noofroomnightscanc?: number;
  noofroom?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelInvoices {
  hotelid?: number;
  billingfrom?: Date;
  billingto?: Date;
  planid?: number;
  noofrsvs?: number;
  noofroomnites?: number;
  rate?: number;
  webrate?: number;
  rsvtotal?: number;
  webtotal?: number;
  othercharges?: number;
  total?: number;
  discount?: number;
  disctype?: string;
  discountamount?: number;
  priceaftdisc?: number;
  tax?: number;
  taxaftdisc?: number;
  nettotal?: number;
  paid?: number;
  balance?: number;
  noofwebrsv?: number;
  status?: string;
  invoicetype?: string;
  extracharge?: number;
  extrachargeins?: string;
  yearlycharge?: number;
  otherrsvrate?: number;
  noofotherrsv?: number;
  otherrsvtotal?: number;
  limitroomnight?: number;
  weblimitroomnight?: number;
  otherlimitroomnight?: number;
  accountfoliomasterid?: number;
  customchargesent?: number;
  otherreservationscomm?: number;
  minbillingamount?: number;
  noofotherrsvrn?: number;
  otherrsvtotalcostpn?: number;
  noofotherrsvrsv?: number;
  otherrsvtotalcostrsv?: number;
  mailsent?: number;
  billto?: string;
  directbookingreceived?: number;
  webbookingreceived?: number;
  otherbookingreceived?: number;
  noofwebrsvcanc?: number;
  noofotherrsvrncanc?: number;
  otherrsvtotalcostpncanc?: number;
  noofotherrsvrsvcanc?: number;
  otherrsvtotalcostrsvcanc?: number;
  noofrsvscanc?: number;
  noofroomnightscanc?: number;
  noofroom?: number;
}
