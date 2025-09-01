/**
 * PosFolios Model Interfaces
 * Database table: posFolios
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  islocked?: number;  // Default: 0
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  foliotype?: string;  // Default: text("'INV'"
  pmnttype?: string;
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
