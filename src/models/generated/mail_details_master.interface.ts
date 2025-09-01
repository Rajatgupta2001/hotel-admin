/**
 * MailDetailsMaster Model Interfaces
 * Database table: mailDetailsMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMailDetailsMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  host?: string;
  port?: number;  // Default: text("'25'"
  username?: string;
  password?: string;
  encrptiontype?: string;
  fromname?: string;
  auth?: number;  // Default: text("'1'"
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
