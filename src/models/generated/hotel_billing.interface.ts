/**
 * HotelBilling Model Interfaces
 * Database table: hotelBilling
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelBilling {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  currencyid: number;  // Required
  salestypes?: string;  // Default: text("'DIRECT'"
  billto: string;  // Required
  isgroupbilling?: number;
  reslrid?: number;  // Default: 0
  reslrcomm?: number;  // Default: text("'0.000000'"
  reslrcommtype?: string;
  billingstartdate?: Date;
  billingcycle?: number;
  billingplanid?: number;
  leadid?: string;
  status?: string;  // Default: 'A'
  toemails?: string;
  ccemails?: string;
  bccemails?: string;
  commemails?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  autochargecc?: number;  // Default: 0
  businesstype?: string;
  lasthourreminder?: number;  // Default: 0
  ignorereminder?: number;  // Default: 0
  invfootertext?: string;
}

// Create interface - for new entity creation
export interface ICreateHotelBilling {
  hotelid: number;
  currencyid: number;
  salestypes?: string;
  billto: string;
  isgroupbilling?: number;
  reslrid?: number;
  reslrcomm?: number;
  reslrcommtype?: string;
  billingstartdate?: Date;
  billingcycle?: number;
  billingplanid?: number;
  leadid?: string;
  status?: string;
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

// Update interface - for entity updates (all fields optional)
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
  status?: string;
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
