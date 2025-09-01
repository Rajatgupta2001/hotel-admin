/**
 * Inclusions Model
 * Database table: inclusions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  name?: string;
  description?: string;
  shortname?: string;
  pospointid: number;  // Required
  poscatid: number;  // Required
  prodid: number;  // Required
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  image?: string;
  calcrule?: string;
  postingrythm?: string;
  autoupdateprice: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  publishonweb?: number;
  isquantitybased?: number;  // Default: 0 (backend)
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sortorder?: number;  // Default: 0 (backend)
}

export interface ICreateInclusions {
  hotelid: number;
  name?: string;
  description?: string;
  shortname?: string;
  pospointid: number;
  poscatid: number;
  prodid: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  image?: string;
  calcrule?: string;
  postingrythm?: string;
  autoupdateprice: number;
  createdby?: number;
  publishonweb?: number;
  isquantitybased?: number;
  status?: string;
  modifiedby?: number;
  sortorder?: number;
}
export interface IUpdateInclusions {
  hotelid?: number;
  name?: string;
  description?: string;
  shortname?: string;
  pospointid?: number;
  poscatid?: number;
  prodid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  image?: string;
  calcrule?: string;
  postingrythm?: string;
  autoupdateprice?: number;
  createdby?: number;
  publishonweb?: number;
  isquantitybased?: number;
  status?: string;
  modifiedby?: number;
  sortorder?: number;
}