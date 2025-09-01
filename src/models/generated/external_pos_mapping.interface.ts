/**
 * ExternalPosMapping Model Interfaces
 * Database table: externalPosMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IExternalPosMapping {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  account?: string;
  externalrefid1?: number;
  externalrefid2?: string;
  externalrefid3?: number;
  externalrefid4?: string;
  externalrefid5?: number;
  hxid?: number;
  type?: string;
  status?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateExternalPosMapping {
  hotelid?: number;
  account?: string;
  externalrefid1?: number;
  externalrefid2?: string;
  externalrefid3?: number;
  externalrefid4?: string;
  externalrefid5?: number;
  hxid?: number;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateExternalPosMapping {
  hotelid?: number;
  account?: string;
  externalrefid1?: number;
  externalrefid2?: string;
  externalrefid3?: number;
  externalrefid4?: string;
  externalrefid5?: number;
  hxid?: number;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
