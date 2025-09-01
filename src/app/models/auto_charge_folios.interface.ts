/**
 * AutoChargeFolios Model
 * Database table: autochargefolios
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAutoChargeFolios {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateAutoChargeFolios {
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