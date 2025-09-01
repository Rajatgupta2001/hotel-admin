/**
 * PosFolios Model
 * Database table: posfolios
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosFolios {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  invoiceid?: number;
  refid?: number;
  posid?: number;
  prodid?: number;
  title?: string;
  description?: string;
  price?: number;
  tax?: number;
  nettotal?: number;
  groupid?: number;
  rsvid?: number;
  guestid?: number;
  ownertype?: number;
  foliono?: string;
  customfoliono?: string;
  islocked?: number;
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  foliotype?: string;
  pmnttype?: string;
}

export interface ICreatePosFolios {
  hotelid?: number;
  invoiceid?: number;
  refid?: number;
  posid?: number;
  prodid?: number;
  title?: string;
  description?: string;
  price?: number;
  tax?: number;
  nettotal?: number;
  groupid?: number;
  rsvid?: number;
  guestid?: number;
  ownertype?: number;
  foliono?: string;
  customfoliono?: string;
  islocked?: number;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  foliotype?: string;
  pmnttype?: string;
}
export interface IUpdatePosFolios {
  hotelid?: number;
  invoiceid?: number;
  refid?: number;
  posid?: number;
  prodid?: number;
  title?: string;
  description?: string;
  price?: number;
  tax?: number;
  nettotal?: number;
  groupid?: number;
  rsvid?: number;
  guestid?: number;
  ownertype?: number;
  foliono?: string;
  customfoliono?: string;
  islocked?: number;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  foliotype?: string;
  pmnttype?: string;
}