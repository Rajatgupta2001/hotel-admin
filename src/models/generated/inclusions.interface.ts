/**
 * Inclusions Model Interfaces
 * Database table: inclusions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  name: string;  // Required
  description: string;  // Required
  shortname?: string;
  pospointid: number;  // Required
  poscatid: number;  // Required
  prodid: number;  // Required
  price?: number;
  discount?: number;
  discounttype: string;  // Required
  amount?: number;
  image: string;  // Required
  calcrule: string;  // Required
  postingrythm: string;  // Required
  autoupdateprice: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  publishonweb?: number;  // Default: text("'1'"
  isquantitybased?: number;  // Default: 0
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sortorder?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateInclusions {
  hotelid: number;
  name: string;
  description: string;
  shortname?: string;
  pospointid: number;
  poscatid: number;
  prodid: number;
  price?: number;
  discount?: number;
  discounttype: string;
  amount?: number;
  image: string;
  calcrule: string;
  postingrythm: string;
  autoupdateprice: number;
  createdby?: number;
  publishonweb?: number;
  isquantitybased?: number;
  status: string;
  modifiedby?: number;
  sortorder?: number;
}

// Update interface - for entity updates (all fields optional)
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
