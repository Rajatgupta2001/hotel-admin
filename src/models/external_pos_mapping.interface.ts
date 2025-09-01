/**
 * ExternalPosMapping Model
 * Database table: externalposmapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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