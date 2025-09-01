/**
 * HotelBillingServices Model
 * Database table: hotelbillingservices
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelBillingServices {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  value7?: string;
  value8?: string;
  value9?: string;
  value10?: string;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelBillingServices {
  hotelid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  value7?: string;
  value8?: string;
  value9?: string;
  value10?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateHotelBillingServices {
  hotelid?: number;
  billingservicemasterid?: number;
  billingserviceid?: number;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  value7?: string;
  value8?: string;
  value9?: string;
  value10?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}