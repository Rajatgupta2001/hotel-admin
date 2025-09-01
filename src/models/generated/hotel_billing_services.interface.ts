/**
 * HotelBillingServices Model Interfaces
 * Database table: hotelBillingServices
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelBillingServices {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  billingservicemasterid: number;  // Required
  billingserviceid: number;  // Required
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
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelBillingServices {
  hotelid: number;
  billingservicemasterid: number;
  billingserviceid: number;
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
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
