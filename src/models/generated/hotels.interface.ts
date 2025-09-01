/**
 * Hotels Model Interfaces
 * Database table: hotels
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotels {
  id?: number;  // Primary key - auto-generated
  compid: number;  // Required
  hotelname?: string;
  catid?: number;
  logoimage?: string;
  description?: string;
  noofrooms?: number;
  services?: string;
  website?: string;
  totalrevenue?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  paymentplan?: number;
  reservationcost?: number;
  webreservationcost?: number;
  minamount?: number;
  cautionmoney?: number;
  discount?: number;  // Default: text("'0.000000'"
  disctype?: string;  // Default: text("'FV'"
  billingcycledate?: Date;
  billingcycle?: number;  // Default: text("'1'"
  lastinvoicedate?: Date;
  lastpaymentdate?: Date;
  nextbillingdate?: Date;  // Default: text("'0000-00-00 00:00:00'"
  isnightauditstarted?: number;
  nightauditrunby?: number;
  nightaudittime?: Date;
  ismailsent?: number;
  islogoutfromadminstart?: number;
  logoutfromadmintime?: Date;
  expirydays?: number;  // Default: text("'15'"
  isalwaysactive?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  setdefaultconstate?: number;
  hotelemailid?: string;
  billingcurrency?: string;
  customertype?: string;  // Default: text("'CUST_DI'"
  billtotype?: string;
  resellerid?: number;
  webrsvtype?: string;
  billingins?: string;
  annualmaintenancefee?: number;
  rsvcostperroom?: number;
  minbilling?: number;
  othercharge?: number;  // Default: text("'0.000000'"
  otherchargeins?: string;
  otherreservationcost?: number;
  otherrsvtype?: string;
  limitroomnight?: number;
  weblimitroomnight?: number;
  otherlimitroomnight?: number;
  canlogintodeletehoteldata?: number;
  deletehoteldatavarifycode?: string;
  showbillingalert?: number;
  showbillextendform?: number;
  billextendstartdate?: Date;
  billextensionhour?: number;  // Default: text("'120'"
  activationdate?: Date;
  deactivationdate?: Date;
  taid?: number;  // Default: text("'1'"
  surveycompleted?: number;
  hotelmode?: string;  // Default: text("'TRIAL'"
  producttrial?: number;  // Default: text("'1'"
  longitude?: number;
  latitude?: number;
  miscdata?: string;
}

// Create interface - for new entity creation
export interface ICreateHotels {
  compid: number;
  hotelname?: string;
  catid?: number;
  logoimage?: string;
  description?: string;
  noofrooms?: number;
  services?: string;
  website?: string;
  totalrevenue?: number;
  createdby?: number;
  status: string;
  paymentplan?: number;
  reservationcost?: number;
  webreservationcost?: number;
  minamount?: number;
  cautionmoney?: number;
  discount?: number;
  disctype?: string;
  billingcycledate?: Date;
  billingcycle?: number;
  lastinvoicedate?: Date;
  lastpaymentdate?: Date;
  nextbillingdate?: Date;
  isnightauditstarted?: number;
  nightauditrunby?: number;
  nightaudittime?: Date;
  ismailsent?: number;
  islogoutfromadminstart?: number;
  logoutfromadmintime?: Date;
  expirydays?: number;
  isalwaysactive?: number;
  modifiedby?: number;
  setdefaultconstate?: number;
  hotelemailid?: string;
  billingcurrency?: string;
  customertype?: string;
  billtotype?: string;
  resellerid?: number;
  webrsvtype?: string;
  billingins?: string;
  annualmaintenancefee?: number;
  rsvcostperroom?: number;
  minbilling?: number;
  othercharge?: number;
  otherchargeins?: string;
  otherreservationcost?: number;
  otherrsvtype?: string;
  limitroomnight?: number;
  weblimitroomnight?: number;
  otherlimitroomnight?: number;
  canlogintodeletehoteldata?: number;
  deletehoteldatavarifycode?: string;
  showbillingalert?: number;
  showbillextendform?: number;
  billextendstartdate?: Date;
  billextensionhour?: number;
  activationdate?: Date;
  deactivationdate?: Date;
  taid?: number;
  surveycompleted?: number;
  hotelmode?: string;
  producttrial?: number;
  longitude?: number;
  latitude?: number;
  miscdata?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotels {
  compid?: number;
  hotelname?: string;
  catid?: number;
  logoimage?: string;
  description?: string;
  noofrooms?: number;
  services?: string;
  website?: string;
  totalrevenue?: number;
  createdby?: number;
  status?: string;
  paymentplan?: number;
  reservationcost?: number;
  webreservationcost?: number;
  minamount?: number;
  cautionmoney?: number;
  discount?: number;
  disctype?: string;
  billingcycledate?: Date;
  billingcycle?: number;
  lastinvoicedate?: Date;
  lastpaymentdate?: Date;
  nextbillingdate?: Date;
  isnightauditstarted?: number;
  nightauditrunby?: number;
  nightaudittime?: Date;
  ismailsent?: number;
  islogoutfromadminstart?: number;
  logoutfromadmintime?: Date;
  expirydays?: number;
  isalwaysactive?: number;
  modifiedby?: number;
  setdefaultconstate?: number;
  hotelemailid?: string;
  billingcurrency?: string;
  customertype?: string;
  billtotype?: string;
  resellerid?: number;
  webrsvtype?: string;
  billingins?: string;
  annualmaintenancefee?: number;
  rsvcostperroom?: number;
  minbilling?: number;
  othercharge?: number;
  otherchargeins?: string;
  otherreservationcost?: number;
  otherrsvtype?: string;
  limitroomnight?: number;
  weblimitroomnight?: number;
  otherlimitroomnight?: number;
  canlogintodeletehoteldata?: number;
  deletehoteldatavarifycode?: string;
  showbillingalert?: number;
  showbillextendform?: number;
  billextendstartdate?: Date;
  billextensionhour?: number;
  activationdate?: Date;
  deactivationdate?: Date;
  taid?: number;
  surveycompleted?: number;
  hotelmode?: string;
  producttrial?: number;
  longitude?: number;
  latitude?: number;
  miscdata?: string;
}
