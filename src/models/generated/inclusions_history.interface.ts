/**
 * InclusionsHistory Model Interfaces
 * Database table: inclusionsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclusionsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  name: string;  // Required
  description: string;  // Required
  prodid: number;  // Required
  price?: number;
  discount?: number;
  discounttype: string;  // Required
  amount?: number;
  image: string;  // Required
  calcrule: string;  // Required
  postingrythm: string;  // Required
  autoupdateprice: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate: Date;  // Required
  status: string;  // Required
  refid: number;  // Required
}

// Create interface - for new entity creation
export interface ICreateInclusionsHistory {
  hotelid: number;
  name: string;
  description: string;
  prodid: number;
  price?: number;
  discount?: number;
  discounttype: string;
  amount?: number;
  image: string;
  calcrule: string;
  postingrythm: string;
  autoupdateprice: number;
  modifiedby?: number;
  servmdate: Date;
  status: string;
  refid: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInclusionsHistory {
  hotelid?: number;
  name?: string;
  description?: string;
  prodid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  image?: string;
  calcrule?: string;
  postingrythm?: string;
  autoupdateprice?: number;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
}
