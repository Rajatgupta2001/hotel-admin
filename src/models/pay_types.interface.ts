import type { IRsvPmntDetails } from './rsv_pmnt_details.interface';
/**
 * PayTypes Model
 * Database table: paytypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPayTypes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  paymentmode?: string;
  title?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  readonly?: number;
  ispaypal?: number;
  viewmode?: number;
  payshortname?: string;
  accountcodeid?: number;
  credittobank?: Date;
  paymentDetails?: IRsvPmntDetails;
}

export interface ICreatePayTypes {
  hotelid?: number;
  paymentmode?: string;
  title?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  readonly?: number;
  ispaypal?: number;
  viewmode?: number;
  payshortname?: string;
  accountcodeid?: number;
  credittobank?: Date;
  paymentDetails?: IRsvPmntDetails;
}
export interface IUpdatePayTypes {
  hotelid?: number;
  paymentmode?: string;
  title?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  readonly?: number;
  ispaypal?: number;
  viewmode?: number;
  payshortname?: string;
  accountcodeid?: number;
  credittobank?: Date;
  paymentDetails?: IRsvPmntDetails;
}