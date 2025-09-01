/**
 * CreditCardDetails Model Interfaces
 * Database table: creditCardDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICreditCardDetails {
  id?: string;  // Primary key - auto-generated
  refid?: number;
  hotelid?: number;
  rsvid?: number;
  temprsvid?: number;
  groupid?: number;
  tempgroupid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  address?: string;
  countryid?: number;
  stateid?: number;
  otherstate?: string;
  city?: string;
  zipcode?: string;
  phone?: string;
  ccnumber?: string;
  securitycode?: string;
  cctypeid?: number;
  expmonth?: number;
  expyear?: number;
  tablename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  cctrack1?: string;
  cctrack2?: string;
  pcitoken?: string;
}

// Create interface - for new entity creation
export interface ICreateCreditCardDetails {
  refid?: number;
  hotelid?: number;
  rsvid?: number;
  temprsvid?: number;
  groupid?: number;
  tempgroupid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  address?: string;
  countryid?: number;
  stateid?: number;
  otherstate?: string;
  city?: string;
  zipcode?: string;
  phone?: string;
  ccnumber?: string;
  securitycode?: string;
  cctypeid?: number;
  expmonth?: number;
  expyear?: number;
  tablename?: string;
  createdby?: number;
  modifiedby?: number;
  cctrack1?: string;
  cctrack2?: string;
  pcitoken?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCreditCardDetails {
  refid?: number;
  hotelid?: number;
  rsvid?: number;
  temprsvid?: number;
  groupid?: number;
  tempgroupid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  address?: string;
  countryid?: number;
  stateid?: number;
  otherstate?: string;
  city?: string;
  zipcode?: string;
  phone?: string;
  ccnumber?: string;
  securitycode?: string;
  cctypeid?: number;
  expmonth?: number;
  expyear?: number;
  tablename?: string;
  createdby?: number;
  modifiedby?: number;
  cctrack1?: string;
  cctrack2?: string;
  pcitoken?: string;
}
