/**
 * ApiKeysBackup Model Interfaces
 * Database table: apiKeysBackup
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IApiKeysBackup {
  id?: number;  // Primary key - auto-generated
  consumerkey: string;  // Required
  consumersecret: string;  // Required
  hotelid?: number;
  refid: number;  // Required
  reftype: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateApiKeysBackup {
  consumerkey: string;
  consumersecret: string;
  hotelid?: number;
  refid: number;
  reftype: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateApiKeysBackup {
  consumerkey?: string;
  consumersecret?: string;
  hotelid?: number;
  refid?: number;
  reftype?: string;
  status?: string;
}
