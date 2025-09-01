/**
 * ApiKeys Model Interfaces
 * Database table: apiKeys
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IApiKeys {
  id?: string;  // Primary key - auto-generated
  consumerkey: string;  // Required
  consumersecret: string;  // Required
  hotelid?: number;
  refid: number;  // Required
  reftype: string;  // Required
  appname?: string;  // Default: text("'CRS'"
  apptype?: string;  // Default: text("'EXTERNAL'"
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateApiKeys {
  consumerkey: string;
  consumersecret: string;
  hotelid?: number;
  refid: number;
  reftype: string;
  appname?: string;
  apptype?: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateApiKeys {
  consumerkey?: string;
  consumersecret?: string;
  hotelid?: number;
  refid?: number;
  reftype?: string;
  appname?: string;
  apptype?: string;
  status?: string;
}
