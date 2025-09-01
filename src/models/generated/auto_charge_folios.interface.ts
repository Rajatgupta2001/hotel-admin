/**
 * AutoChargeFolios Model Interfaces
 * Database table: autoChargeFolios
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAutoChargeFolios {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  grouptype?: string;
  groupid?: number;
  hotelname: string;  // Required
  billingdate?: Date;
  foliono?: string;
  status?: string;
  datefrom?: Date;
  dateto?: Date;
  autocharge?: number;
  striperesponse?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateAutoChargeFolios {
  hotelid: number;
  grouptype?: string;
  groupid?: number;
  hotelname: string;
  billingdate?: Date;
  foliono?: string;
  status?: string;
  datefrom?: Date;
  dateto?: Date;
  autocharge?: number;
  striperesponse?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAutoChargeFolios {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  hotelname?: string;
  billingdate?: Date;
  foliono?: string;
  status?: string;
  datefrom?: Date;
  dateto?: Date;
  autocharge?: number;
  striperesponse?: string;
  createdby?: number;
}
