/**
 * HotelInvoices Model
 * Database table: hotelinvoices
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelInvoices {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
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