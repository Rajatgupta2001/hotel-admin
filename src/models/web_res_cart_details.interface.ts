/**
 * WebResCartDetails Model
 * Database table: webrescartdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  issplited?: number;
  specialdiscountid?: number;
  tadiscount?: number;
}

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