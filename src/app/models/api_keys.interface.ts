/**
 * ApiKeys Model
 * Database table: apikeys
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IApiKeys {
  id?: string;  // Primary key - auto-generated
  consumerkey?: string;
  consumersecret?: string;
  hotelid?: number;
  refid?: number;
  reftype?: string;
  appname?: string;
  apptype?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  status?: Date;
}

export interface ICreateApiKeys {
  consumerkey?: string;
  consumersecret?: string;
  hotelid?: number;
  refid?: number;
  reftype?: string;
  appname?: string;
  apptype?: string;
  status?: Date;
}
export interface IUpdateApiKeys {
  consumerkey?: string;
  consumersecret?: string;
  hotelid?: number;
  refid?: number;
  reftype?: string;
  appname?: string;
  apptype?: string;
  status?: Date;
}