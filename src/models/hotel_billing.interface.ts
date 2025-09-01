/**
 * HotelBilling Model
 * Database table: hotelbilling
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelBilling {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  currencyid?: number;
  salestypes?: string;
  billto?: string;
  isgroupbilling?: number;
  reslrid?: number;
  reslrcomm?: number;
  reslrcommtype?: string;
  billingstartdate?: Date;
  billingcycle?: number;
  billingplanid?: number;
  leadid?: string;
  status?: Date;
  toemails?: string;
  ccemails?: string;
  bccemails?: string;
  commemails?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  autochargecc?: number;
  businesstype?: string;
  lasthourreminder?: number;
  ignorereminder?: number;
  invfootertext?: string;
}

export interface ICreateHotelBilling {
  hotelid?: number;
  currencyid?: number;
  salestypes?: string;
  billto?: string;
  isgroupbilling?: number;
  reslrid?: number;
  reslrcomm?: number;
  reslrcommtype?: string;
  billingstartdate?: Date;
  billingcycle?: number;
  billingplanid?: number;
  leadid?: string;
  status?: Date;
  toemails?: string;
  ccemails?: string;
  bccemails?: string;
  commemails?: string;
  createdby?: number;
  modifiedby?: number;
  autochargecc?: number;
  businesstype?: string;
  lasthourreminder?: number;
  ignorereminder?: number;
  invfootertext?: string;
}
export interface IUpdateHotelBilling {
  hotelid?: number;
  currencyid?: number;
  salestypes?: string;
  billto?: string;
  isgroupbilling?: number;
  reslrid?: number;
  reslrcomm?: number;
  reslrcommtype?: string;
  billingstartdate?: Date;
  billingcycle?: number;
  billingplanid?: number;
  leadid?: string;
  status?: Date;
  toemails?: string;
  ccemails?: string;
  bccemails?: string;
  commemails?: string;
  createdby?: number;
  modifiedby?: number;
  autochargecc?: number;
  businesstype?: string;
  lasthourreminder?: number;
  ignorereminder?: number;
  invfootertext?: string;
}