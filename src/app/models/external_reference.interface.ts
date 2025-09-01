/**
 * ExternalReference Model
 * Database table: externalreference
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IExternalReference {
  id?: number;  // Primary key - auto-generated
  type?: string;
  typevalue?: string;
  reftype?: string;
  refid?: number;
  usefor?: string;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  rawresponse?: string;
  value1?: string;
  value2?: string;
}

export interface ICreateExternalReference {
  type?: string;
  typevalue?: string;
  reftype?: string;
  refid?: number;
  usefor?: string;
  status?: string;
  createdby?: number;
  rawresponse?: string;
  value1?: string;
  value2?: string;
}
export interface IUpdateExternalReference {
  type?: string;
  typevalue?: string;
  reftype?: string;
  refid?: number;
  usefor?: string;
  status?: string;
  createdby?: number;
  rawresponse?: string;
  value1?: string;
  value2?: string;
}