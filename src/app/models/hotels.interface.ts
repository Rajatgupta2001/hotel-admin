/**
 * Hotels Model
 * Database table: hotels
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IHotelCustomSettings } from './hotel_custom_settings.interface';
import { IHotelSettings } from './hotel_settings.interface';
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
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
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
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
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
  producttrial?: number;  // Required
  longitude?: number;
  latitude?: number;
  miscdata?: string;
  settings?: IHotelSettings;
  customSettings?: IHotelCustomSettings;
}

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
  settings?: IHotelSettings;
  customSettings?: IHotelCustomSettings;
}
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
  settings?: IHotelSettings;
  customSettings?: IHotelCustomSettings;
}