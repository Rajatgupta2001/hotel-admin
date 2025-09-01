/**
 * PayTypes Model Interfaces
 * Database table: payTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPayTypes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  paymentmode?: string;  // Default: text("'cash'"
  title: string;  // Required
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  readonly?: number;  // Default: 0
  ispaypal?: number;  // Default: 0
  viewmode?: number;  // Default: text("'1'"
  payshortname?: string;
  accountcodeid?: number;  // Default: 0
  credittobank?: string;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreatePayTypes {
  hotelid: number;
  paymentmode?: string;
  title: string;
  description?: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
  readonly?: number;
  ispaypal?: number;
  viewmode?: number;
  payshortname?: string;
  accountcodeid?: number;
  credittobank?: string;
}

// Update interface - for entity updates (all fields optional)
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
  credittobank?: string;
}
