/**
 * ApiKeysBackup Model
 * Database table: apikeysbackup
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IApiKeysBackup {
  id?: number;  // Primary key - auto-generated
  consumerkey?: string;
  consumersecret?: string;
  hotelid?: number;
  refid?: number;
  reftype?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  status?: Date;
}

export interface ICreateApiKeysBackup {
  consumerkey?: string;
  consumersecret?: string;
  hotelid?: number;
  refid?: number;
  reftype?: string;
  status?: Date;
}
export interface IUpdateApiKeysBackup {
  consumerkey?: string;
  consumersecret?: string;
  hotelid?: number;
  refid?: number;
  reftype?: string;
  status?: Date;
}