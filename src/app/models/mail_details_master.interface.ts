/**
 * MailDetailsMaster Model
 * Database table: maildetailsmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IMailDetailsMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  encrptiontype?: string;
  fromname?: string;
  auth?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateMailDetailsMaster {
  hotelid?: number;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  encrptiontype?: string;
  fromname?: string;
  auth?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateMailDetailsMaster {
  hotelid?: number;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  encrptiontype?: string;
  fromname?: string;
  auth?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}