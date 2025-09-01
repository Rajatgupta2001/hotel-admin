/**
 * WebResCartDetails Model Interfaces
 * Database table: webResCartDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebResCartDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  webrefid?: string;
  rmtypeid?: number;
  rateid?: number;
  noofroom?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  non?: number;
  adult?: number;  // Default: 0
  children?: number;  // Default: 0
  infant?: number;  // Default: 0
  unitprice?: number;
  totalroomtax?: number;
  addonsids?: string;
  addonsqty?: string;
  addonstotalprice?: number;
  addonstotaltaxprice?: number;
  preferences?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  issplited?: number;  // Default: 0
  specialdiscountid?: number;  // Default: 0
  tadiscount?: number;  // Default: text("'0.000000'"
}

// Create interface - for new entity creation
export interface ICreateWebResCartDetails {
  hotelid?: number;
  webrefid?: string;
  rmtypeid?: number;
  rateid?: number;
  noofroom?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  non?: number;
  adult?: number;
  children?: number;
  infant?: number;
  unitprice?: number;
  totalroomtax?: number;
  addonsids?: string;
  addonsqty?: string;
  addonstotalprice?: number;
  addonstotaltaxprice?: number;
  preferences?: string;
  issplited?: number;
  specialdiscountid?: number;
  tadiscount?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebResCartDetails {
  hotelid?: number;
  webrefid?: string;
  rmtypeid?: number;
  rateid?: number;
  noofroom?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  non?: number;
  adult?: number;
  children?: number;
  infant?: number;
  unitprice?: number;
  totalroomtax?: number;
  addonsids?: string;
  addonsqty?: string;
  addonstotalprice?: number;
  addonstotaltaxprice?: number;
  preferences?: string;
  issplited?: number;
  specialdiscountid?: number;
  tadiscount?: number;
}
